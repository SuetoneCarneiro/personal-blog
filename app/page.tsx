import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card/project-card";

export default function Home() {
  return (
    // Main container with min-height to center content vertically
    <main className="flex min-h-screen flex-col">
      <section className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-white p-6 md:p-24">
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
              Aqui você encontra meus <Link href="#projects" className="text-blue-800 underline">projetos</Link>, <Link href="/curriculo" className="text-blue-800 underline">currículo</Link>, experiências e muito mais. 
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
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Projetos Desenvolvidos
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Uma seleção dos meus trabalhos e experimentos recentes.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            
            <ProjectCard 
              title="Sistema de Reconhecimento Facial com IA para aplicações médicas - Mondragon, Espanha."
              description="Esse sistema foi desenvolvido em equipe na Universidade de Mondragon. A ideia é usar um modelo de Rede Neural Convolucional para reconhecimento facial e recuperação de informações médicas sobre paciêntes."
              imageSrc="/img/projects/pbl-rescue.png"
              projectUrl="https://youtu.be/jO17bMynIs0"
            />

            <ProjectCard 
              title="Sistema de Gestão de Bibliotecas 'Genius Lab'."
              description="Esse projeto me rendeu minha primeira vaga de estágio. Desenvolvido em Django com um banco de dados PostgreSQL, o projeto é um sistema de gestão de bibliotecas com funcionalidades de empréstimo, devolução, cadastro de livros e usuários e geração de relatórios."
              imageSrc="/img/projects/genius-lab.png"
              projectUrl="https://github.com/SuetoneCarneiro/Genius-Lab-biblioteca"
            />

            <ProjectCard 
              title="Bingo! Divirta-se com seus amigos."
              description="Fiz esse projeto mais pelo desafio técnico. Ele foi construído utilizando apenas JavaScript, HTML e CSS, sem frameworks. A ideia surgiu porque temos as cartelas de bingo em casa, mas não tinhamos nada para sortear e conseguir jogar com os amigos. É um projeto bem simples, mas funcional."
              imageSrc="/img/projects/bingo.png"
              projectUrl="https://github.com/SuetoneCarneiro/bingo"
            />

          </div>
        </div>
      </section>

      
    </main>
  );
}