import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-160px)] flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h2 className="mb-10 mt-10 text-5xl font-extrabold text-gray-900">
        Oops! <br></br>Página não encontrada :(
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
        Parece que essa página foi perdida ou não existe. Não se preocupe, até os melhores exploradores (e gatos) às vezes se perdem.
      </p>

      <Link
        href="/"
        className="rounded-lg bg-gray-900 px-6 py-3 mb-10 text-base font-semibold text-white transition-transform hover:scale-105 hover:bg-gray-700 shadow-md"
      >
        Retornar à página inicial
      </Link>
    </div>
  );
}