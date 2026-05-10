"use client";

import { useState } from "react";
import { MapPin, Sparkles } from "lucide-react";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage("Message sent successfully.");
      event.currentTarget.reset();
    } else {
      setMessage(data.error || "Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="section pb-24" style={{ scrollMarginTop: "120px" }}>
      <div className="relative overflow-hidden rounded-[2rem] border border-(--card-border) bg-linear-to-br from-(--card) via-white/65 to-(--card) p-6 sm:p-10">
        <div className="pointer-events-none absolute -top-16 -left-16 h-44 w-44 rounded-full bg-(--accent)/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 -bottom-16 h-44 w-44 rounded-full bg-(--accent-hover)/25 blur-3xl" />

        <div className="relative grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-(--accent)">Contact</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-5xl">Let&apos;s Work Together</h2>
            <p className="mt-4 text-sm leading-relaxed text-(--muted) sm:text-base">
              If you have an idea, role, or collaboration in mind, send a message.
              I usually respond quickly with next steps.
            </p>

            <div className="mt-6 rounded-2xl border border-(--card-border) bg-white/70 p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
                <MapPin size={16} className="text-(--accent)" />
                Based in India
              </div>
              <div className="relative h-40 overflow-hidden rounded-xl border border-(--card-border) bg-[#dffaff]">
                <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(31,56,70,0.15) 1px, transparent 0)", backgroundSize: "14px 14px" }} />
                <div className="absolute left-[62%] top-[48%] -translate-x-1/2 -translate-y-1/2">
                  <span className="relative flex h-4 w-4">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-(--accent)/60" />
                    <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white bg-(--accent)" />
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 rounded-full border border-(--card-border) bg-white/90 px-3 py-1 text-xs text-(--muted)">
                  Open to remote opportunities
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="grid gap-3 rounded-2xl border border-(--card-border) bg-white/75 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)] sm:p-5">
            <div className="mb-1 flex items-center gap-2 text-sm font-medium text-(--muted)">
              <Sparkles size={16} className="text-(--accent)" />
              Start a conversation
            </div>
            <input name="name" placeholder="Your name" required className="rounded-xl border border-(--card-border) bg-white px-4 py-3 outline-none transition focus:border-(--accent)" />
            <input name="email" type="email" placeholder="Your email" required className="rounded-xl border border-(--card-border) bg-white px-4 py-3 outline-none transition focus:border-(--accent)" />
            <textarea name="message" placeholder="Tell me about your project" rows={5} required className="rounded-xl border border-(--card-border) bg-white px-4 py-3 outline-none transition focus:border-(--accent)" />
            <button disabled={loading} className="w-fit rounded-full bg-(--accent) px-6 py-2.5 font-semibold text-black transition hover:bg-(--accent-hover) disabled:opacity-60">
              {loading ? "Sending..." : "Send Message"}
            </button>
            {message ? <p className="text-sm text-(--muted)">{message}</p> : null}
          </form>
        </div>
      </div>
    </section>
  );
}
