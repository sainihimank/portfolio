import Image from "next/image";
import { siteConfig } from "@/data/config";

const timeline = [
  {
    year: "2026",
    title: "Full Stack Projects at Scale",
    detail: "Building and deploying products with React, Next.js, TypeScript, and Node.js.",
  },
  {
    year: "2025",
    title: "System Design + API Engineering",
    detail: "Worked on backend architecture, auth flows, and performance-focused APIs.",
  },
  {
    year: "2024",
    title: "Strong Frontend Foundations",
    detail: "Focused on polished, responsive interfaces and component-driven development.",
  },
];

const mindsetImages = [
  "/gundam.jpeg",
  "/art.jpeg",
  "/track.jpeg",
];

export function About() {
  return (
    <section id="about" className="section pb-28" style={{ scrollMarginTop: "120px" }}>
      <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr_0.95fr]">
        <article className="rounded-3xl border border-(--card-border) bg-(--card) p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-(--accent)">Mindset</p>
          <h3 className="mt-3 text-4xl font-bold leading-tight">More than code.</h3>
          <p className="mt-4 text-sm leading-relaxed text-(--muted)">
            Discipline and consistency shape how I build products and improve every day.
          </p>

          <div className="mt-5 space-y-3">
            {mindsetImages.map((src, index) => (
              <div key={src} className="overflow-hidden rounded-2xl border border-(--card-border)">
                <Image
                  src={src}
                  alt={`Mindset ${index + 1}`}
                  width={900}
                  height={500}
                  className="h-24 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </article>

        <div className="space-y-4">
          <article className="rounded-3xl border border-(--card-border) bg-(--card) p-7">
            <p className="text-xs uppercase tracking-[0.2em] text-(--accent)">About Me</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              {siteConfig.name}
            </h2>
            <p className="mt-2 text-sm uppercase tracking-widest text-(--muted)">{siteConfig.title}</p>
            <p className="mt-4 text-sm leading-relaxed text-(--muted)">
              I design and build reliable digital experiences with a balance of product thinking,
              clean architecture, and execution speed.
            </p>
          </article>

          <article className="overflow-hidden rounded-3xl border border-(--card-border)">
            <div className="grid grid-cols-2 gap-1 bg-(--card-border)/35 p-1">
              <Image
                src="/himank.jpeg"
      
                alt="Gallery 1"
                width={700}
                height={700}
                className="aspect-square w-full rounded-2xl object-cover"
              />
              {/* <Image
                src="https://images.unsplash.com/photo-1529074963764-98f45c47344b?q=80&w=1000&auto=format&fit=crop"
                alt="Gallery 2"
                width={700}
                height={700}
                className="aspect-square w-full rounded-2xl object-cover"
              /> */}
            </div>
          </article>

          <article className="rounded-3xl border border-(--card-border) bg-linear-to-br from-(--card) to-white/50 p-5">
            <p className="text-4xl font-black sm:text-5xl">INDIA</p>
            <p className="mt-2 text-sm uppercase tracking-wider text-(--muted)">28.6139� N, 77.2090� E</p>
            <p className="mt-1 text-sm text-(--muted)">GMT +5:30</p>
          </article>
        </div>

        <article className="rounded-3xl border border-(--card-border) bg-(--card) p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-(--accent)">Experience Timeline</p>
          <div className="mt-6 space-y-5">
            {timeline.map((item) => (
              <div key={item.year + item.title} className="relative border-l-2 border-(--accent)/40 pl-4">
                <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-(--accent)" />
                <p className="text-xs font-semibold tracking-wider text-(--muted)">{item.year}</p>
                <h3 className="mt-1 text-base font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-(--muted)">{item.detail}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
