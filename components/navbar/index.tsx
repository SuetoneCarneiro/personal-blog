"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavDict {
  nav: any;
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
  const [langMenuOpen, setLangMenuOpen] = useState(false); // Language dropdown state
  const pathname = usePathname();

  // Function to switch language while keeping the current page
  const redirectedPathName = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale; // Replace the language segment (e.g., 'en' -> 'pt')
    return segments.join("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-800 text-white">
      <div className="p-4 flex items-center justify-between">
        <div className="text-lg font-semibold">
          <Link href={`/${lang}`}>Suetone.dev.br</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          {open ? (
            // close icon
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // hamburger icon
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Nav - hidden on small screens unless `open` */}
        <nav
          className={
            "md:flex items-center gap-4 " +
            (open
              ? "block absolute right-4 top-[64px] mt-2 w-48 bg-gray-800 shadow md:static md:shadow-none md:w-auto z-50"
              : "hidden md:block")
          }
          aria-hidden={!open}
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 p-4 md:p-0">
            <li>
              <Link href={`/${lang}`} onClick={() => setOpen(false)}>
                {dict.nav.home}
              </Link>
            </li>
            <li>
              <Link href="#projects" onClick={() => setOpen(false)}>
                {dict.nav.projects}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/curriculo`} onClick={() => setOpen(false)}>
                {dict.nav.curriculum}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/biblioteca`} onClick={() => setOpen(false)}>
                {dict.nav.library}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/blog`} onClick={() => setOpen(false)}>
                {dict.nav.blog}
              </Link>
            </li>
            {/* --- Desktop Language Switcher (Dropdown) --- */}
            <li className="relative hidden md:block">
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1 uppercase font-bold text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded transition-colors"
              >
                <span>{lang}</span>
                <svg className={`w-4 h-4 transition-transform ${langMenuOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-50 text-gray-800">
                  <Link 
                    href={redirectedPathName("en")} 
                    onClick={() => setLangMenuOpen(false)}
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    🇬🇧 English
                  </Link>
                  <Link 
                    href={redirectedPathName("pt")} 
                    onClick={() => setLangMenuOpen(false)}
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    🇧🇷 Português
                  </Link>
                </div>
              )}
            </li>
            {/* --- Mobile Language Options (Visible inside the menu) --- */}
            <li className="mt-4 border-t border-gray-700 pt-4 md:hidden">
              <div className="flex justify-center gap-4">
                <Link 
                  href={redirectedPathName("en")} 
                  onClick={() => setOpen(false)}
                  className={`px-3 py-1 rounded text-sm ${lang === 'en' ? 'bg-blue-600 font-bold' : 'bg-gray-700'}`}
                >
                  EN
                </Link>
                <Link 
                  href={redirectedPathName("pt")} 
                  onClick={() => setOpen(false)}
                  className={`px-3 py-1 rounded text-sm ${lang === 'pt' ? 'bg-blue-600 font-bold' : 'bg-gray-700'}`}
                >
                  PT
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      {langMenuOpen && (
        <button className="fixed inset-0 z-40 hidden md:block" 
          onClick={() => setLangMenuOpen(false)} tabIndex={0} aria-label="Close language menu">
        </button>
      )}
    </header>
  );
}