"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { profile } from "@/lib/data";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // No endpoint configured → graceful fallback to mailto
    if (!endpoint) {
      const name = String(data.get("name") || "");
      const email = String(data.get("email") || "");
      const message = String(data.get("message") || "");
      const subject = encodeURIComponent(`New project inquiry from ${name}`);
      const body = encodeURIComponent(
        `From: ${name} <${email}>\n\n${message}`
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    setError("");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error || "Something went wrong. Try emailing me directly.");
      }
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Network error");
    }
  };

  if (status === "success") {
    return (
      <div className="card p-8 text-center">
        <CheckCircle2 size={40} className="text-accent2 mx-auto mb-4" />
        <h3 className="text-lg font-bold text-foreground mb-2">
          Message sent!
        </h3>
        <p className="text-foreground/70 text-sm">
          I&apos;ll get back to you within 24 hours.
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field name="name" label="Your name" required />
        <Field name="email" label="Email" type="email" required />
      </div>
      <Field name="company" label="Company (optional)" />
      <div>
        <label className="block text-xs uppercase tracking-widest text-muted mb-2">
          Project details
        </label>
        <textarea
          name="message"
          rows={5}
          required
          minLength={10}
          placeholder="What are you trying to build? Timeline, budget range, anything I should know."
          className="w-full rounded-xl border border-border bg-surface/40 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none transition-colors focus:border-accent/60"
        />
      </div>

      {status === "error" && (
        <div className="flex items-start gap-2 text-sm text-red-400">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? (
          "Sending..."
        ) : (
          <>
            Send Message
            <Send size={16} />
          </>
        )}
      </button>

      {!endpoint && (
        <p className="text-xs text-muted text-center">
          Submitting will open your email client (form endpoint not configured).
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
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-widest text-muted mb-2"
      >
        {label}
        {required && <span className="text-accent ml-0.5">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-border bg-surface/40 px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 outline-none transition-colors focus:border-accent/60"
      />
    </div>
  );
}
