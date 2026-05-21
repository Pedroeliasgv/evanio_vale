import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Flame } from "lucide-react";
import { Section, SectionHeader, BlueText } from "./Section";

const courses = [
  {
    icon: GraduationCap,
    tag: "Curso",
    title: "Curso de Dons Espirituais",
    text: "Uma formação para quem deseja compreender melhor os dons espirituais e crescer no chamado espiritual com direção e profundidade.",
    cta: "Acessar Curso",
    href: "https://hotmart.com/pt-br/marketplace/produtos/hagsxd-curso-de-dons-espirituais-btgoa/S85674996V?preview=true",
  },
  {
    icon: Flame,
    tag: "Seminário",
    title: "Seminário de Libertação",
    text: "Um seminário voltado para oração, libertação, fortalecimento espiritual e crescimento na fé.",
    cta: "Acessar Seminário",
    href: "https://pay.hotmart.com/E93350393C",
  },
];

export function Courses() {
  return (
    <Section id="cursos" className="bg-card/20">
      <SectionHeader
        eyebrow="Formação"
        title={
          <>
            CURSOS E <BlueText>SEMINÁRIOS</BlueText>
          </>
        }
        subtitle="Conteúdos aprofundados para quem deseja crescer espiritualmente com direção."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {courses.map((c, i) => (
          <motion.a
            key={c.title}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-card/40 p-8 transition-all hover:border-sky-400/50 md:p-10"
          >
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl transition-all group-hover:bg-blue-500/20" />

            <div className="relative space-y-5">
              <div className="flex items-center justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
                  <c.icon size={22} />
                </div>

                <span className="text-xs uppercase tracking-[0.2em] text-sky-300">
                  {c.tag}
                </span>
              </div>

              <h3 className="font-display text-3xl">{c.title}</h3>

              <p className="leading-relaxed text-muted-foreground">{c.text}</p>

              <div className="inline-flex items-center gap-2 pt-2 font-medium text-sky-300">
                {c.cta}
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

export default Courses;