import { siteConfig } from "@/data/config";
import Image from "next/image";

export function Other() {
  const githubGraph = `https://ghchart.rshah.org/${siteConfig.githubUsername}`;

  return (
    <section id="other" className="pt-0 pb-24 sm:pb-32" style={{ scrollMarginTop: "120px" }}>
      <div className="section max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold sm:text-5xl md:text-6xl">
            GitHub <span className="text-gradient-shimmer">Activity</span>
          </h2>
        </div>

        <article className="rounded-3xl border border-(--card-border) bg-(--card) p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-(--accent)">Contribution Graph</p>
          <Image
            src={githubGraph}
            alt="GitHub contribution graph"
            width={1200}
            height={240}
            className="mt-4 w-full rounded-2xl border border-(--card-border) bg-white/70 p-2"
            unoptimized
          />
        </article>
      </div>
    </section>
  );
}
