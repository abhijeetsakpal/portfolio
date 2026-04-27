"use client";

import { ArrowRight, Download, Mail } from "lucide-react";
import { profile, stats } from "@/lib/data";
import AnimatedCounter from "./AnimatedCounter";
import HeroCodeCard from "./HeroCodeCard";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 pb-16"
    >
      <div
        className="absolute inset-0 bg-grid-pattern opacity-30"
        style={{ backgroundSize: "40px 40px" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/50 to-bg pointer-events-none" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs text-foreground/85 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Available for freelance projects
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            Hi, I&apos;m{" "}
            <span className="gradient-text">{profile.name.split(" ")[0]}</span>.
            <br />I build{" "}
            <span className="gradient-text">AI-powered</span> apps that ship.
          </h1>

          <p className="text-lg md:text-xl text-foreground/65 mb-8 max-w-2xl leading-relaxed">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn-primary">
              Start a Project
              <ArrowRight size={16} />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="btn-ghost"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a href={`mailto:${profile.email}`} className="btn-ghost">
              <Mail size={16} />
              Email
            </a>
          </div>

            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
              {stats.map((s) => (
                <div key={s.label}>
                  <AnimatedCounter
                    value={s.value}
                    className="text-2xl md:text-3xl font-bold text-foreground tabular-nums"
                  />
                  <div className="text-xs text-muted mt-1 uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <HeroCodeCard />
          </div>
        </div>
      </div>
    </section>
  );
}
