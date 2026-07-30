import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/lib/get-dictionary";

export const metadata: Metadata = {
  title: "Suetone Carneiro | Projects",
  description: "Projects, systems and experiments built by Suetone Carneiro.",
};

export default async function Projetos({
  params,
}: Readonly<{ params: Promise<{ lang: string }> }>) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as "en" | "pt");
  const { projects } = dictionary;

  type ProjectItem = {
    title: string;
    description: string;
    tags?: readonly string[];
    imageSrc: string;
    projectUrl: string;
    embedUrl?: string;
  };

  const projectList: ProjectItem[] = [
    {
      ...projects.project_rescue,
      imageSrc: "/img/projects/pbl-rescue.png",
      projectUrl: "https://youtu.be/jO17bMynIs0",
      embedUrl: "https://www.youtube-nocookie.com/embed/jO17bMynIs0",
    },
    {
      ...projects.project_lc,
      imageSrc: "/img/projects/home-lc.png",
      projectUrl: "https://www.lcvistoria.com.br",
    },
    {
      ...projects.project_geniuslab,
      imageSrc: "/img/projects/genius-lab.png",
      projectUrl: "https://github.com/SuetoneCarneiro/Genius-Lab-biblioteca",
    },
    {
      ...projects.project_bingo,
      imageSrc: "/img/projects/bingo.png",
      projectUrl: "https://github.com/SuetoneCarneiro/bingo",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-background transition-colors duration-300">
      {/* Page header */}
      <section className="border-b border-border bg-secondary py-16 transition-colors duration-300 md:py-24">
        <div className="container mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-6 md:flex-row md:justify-between md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              {projects.page_title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {projects.page_description}
            </p>
          </div>

          <div className="flex w-full flex-1 justify-center md:justify-end">
            <div className="illustration-float relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-white via-sky-50 to-sky-100 shadow-lg ring-1 ring-primary/20">
              <Image
                src="/img/developer.gif"
                alt="Developer illustration"
                fill
                unoptimized
                priority
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects list - alternating layout */}
      <section className="container mx-auto max-w-6xl divide-y divide-border px-6">
        {projectList.map((project, index) => {
          const imageOnRight = index % 2 === 1;
          return (
            <article
              key={project.title}
              className="grid items-center gap-8 py-14 md:grid-cols-2 md:gap-12 md:py-20"
            >
              {/* Media: YouTube embed or image */}
              <div
                className={`relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-muted shadow-sm ${
                  project.embedUrl
                    ? ""
                    : "transition-transform duration-300 hover:scale-[1.02]"
                } ${imageOnRight ? "md:order-2" : "md:order-1"}`}
              >
                {project.embedUrl ? (
                  <iframe
                    src={project.embedUrl}
                    title={project.title}
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              {/* Text */}
              <div
                className={`flex flex-col ${
                  imageOnRight ? "md:order-1" : "md:order-2"
                }`}
              >
                <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                  {project.title}
                </h2>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {project.tags && project.tags.length > 0 && (
                  <ul className="mb-8 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="cursor-default rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-card-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/10 hover:text-primary hover:shadow-sm"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}

                <Link
                  href={project.projectUrl}
                  target="_blank"
                  className="inline-flex w-fit items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
                >
                  {projects.learn_more}
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
