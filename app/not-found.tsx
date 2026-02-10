import Link from "next/link";
import Image from "next/image";
import "./[lang]/globals.css";

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        
      <div className="flex min-h-[calc(100vh-160px)] flex-col items-center justify-center bg-gray-50 px-4 text-center">
        <h2 className="mb-10 mt-10 text-5xl font-extrabold text-gray-900">
          Oops! <br></br>Page not found :(
        </h2>
        {/* Image container */}
        <div className="relative mb-8 h-64 w-64 overflow-hidden border-4 border-white shadow-lg md:h-80 md:w-80">
          <Image
            src="/papito-404.png"
            alt="Cute cat looking confused"
            fill
            className="object-cover"
          />
        </div>

        
        <p className="mb-8 max-w-md text-lg text-gray-600">
          It seems that this page was lost or does not exist. Don't worry, even the best explorers (and cats) sometimes get lost.
        </p>

        <Link
          href="/"
          className="rounded-lg bg-gray-900 px-6 py-3 mb-10 text-base font-semibold text-white transition-transform hover:scale-105 hover:bg-gray-700 shadow-md"
        >
          Return to homepage
        </Link>
      </div>
      </body>
    </html>
  );
}