import { NextResponse } from "next/server";

// This route expects a RESEND_API_KEY environment variable.
// Sign up free at https://resend.com, verify your domain (or use their
// onboarding@resend.dev sender while testing), then add the key to
// .env.local as RESEND_API_KEY=re_xxxxxxxx
//
// Until that's set up, this route safely logs submissions to the server
// console instead of failing, so the form is testable from day one.

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
        name,
        email,
        phone,
        service,
        message,
      });
      return NextResponse.json({ ok: true, mode: "logged" });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Yutori Designs Website <onboarding@resend.dev>",
        to: ["info@yutoridesigns.in"],
        reply_to: email,
        subject: `New enquiry from ${name}`,
        html: `
          <h2>New enquiry from the website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "—"}</p>
          <p><strong>Service interested in:</strong> ${service || "—"}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Resend error:", errText);
      return NextResponse.json({ error: "Failed to send email." }, { status: 502 });
    }

    return NextResponse.json({ ok: true, mode: "sent" });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
