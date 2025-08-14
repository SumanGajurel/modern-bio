"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactMap from "@/components/contact-map";
export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold">Contact Me</h2>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT: FORM */}
        <div className="rounded-2xl border p-6 bg-white dark:bg-slate-900/70 backdrop-blur">
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">First name</label>
                <Input name="first" required placeholder="First" />
              </div>
              <div>
                <label className="text-sm font-medium">Last name</label>
                <Input name="last" required placeholder="Last" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <Input type="email" name="email" required placeholder="you@example.com" />
            </div>

            <div>
              <label className="text-sm font-medium">Subject</label>
              <Input name="subject" required placeholder="Subject" />
            </div>

            <div>
              <label className="text-sm font-medium">Message</label>
              <Textarea name="message" required rows={6} placeholder="How can I help?" />
            </div>

            <div className="flex items-center gap-3">
              <Button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Submit"}
              </Button>
              {status === "sent" && <span className="text-green-600 text-sm">Thanks! I’ll get back to you soon.</span>}
              {status === "error" && <span className="text-red-600 text-sm">Something went wrong. Try again.</span>}
            </div>
          </form>
        </div>

        {/* RIGHT: CONTACT INFO + MAP */}
        <div className="space-y-4">
          <div className="rounded-2xl border p-6 bg-white dark:bg-slate-900/70 backdrop-blur">
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5" />
                <a className="underline" href="mailto:you@example.com">Suman.Gajurel@dpird.wa.gov.au</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5" /> +61 420261867
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5" />
                L6-16, 1 Nash Street, Perth 6000, Western Australia
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5" /> Monday to Friday 09:00–17:00
              </li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden border">
            <ContactMap center={[-31.951280, 115.865939]} zoom={15} label="Perth Office" />
          </div>
        </div>
      </div>
    </section>
  );
}
