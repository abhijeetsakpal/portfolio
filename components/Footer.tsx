import { Linkedin, Github, Mail } from "lucide-react";
import { profile } from "@/lib/data";

interface SocialIconProps {
  href: string;
  label: string;
  external?: boolean;
  icon: React.ElementType;
  /** Brand color (string for fixed brand color, or undefined to inherit foreground) */
  color?: string;
  /** When true, the icon uses the theme foreground (adapts light/dark) — for GitHub */
  themeAdaptive?: boolean;
}

function SocialIcon({
  href,
  label,
  external,
  icon: Icon,
  color,
  themeAdaptive,
}: SocialIconProps) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="inline-flex size-8 items-center justify-center rounded-lg border border-border bg-surface/60 transition-all hover:border-accent/50 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      <Icon
        size={15}
        aria-hidden="true"
        className={themeAdaptive ? "text-foreground" : undefined}
        style={!themeAdaptive && color ? { color } : undefined}
      />
    </a>
  );
}

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-border py-5 mt-6"
    >
      <div className="container-x flex flex-col-reverse sm:flex-row items-center justify-between gap-3 text-xs text-muted tracking-wide">
        <div>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-2.5">
          <SocialIcon
            href={profile.linkedin}
            label="LinkedIn"
            icon={Linkedin}
            color="#0A66C2"
            external
          />
          <SocialIcon
            href={profile.github}
            label="GitHub"
            icon={Github}
            themeAdaptive
            external
          />
          <SocialIcon
            href={`mailto:${profile.email}`}
            label={`Email ${profile.name}`}
            icon={Mail}
            color="#EA4335"
          />
        </div>
      </div>
    </footer>
  );
}
