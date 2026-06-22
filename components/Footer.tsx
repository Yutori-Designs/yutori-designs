import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <span className="font-display text-3xl">
            Yutori<span className="text-brand-300">.</span>
          </span>
          <p className="mt-4 text-stone-300 text-[15px] leading-relaxed max-w-sm">
            Interior design and turnkey execution rooted in coastal Karnataka —
            serving Mangalore, Udupi, and beyond.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="https://www.instagram.com/yutoridesignsin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-paper/20 flex items-center justify-center hover:bg-brand-600 hover:border-brand-600 transition-colors"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.facebook.com/people/Yutori-Designs/61579105091629/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-paper/20 flex items-center justify-center hover:bg-brand-600 hover:border-brand-600 transition-colors"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Quick links</h4>
          <ul className="space-y-2.5 text-stone-300 text-[15px]">
            <li><Link href="/our-projects" className="hover:text-brand-300 transition-colors">Our Projects</Link></li>
            <li><Link href="/service/commercial" className="hover:text-brand-300 transition-colors">Services</Link></li>
            <li><Link href="/overview" className="hover:text-brand-300 transition-colors">About Us</Link></li>
            <li><Link href="/contact-us" className="hover:text-brand-300 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Contact</h4>
          <ul className="space-y-3 text-stone-300 text-[15px]">
            <li className="flex gap-2.5">
              <MapPin size={18} className="text-brand-300 shrink-0 mt-0.5" />
              <span>1st Floor, Silver Bell, Kinnimulki, Udupi, Karnataka - 576101</span>
            </li>
            <li className="flex gap-2.5">
              <Mail size={18} className="text-brand-300 shrink-0" />
              <a href="mailto:info@yutoridesigns.in" className="hover:text-brand-300 transition-colors">
                info@yutoridesigns.in
              </a>
            </li>
            <li className="flex gap-2.5">
              <Phone size={18} className="text-brand-300 shrink-0" />
              <a href="tel:+916360732460" className="hover:text-brand-300 transition-colors">
                +91 6360732460
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-stone-300">
          <p>© Yutori Designs {new Date().getFullYear()}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms-conditions" className="hover:text-brand-300 transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy-policy" className="hover:text-brand-300 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
