import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contacts", href: "#contacts" },
];

export function UserNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/55 px-4 py-4 backdrop-blur-md sm:px-6">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <a
          href="#main"
          onClick={closeMenu}
          className="text-base font-extrabold text-white sm:text-lg"
        >
          My Portfolio
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-bold tracking-wide text-white transition-colors duration-300 hover:text-red-500"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="grid size-10 place-items-center text-3xl text-white transition hover:text-red-500 md:hidden"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
        >
          <span
            className={`transition duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}
          >
            {isOpen ? <MdClose /> : <MdMenu />}
          </span>
        </button>
      </div>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 md:hidden ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 border-t border-white/10 pt-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="px-2 py-3 font-bold text-white transition hover:bg-white/10 hover:text-red-500"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
