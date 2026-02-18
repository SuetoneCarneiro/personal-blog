"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

interface NavDict {
  home: string;
  projects: string;
  curriculum: string;
  library: string;
  blog: string;
}
interface NavbarProps {
  dict: NavDict;
  lang: string;  
}

export function Navbar({ dict, lang }: Readonly<NavbarProps>) {
  const [open, setOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const pathname = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale; 
    return segments.join("/");
  };

  return (
    // FIX 2: Solid color (bg-card) with border for visual division. No glass effect.
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card transition-colors duration-300">
      <div className="p-4 flex items-center justify-between text-card-foreground">
        <div className="text-lg font-semibold">
          <Link href={`/${lang}`}>Suetone.dev.br</Link>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:bg-secondary rounded-md"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          {open ? (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <nav
          className={
            "md:flex items-center gap-4 " +
            (open
              ? "block absolute right-4 top-[64px] mt-2 w-48 bg-card border border-border shadow-lg md:static md:shadow-none md:border-none md:w-auto z-50 rounded-md"
              : "hidden md:block")
          }
          aria-hidden={!open}
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 p-4 md:p-0">
            {/* Links use foreground text and primary hover */}
            <li>
              <Link href={`/${lang}`} className="text-muted-foreground hover:text-primary font-medium transition-colors" onClick={() => setOpen(false)}>
                {dict.home}
              </Link>
            </li>
            <li>
              <Link href="#projects" className="text-muted-foreground hover:text-primary font-medium transition-colors" onClick={() => setOpen(false)}>
                {dict.projects}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/curriculo`} className="text-muted-foreground hover:text-primary font-medium transition-colors" onClick={() => setOpen(false)}>
                {dict.curriculum}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/biblioteca`} className="text-muted-foreground hover:text-primary font-medium transition-colors" onClick={() => setOpen(false)}>
                {dict.library}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/blog`} className="text-muted-foreground hover:text-primary font-medium transition-colors" onClick={() => setOpen(false)}>
                {dict.blog}
              </Link>
            </li>
            
            {/* --- FIX 3: Dropdown Menu using Semantic Colors --- */}
            <li className="relative hidden md:block">
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1 uppercase font-bold text-sm bg-secondary text-secondary-foreground hover:bg-muted px-3 py-1.5 rounded transition-colors"
              >
                <span>{lang}</span>
                <svg className={`w-4 h-4 transition-transform ${langMenuOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-card border border-border rounded-md shadow-lg py-1 z-50">
                  <Link 
                    href={redirectedPathName("en")} 
                    onClick={() => setLangMenuOpen(false)}
                    className="block px-4 py-2 hover:bg-muted text-card-foreground text-sm transition-colors"
                  >
                    🇬🇧 English
                  </Link>
                  <Link 
                    href={redirectedPathName("pt")} 
                    onClick={() => setLangMenuOpen(false)}
                    className="block px-4 py-2 hover:bg-muted text-card-foreground text-sm transition-colors"
                  >
                    🇧🇷 Português
                  </Link>
                </div>
              )}
            </li>

            {/* Mobile Lang Options */}
            <li className="mt-4 border-t border-border pt-4 md:hidden">
              <div className="flex justify-center gap-4">
                <Link 
                  href={redirectedPathName("en")} 
                  onClick={() => setOpen(false)}
                  className={`px-3 py-1 rounded text-sm ${lang === 'en' ? 'bg-primary text-primary-foreground font-bold' : 'bg-secondary text-secondary-foreground'}`}
                >
                  EN
                </Link>
                <Link 
                  href={redirectedPathName("pt")} 
                  onClick={() => setOpen(false)}
                  className={`px-3 py-1 rounded text-sm ${lang === 'pt' ? 'bg-primary text-primary-foreground font-bold' : 'bg-secondary text-secondary-foreground'}`}
                >
                  PT
                </Link>
              </div>
            </li>
          </ul>
        </nav>
        </div>
      </div>
      {langMenuOpen && (
        <button className="fixed inset-0 z-40 hidden md:block" 
          onClick={() => setLangMenuOpen(false)} tabIndex={0} aria-label="Close language menu">
        </button>
      )}
    </header>
  );
}