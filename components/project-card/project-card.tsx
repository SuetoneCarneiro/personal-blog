import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  readonly title: string;
  readonly description: string;
  readonly imageSrc: string;
  readonly projectUrl: string;
  readonly btnText?: string;
}

export function ProjectCard({title, description, imageSrc, projectUrl, btnText}: ProjectCardProps) {
    return(
    <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 text-card-foreground">
        <h3 className="mb-2 text-xl font-bold">
          {title}
        </h3>
        <p className="mb-6 flex-1 text-muted-foreground">
          {description}
        </p>
        
        <Link
          href={projectUrl}
          target="_blank"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 hover:shadow-md"
        >
          {btnText}
        </Link>
      </div>
    </div>
    );
}