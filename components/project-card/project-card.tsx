import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  readonly title: string;
  readonly description: string;
  readonly imageSrc: string;
  readonly projectUrl: string;
}

export function ProjectCard({title, description, imageSrc, projectUrl}: ProjectCardProps) {
    return(
    <div className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-900">
          {title}
        </h3>
        <p className="mb-6 flex-1 text-gray-600">
          {description}
        </p>

        {/* Action Button */}
        <Link
          href={projectUrl}
          target="_blank"
          className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
        >
          Saiba mais
        </Link>
      </div>
    </div>
    );
}