import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  readonly title: string;
  readonly description: string;
  readonly imageSrc: string;
  readonly projectUrl: string;
  readonly btnText?: string;
  readonly tags?: readonly string[];
}

export function ProjectCard({title, description, imageSrc, projectUrl, btnText, tags}: ProjectCardProps) {
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

        {tags && tags.length > 0 && (
          <ul className="mb-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="cursor-default rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/10 hover:text-primary hover:shadow-sm"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

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