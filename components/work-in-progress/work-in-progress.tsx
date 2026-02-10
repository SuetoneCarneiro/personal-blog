import Image from "next/image";
import Link from "next/link";

interface WorkInProgressProps {
  readonly title: string;
  readonly description?: string;
  readonly buttonText?: string;
  readonly imageSrc?: string;
  readonly showBackButton?: boolean;
  readonly backLink?: string;
}

export function WorkInProgress({
  title,
  description,
  buttonText,
  imageSrc = "/juanito-wip.png",
  showBackButton = true,
  backLink = "/"
}: WorkInProgressProps) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      
       {/* Title */}
      <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
        {title}
      </h1>

      {/* Image Container */}
      <div className="relative mb-8 h-64 w-64 overflow-hidden border-4 border-gray-100 shadow-xl md:h-80 md:w-80">
        <Image
          src={imageSrc}
          alt="Cute cat worker"
          fill
          className="object-cover object-top"
        />
      </div>

      <p className="mb-8 max-w-lg text-lg text-gray-600">
        {description}
      </p>

      {/* Optional Back Button */}
      {showBackButton && (
        <Link
          href={backLink}
          className="rounded-lg bg-gray-900 px-6 py-3 text-base font-semibold text-white transition-transform hover:scale-105 hover:bg-gray-700"
        >
          {buttonText}
        </Link>
      )}
    </div>
  );
}