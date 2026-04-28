"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { profile } from "@/lib/data";

type Status = "idle" | "sending" | "success" | "error";

/**
 * Contact form wired to Web3Forms (https://web3forms.com).
 *
 * Setup:
 *   1. Sign up free at web3forms.com → create an access key
 *   2. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env.local and Vercel env vars
 *   3. Deploy
 *
 * Without the env var, the form gracefully falls back to opening the user's
 * email client with a pre-filled draft (mailto fallback).
 *
 * Security:
 *   - Honeypot field "botcheck" silently rejects bot submissions
 *   - Client-side required + email validation, plus message minLength
 *   - Submitting state disables the button to prevent double-submits
 */
export default function ContactForm() {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  const fallbackToMailto = (data: FormData) => {
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Project inquiry from ${name || "your portfolio"}`);
    const body = encodeURIComponent(
      `From: ${name} <${email}>${company ? `\nCompany: ${company}` : ""}\n\n${message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — if a bot fills the hidden field, abort silently.
    // We pretend success so bots think they succeeded and stop retrying.
    if (data.get("botcheck")) {
      setStatus("success");
      return;
    }

    // No access key configured → graceful fallback to mailto
    if (!accessKey) {
      fallbackToMailto(data);
      return;
    }

    setStatus("sending");
    setError("");

    // Web3Forms expects access_key in the body and standard form fields
    data.append("access_key", accessKey);
    data.append("from_name", "Portfolio Contact Form");
    data.append("subject", `Portfolio inquiry from ${data.get("name") || "anonymous"}`);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      const json = await res.json().catch(() => ({}));

      if (res.ok && json.success) {
        setStatus("success");
        form.reset();
      } else {
        throw new Error(
          json?.message ||
            "Couldn't send your message. Try emailing me directly at " + profile.email
        );
      }
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Network error. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="card p-8 text-center">
        <CheckCircle2 size={40} className="text-accent2 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-foreground tracking-tight mb-2">
          Message sent!
        </h3>
        <p className="text-foreground/70 text-sm leading-relaxed">
          Thanks — I&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-accent text-sm font-medium hover:underline"
        >
          Send another →
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      noValidate
      aria-describedby={status === "error" ? "form-error" : undefined}
    >
      {/* Honeypot — hidden from real users, catches bots that auto-fill every field */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          opacity: 0,
          pointerEvents: "none",
        }}
      />

      <div className="grid sm:grid-cols-2 gap-4">
        <Field
          name="name"
          label="Your name"
          required
          autoComplete="name"
          placeholder="Jane Doe"
        />
        <Field
          name="email"
          label="Email"
          type="email"
          required
          autoComplete="email"
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
          placeholder="jane@company.com"
        />
      </div>
      <Field
        name="company"
        label="Company (optional)"
        autoComplete="organization"
        placeholder="Acme Inc. — or your project name"
      />
      <div>
        <label
          htmlFor="message"
          className="block text-[11px] uppercase tracking-[0.2em] text-muted font-semibold mb-2"
        >
          Project details
          <span className="text-accent ml-0.5">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          minLength={10}
          maxLength={4000}
          placeholder="What are you trying to build? Timeline, budget range, anything I should know."
          className="w-full rounded-xl border-2 border-border bg-bg/60 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/30 hover:border-foreground/30 resize-y"
        />
      </div>

      {status === "error" && (
        <div
          id="form-error"
          role="alert"
          aria-live="assertive"
          className="flex items-start gap-2 text-sm text-red-400 rounded-lg border border-red-400/30 bg-red-400/5 p-3"
        >
          <AlertCircle size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? (
          <>
            <span className="inline-block size-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send size={16} />
          </>
        )}
      </button>

      {!accessKey && (
        <p className="text-xs text-muted text-center leading-relaxed">
          Submitting will open your email client.
          <br className="sm:hidden" />
          {" "}Or email me directly at{" "}
          <a
            href={`mailto:${profile.email}`}
            className="text-accent hover:underline"
          >
            {profile.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
  autoComplete,
  pattern,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  pattern?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[11px] uppercase tracking-[0.2em] text-muted font-semibold mb-2"
      >
        {label}
        {required && <span className="text-accent ml-0.5">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        pattern={pattern}
        placeholder={placeholder}
        className="w-full rounded-xl border-2 border-border bg-bg/60 px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/30 hover:border-foreground/30"
      />
    </div>
  );
}
