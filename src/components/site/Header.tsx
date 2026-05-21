import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#ministerio", label: "Ministério" },
  { href: "#cursos", label: "Cursos" },
  { href: "#eventos", label: "Eventos" },
  { href: "#conteudos", label: "Conteúdos" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-sky-400/20 bg-background/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="font-display text-xl tracking-wide">
            <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-cyan-200 bg-clip-text font-semibold text-transparent">
              Evanio
            </span>
            <span className="text-foreground/90"> Vale</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-sky-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden items-center rounded-full bg-blue-500 px-5 py-2 text-sm font-medium text-white shadow-[0_0_30px_rgba(59,130,246,0.35)] transition-all hover:bg-blue-400 lg:inline-flex"
        >
          Fale conosco
        </a>

        <button
          className="text-foreground lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          type="button"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-sky-400/20 bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-3 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-muted-foreground hover:text-sky-300"
              >
                {l.label}
              </a>
            ))}

            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white"
            >
              Fale conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;