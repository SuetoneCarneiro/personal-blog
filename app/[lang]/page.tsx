import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/lib/get-dictionary";
import { ProjectCard } from "@/components/project-card/project-card";

export default async function Home({ params, }: Readonly<{ params: Promise<{ lang: string }> }>) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as 'en' | 'pt');

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero section */}
      <section className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-background p-6 md:p-24 transition-colors duration-300">
        <div className="container mx-auto flex w-full max-w-6xl flex-col-reverse items-center justify-between gap-12 md:flex-row">
          
          <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
            <h1 className="mb-2 text-5xl font-extrabold tracking-tight text-foreground md:text-5xl">
              Suetone Carneiro
            </h1>
            
            <span className="mb-6 text-sm font-bold uppercase tracking-widest text-muted-foreground">
              {dictionary.home.role}
            </span>

            <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              {dictionary.home.description}
            </p>
            
            <Link
              href={`/${lang}/curriculo`}
              className="rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              {dictionary.home.cta}
            </Link>
          </div>

          <div className="flex flex-1 justify-center md:justify-end">
            <div className="relative h-64 w-64 overflow-hidden border-4 border-primary-foreground shadow-2xl md:h-96 md:w-96">
              <Image
                src="/me.png" 
                alt="Suetone Carneiro"
                fill
                className="object-cover bg-secondary"
                priority
              />
            </div>
          </div>
        </div> 
      </section>

      {/* Projects section - Visual Division */}
      <section id="projects" className="bg-secondary py-20 transition-colors duration-300">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {dictionary.home.featured}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {dictionary.home.featured_desc}
            </p>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard 
              title={dictionary.projects.card1.title}
              description={dictionary.projects.card1.description}
              imageSrc="/img/projects/pbl-rescue.png"
              projectUrl="https://youtu.be/jO17bMynIs0"
              btnText={dictionary.projects.learn_more}
            />

            <ProjectCard 
              title={dictionary.projects.card2.title}
              description={dictionary.projects.card2.description}
              imageSrc="/img/projects/genius-lab.png"
              projectUrl="https://github.com/SuetoneCarneiro/Genius-Lab-biblioteca"
              btnText={dictionary.projects.learn_more}
            />

            <ProjectCard 
              title={dictionary.projects.card3.title}
              description={dictionary.projects.card3.description}
              imageSrc="/img/projects/bingo.png"
              projectUrl="https://github.com/SuetoneCarneiro/bingo"
              btnText={dictionary.projects.learn_more}
            />
          </div>
        </div>
      </section>
    </main>
  );
}