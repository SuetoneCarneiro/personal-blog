"use client";
import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-gray-800 text-white">
      <div className="p-4 flex items-center justify-between">
        <div className="text-lg font-semibold">
          <Link href="/">Suetone Carneiro</Link>
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
              ? "block absolute right-4 top-[64px] mt-2 w-48 bg-gray-800 shadow md:static md:shadow-none md:w-auto"
              : "hidden md:block")
          }
          aria-hidden={!open}
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 p-4 md:p-0">
            <li>
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => setOpen(false)}>
                Projetos
              </Link>
            </li>
            <li>
              <Link href="/curriculo" onClick={() => setOpen(false)}>
                Currículo
              </Link>
            </li>
            <li>
              <Link href="/biblioteca" onClick={() => setOpen(false)}>
                Biblioteca
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={() => setOpen(false)}>
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}