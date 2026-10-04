"use client";
import { ChangeEvent, SubmitEvent, useState } from "react";
import { ArrowRightIcon, MailIcon, PhoneIcon, LocationIcon } from "./Icons";
import useReveal from "../hooks/use-reveal";
import useData from "@/hooks/use-data";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useTranslations } from "next-intl";

/**
 * EMAIL SETUP:
 * Using FormSubmit.co - completely free, no setup required!
 * The form automatically sends to: muhammadarham2177@gmail.com
 */

export default function Contact() {
  const { contact, profile } = useData();
  const ref = useReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const t = useTranslations("contactForm");

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement,
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/reza.mohamadi.98115@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
            _subject: "New Portfolio Contact Message",
            _captcha: true,
          }),
        },
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });

        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError("Failed to send message. Please try again.");
        console.error(data);
      }
    } catch (err) {
      setError(t("error"));
      console.error(err);
    }
  };

  return (
    <section id="contact" className="container-px py-16 sm:py-20">
      <div
        ref={ref as any}
        className="reveal grid lg:grid-cols-[0.9fr,1.1fr] gap-16"
      >
        {/* left copy */}
        <div>
          <p className="eyebrow mb-4">{contact.title}</p>
          <h2 className="section-heading">{contact.heading}</h2>
          <p className="section-sub">{contact.sub}</p>

          <div className="mt-10 space-y-4">
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(profile.location)}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 group"
            >
              <span className="w-11 h-11 rounded-full border border-ink-border flex items-center justify-center text-mint-400 group-hover:border-mint-500/50 transition-colors">
                <LocationIcon />
              </span>
              <span className="text-paper-300 group-hover:text-mint-400 transition-colors">
                {profile.location}
              </span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 group"
            >
              <span className="w-11 h-11 rounded-full border border-ink-border flex items-center justify-center text-mint-400 group-hover:border-mint-500/50 transition-colors">
                <MailIcon />
              </span>
              <span className="text-paper-300 group-hover:text-mint-400 transition-colors">
                {profile.email}
              </span>
            </a>
            <a
              href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-4 group"
            >
              <span className="w-11 h-11 rounded-full border border-ink-border flex items-center justify-center text-mint-400 group-hover:border-mint-500/50 transition-colors">
                <PhoneIcon />
              </span>
              <span className="text-paper-300 group-hover:text-mint-400 transition-colors">
                {profile.phone}
              </span>
            </a>
          </div>
        </div>

        {/* form */}
        <form
          onSubmit={handleSubmit}
          className="card p-6 sm:p-8 space-y-5 form-hover-glow transition-all duration-300"
        >
          {submitted && (
            <div
              role="status"
              className="p-4 bg-mint-500/10 border border-mint-500/50 rounded-lg text-mint-400 text-sm"
            >
              ✓ Message sent successfully! I'll get back to you soon.
            </div>
          )}
          {error && (
            <div
              role="alert"
              className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm"
            >
              {error}
            </div>
          )}
          <div className="space-y-5">
            <div>
              <label
                htmlFor="contact-name"
                className="font-mono text-xs text-paper-500 uppercase tracking-wide"
              >
                {t("name")}
              </label>
              <Input
                id="contact-name"
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t("namePlaceholder")}
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="font-mono text-xs text-paper-500 uppercase tracking-wide"
              >
                {t("email")}
              </label>
              <Input
                id="contact-email"
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t("emailPlaceholder")}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="contact-message"
              className="font-mono text-xs text-paper-500 uppercase tracking-wide"
            >
              {t("message")}
            </label>
            <Textarea
              id="contact-message"
              required
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t("messagePlaceholder")}
            />
          </div>
          <Button
            type="submit"
            className="h-auto w-full rounded-full bg-mint-500 px-6 py-3.5 text-sm font-semibold text-ink-950 shadow-glow hover:bg-mint-400"
          >
            {t("btnText")}
            <ArrowRightIcon className="rtl:rotate-180" width={16} height={16} />
          </Button>
          <p className="text-xs text-paper-500 text-center">
            {t("helperMessage")}
          </p>
        </form>
      </div>
    </section>
  );
}
