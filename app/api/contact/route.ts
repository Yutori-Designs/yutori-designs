import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.log("New contact form submission (RESEND_API_KEY not set):", {
        name, email, phone, service, message,
      });
      return NextResponse.json({ ok: true, mode: "logged" });
    }

    // ─── Email 1: Notification to Yutori Designs ───────────────────────
    const notifyRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Yutori Designs Website <onboarding@resend.dev>",
        to: ["pavanachar0123@gmail.com"],
        reply_to: email,
        subject: `New enquiry from ${name}`,
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background-color:#f4f4f0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f0;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
          
          <!-- Header -->
          <tr>
            <td style="background-color:#1a1a15;padding:32px 40px;text-align:center;">
              <p style="margin:0;font-size:24px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">Yutori Designs</p>
              <p style="margin:6px 0 0;font-size:13px;color:#87A766;letter-spacing:2px;text-transform:uppercase;">New Website Enquiry</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <p style="margin:0 0 24px;font-size:16px;color:#444;line-height:1.6;">
                You have received a new enquiry through the website. Details below:
              </p>

              <!-- Details Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f7f3;border-radius:12px;overflow:hidden;margin-bottom:24px;">
                <tr>
                  <td style="padding:24px 28px;">
                    
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:10px 0;border-bottom:1px solid #e8e6df;">
                          <p style="margin:0;font-size:11px;color:#87A766;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Name</p>
                          <p style="margin:4px 0 0;font-size:16px;color:#1a1a15;font-weight:600;">${name}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:10px 0;border-bottom:1px solid #e8e6df;">
                          <p style="margin:0;font-size:11px;color:#87A766;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Email</p>
                          <p style="margin:4px 0 0;font-size:16px;color:#1a1a15;">
                            <a href="mailto:${email}" style="color:#87A766;text-decoration:none;">${email}</a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:10px 0;border-bottom:1px solid #e8e6df;">
                          <p style="margin:0;font-size:11px;color:#87A766;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Phone</p>
                          <p style="margin:4px 0 0;font-size:16px;color:#1a1a15;">${phone || "—"}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:10px 0;border-bottom:1px solid #e8e6df;">
                          <p style="margin:0;font-size:11px;color:#87A766;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Service Interested In</p>
                          <p style="margin:4px 0 0;font-size:16px;color:#1a1a15;">${service || "—"}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:10px 0;">
                          <p style="margin:0;font-size:11px;color:#87A766;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Message</p>
                          <p style="margin:4px 0 0;font-size:16px;color:#1a1a15;line-height:1.6;">${message}</p>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </table>

              <!-- Reply Button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}" style="display:inline-block;background-color:#87A766;color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:50px;font-size:15px;font-weight:600;letter-spacing:0.3px;">
                      Reply to ${name}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8f7f3;padding:24px 40px;text-align:center;border-top:1px solid #e8e6df;">
              <p style="margin:0;font-size:12px;color:#999;">This email was sent from the contact form at yutoridesigns.in</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
        `,
      }),
    });

    if (!notifyRes.ok) {
      const errText = await notifyRes.text();
      console.error("Resend notify error:", errText);
      return NextResponse.json({ error: "Failed to send email." }, { status: 502 });
    }

    // ─── Email 2: Auto-reply to the person who submitted ───────────────
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Yutori Designs <onboarding@resend.dev>",
        to: [email],
        subject: `We received your enquiry, ${name.split(" ")[0]}`,
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background-color:#f4f4f0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f0;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
          
          <!-- Header -->
          <tr>
  <td style="background-color:#1a1a15;padding:32px 40px;text-align:center;">
    
    <img
      src="https://yutoridesigns.in/images/brand/logo-white.png""
      alt="Yutori Designs"
      width="180"
      style="display:block;margin:0 auto;border:0;max-width:180px;height:auto;"
    />

  </td>
</tr>
            <td style="padding:40px;">
              <h2 style="margin:0 0 16px;font-size:22px;color:#1a1a15;font-weight:700;">
                Thank you, ${name.split(" ")[0]}!
              </h2>
              <p style="margin:0 0 20px;font-size:16px;color:#555;line-height:1.7;">
                We have received your enquiry and will get back to you within <strong>1 business day</strong>. 
                Our team looks forward to understanding your vision and helping you create a space you love.
              </p>

              <!-- Summary box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f7f3;border-radius:12px;margin-bottom:28px;">
                <tr>
                  <td style="padding:24px 28px;">
                    <p style="margin:0 0 12px;font-size:13px;color:#87A766;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Your enquiry summary</p>
                    <p style="margin:0 0 6px;font-size:15px;color:#333;"><strong>Service:</strong> ${service || "General enquiry"}</p>
                    <p style="margin:0;font-size:15px;color:#333;"><strong>Message:</strong> ${message}</p>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 28px;font-size:15px;color:#555;line-height:1.7;">
                In the meantime, feel free to explore our portfolio of completed projects or reach out to us directly.
              </p>

              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="https://yutoridesigns.in/our-projects" style="display:inline-block;background-color:#87A766;color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:50px;font-size:15px;font-weight:600;">
                      View Our Projects
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Contact Info -->
          <tr>
            <td style="padding:0 40px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #e8e6df;padding-top:24px;">
                <tr>
                  <td>
                    <p style="margin:0 0 6px;font-size:13px;color:#999;">Have a question? Contact us directly:</p>
                    <p style="margin:0 0 4px;font-size:14px;color:#555;">
                      📧 <a href="mailto:info@yutoridesigns.in" style="color:#87A766;text-decoration:none;">info@yutoridesigns.in</a>
                    </p>
                    <p style="margin:0;font-size:14px;color:#555;">
                      📞 <a href="tel:+916360732460" style="color:#87A766;text-decoration:none;">+91 6360732460</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8f7f3;padding:24px 40px;text-align:center;border-top:1px solid #e8e6df;">
              <p style="margin:0 0 4px;font-size:12px;color:#999;">Yutori Designs — Udupi & Mangalore, Karnataka</p>
              <p style="margin:0;font-size:12px;color:#999;">
                <a href="https://yutoridesigns.in" style="color:#87A766;text-decoration:none;">yutoridesigns.in</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
        `,
      }),
    });

    return NextResponse.json({ ok: true, mode: "sent" });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}