import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-border">
      <div className="container-x">
        <div className="mb-14">
          <div className="section-eyebrow">Technical Skills</div>
          <h2 className="section-title">
            Tools I use to <span className="gradient-text">ship daily</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group) => (
            <div key={group.category} className="card p-6">
              <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">
                {group.category}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
