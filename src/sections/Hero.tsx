import { siteConfig } from "@/data/config";
import { Globe } from "@/components/Globe";

export function Hero() {
  return (
    <section
      id="home"
      className="section relative flex min-h-[100svh] items-center overflow-hidden pb-32 pt-24 sm:pt-32 lg:min-h-[112vh]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 -left-20 h-72 w-72 rounded-full bg-lime-400/30 blur-3xl" />
        <div className="absolute right-0 bottom-6 h-72 w-72 rounded-full bg-yellow-300/30 blur-3xl" />
      </div>

      <div className="grid w-full items-end gap-10 lg:grid-cols-[1.1fr_0.9fr] ">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.25em] text-(--accent) sm:text-sm">
            Himank Saini
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Full Stack Developer.
            <br />
            <span className="text-gradient-shimmer">Building useful digital products.</span>
          </h1>
          <p className="max-w-2xl text-base text-(--muted) sm:text-lg">
            {siteConfig.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-(--accent) px-5 py-2 text-sm font-semibold text-black transition-colors hover:bg-(--accent-hover)"
            >
              Explore projects
            </a>
            <a
              href={siteConfig.resumeDriveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-(--accent) px-5 py-2 text-sm font-semibold text-(--foreground) transition-colors hover:bg-(--accent)/15"
            >
              View Resume
            </a>
            <a
              href={siteConfig.resumeDownloadLink}
              className="rounded-full border border-(--card-border) px-5 py-2 text-sm font-semibold text-(--foreground) transition-colors hover:bg-(--accent)/10"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="pb-30 flex items-center justify-center lg:justify-end ">
          <Globe />
        </div>
      </div>
    </section>
  );
}
