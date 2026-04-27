import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import { profile } from "@/lib/data";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="container-x">
        <div className="card p-8 md:p-14 relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent2/15 blur-3xl pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-12">
            <div>
              <div className="section-eyebrow">Let&apos;s Talk</div>
              <h2 className="section-title mb-5">
                Have a project in mind?
                <br />
                <span className="gradient-text">Let&apos;s build it.</span>
              </h2>
              <p className="text-foreground/70 text-base leading-relaxed mb-8 max-w-md">
                I&apos;m available for freelance engagements — fixed-scope
                builds, LLM integration audits, or ongoing retainers. Drop me
                a line and I&apos;ll get back to you within 24 hours.
              </p>

              <div className="space-y-3">
                <ContactItem
                  icon={Mail}
                  label="Email"
                  value={profile.email}
                  href={`mailto:${profile.email}`}
                />
                <ContactItem
                  icon={Phone}
                  label="Phone"
                  value={profile.phone}
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                />
                <ContactItem
                  icon={Linkedin}
                  label="LinkedIn"
                  value="linkedin.com/in/abhijeetsakpal"
                  href={profile.linkedin}
                />
                <ContactItem
                  icon={Github}
                  label="GitHub"
                  value={profile.github
                    .replace(/^https?:\/\//, "")
                    .replace(/\/$/, "")}
                  href={profile.github}
                />
                <ContactItem
                  icon={MapPin}
                  label="Location"
                  value={profile.location}
                />
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface/40 hover:border-accent/40 transition-colors">
      <div className="rounded-lg bg-accent/10 p-3 text-accent shrink-0">
        <Icon size={18} />
      </div>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-[0.2em] text-muted font-semibold">
          {label}
        </div>
        <div className="text-foreground font-medium truncate text-sm mt-0.5">
          {value}
        </div>
      </div>
    </div>
  );
  if (!href) return content;

  // Only external HTTPS links open in a new tab. mailto: and tel: stay in-page.
  const isExternal = /^https?:/i.test(href);
  return (
    <a
      href={href}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="block"
    >
      {content}
    </a>
  );
}
