import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    // Main container with min-height to center content vertically
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-white p-6 md:p-24">
      
      <div className="container mx-auto flex w-full max-w-6xl flex-col-reverse items-center justify-between gap-12 md:flex-row">
        
        {/* Left side: text content */}
        <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
          
          
          <h1 className="mb-2 text-5xl font-extrabold tracking-tight text-blue-950 md:text-5xl">
            Suetone Carneiro
          </h1>
          
          <span className="mb-6 text-sm font-bold uppercase tracking-widest text-gray-800">
            Software Developer
          </span>

          <p className="mb-8 max-w-lg text-lg leading-relaxed text-gray-600">
            Bem vindo ao meu website! Sou um eterno aprendiz e construtor de software. 
            Aqui você encontra meus <Link href="/" className="text-blue-800 underline">projetos</Link>, <Link href="/curriculo" className="text-blue-800 underline">currículo</Link>, experiências e muito mais. 
            Fique à vontade para explorar e entrar em contato comigo :)
          </p>
          
          {/* CTA Button */}
          <Link
            href="/curriculo"
            className="rounded-lg bg-slate-900 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-slate-600 hover:shadow-lg"
          >
            Acessar Currículo
          </Link>
        </div>

        {/* Right side: image space */}
        <div className="flex flex-1 justify-center md:justify-end">
          <div className="relative h-64 w-64 overflow-hidden border-4 border-gray-100 shadow-2xl md:h-96 md:w-96">
            <Image
              src="/me.png" 
              alt="Suetone Carneiro"
              fill
              className="object-cover bg-gray-50"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}