"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Mail, Phone, MapPin } from "lucide-react";

const services = [
  "Commercial & Office Interior",
  "Industrial",
  "Residential",
  "Not sure yet",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="grid lg:grid-cols-5 gap-12">
      <div className="lg:col-span-3">
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-brand-50 border border-brand-300 rounded-2xl p-10 text-center"
            >
              <CheckCircle2 size={40} className="text-brand-600 mx-auto mb-4" />
              <h3 className="font-display text-2xl text-ink-900">Message sent</h3>
              <p className="text-ink-700 mt-2">
                We&apos;ll get back to you within a day. Thank you for reaching out.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-brand-600 font-medium hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-ink-800 mb-1.5">
                    Full name
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-ink-900/15 bg-white focus:outline-none focus:ring-2 focus:ring-brand-400 transition-shadow"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-800 mb-1.5">
                    Email address
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-ink-900/15 bg-white focus:outline-none focus:ring-2 focus:ring-brand-400 transition-shadow"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-ink-800 mb-1.5">
                    Phone number
                  </label>
                  <input
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-ink-900/15 bg-white focus:outline-none focus:ring-2 focus:ring-brand-400 transition-shadow"
                    placeholder="+91 00000 00000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-800 mb-1.5">
                    Service interested in
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => update("service", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-ink-900/15 bg-white focus:outline-none focus:ring-2 focus:ring-brand-400 transition-shadow"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-ink-800 mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-ink-900/15 bg-white focus:outline-none focus:ring-2 focus:ring-brand-400 transition-shadow resize-none"
                  placeholder="Tell us about your space and what you have in mind..."
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-sm text-red-600">
                  <AlertCircle size={16} />
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-2 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-brand-600 text-paper font-medium hover:bg-brand-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Send message"}
                {status !== "loading" && <Send size={16} />}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      <div className="lg:col-span-2">
        <div className="bg-ink-900 rounded-2xl p-8 text-paper sticky top-28">
          <h3 className="font-display text-2xl mb-6">Get in touch</h3>
          <ul className="space-y-5 text-[15px]">
            <li className="flex gap-3">
              <MapPin size={19} className="text-brand-300 shrink-0 mt-0.5" />
              <span className="text-stone-300">
                1st Floor, Silver Bell, Kinnimulki, Udupi, Karnataka - 576101
                <br />
                <span className="text-stone-600 text-sm">
                  Vruddhi Enclave, Konchady, Derebail, Mangalore - 575008
                </span>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail size={19} className="text-brand-300 shrink-0" />
              <a href="mailto:info@yutoridesigns.in" className="text-stone-300 hover:text-brand-300 transition-colors">
                info@yutoridesigns.in
              </a>
            </li>
            <li className="flex gap-3">
              <Phone size={19} className="text-brand-300 shrink-0" />
              <a href="tel:+916360732460" className="text-stone-300 hover:text-brand-300 transition-colors">
                +91 6360732460
              </a>
            </li>
          </ul>
          <div className="mt-8 rounded-xl overflow-hidden h-44 bg-ink-800 flex items-center justify-center text-stone-600 text-sm">
            Map embed goes here
          </div>
        </div>
      </div>
    </div>
  );
}
