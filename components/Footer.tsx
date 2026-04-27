import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-x flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
        <div>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &
          Tailwind.
        </div>
        <div className="flex items-center gap-6">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
