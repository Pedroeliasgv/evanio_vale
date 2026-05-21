const quickLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#cursos", label: "Cursos" },
  { href: "#eventos", label: "Eventos" },
  {
    href: "https://youtube.com/playlist?list=PLFI2L1fzy7AndHFgVvuoj4sKj3xlD-vKJ",
    label: "YouTube",
  },
  { href: "https://www.instagram.com/evanio_vale", label: "Instagram" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-sky-400/20 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-2 font-display text-2xl">
              <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent">
                Profeta
              </span>{" "}
              Evanio Vale
            </h3>

            <p className="max-w-md text-sm text-muted-foreground">
              Pregador | Profeta | Interpretação de Sonhos | Conteúdos Cristãos
            </p>
          </div>

          <div className="md:text-right">
            <div className="mb-4 text-xs uppercase tracking-[0.2em] text-sky-300">
              Links rápidos
            </div>

            <ul className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-sky-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />

        <p className="text-center text-xs text-muted-foreground">
          © 2026 Profeta Evanio Vale. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;