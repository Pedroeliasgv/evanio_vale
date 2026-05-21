import { motion } from "framer-motion";
import { BookOpen, Moon, HeartHandshake, Sparkles } from "lucide-react";
import { Section, SectionHeader, BlueText } from "./Section";

const areas = [
  {
    icon: BookOpen,
    title: "Pregações",
    text: "Mensagens de fé, edificação e fortalecimento espiritual para quem busca direção na Palavra.",
  },
  {
    icon: Moon,
    title: "Interpretação de Sonhos",
    text: "Ensinos sobre sonhos como informações privilegiadas, revelações e sinais espirituais.",
  },
  {
    icon: HeartHandshake,
    title: "Oração e Libertação",
    text: "Ministrações voltadas à oração, cura interior, libertação e fortalecimento da fé.",
  },
  {
    icon: Sparkles,
    title: "Dons Espirituais",
    text: "Conteúdos para compreender, amadurecer e desenvolver os dons espirituais com responsabilidade.",
  },
];

export function Ministry() {
  return (
    <Section id="ministerio">
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-card/80 via-background to-card/40 p-6 md:p-10 lg:p-12">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative">
          <SectionHeader
            eyebrow="Ministério"
            title={
              <>
                Uma jornada de <BlueText>fé, direção e propósito</BlueText>
              </>
            }
            subtitle="O ministério atua em áreas que fortalecem a vida espiritual, despertam entendimento e conduzem pessoas a uma caminhada mais profunda com Deus."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area, index) => (
              <motion.article
                key={area.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-background/60 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/50 hover:bg-card/80"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-300 transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-400/20">
                  <area.icon size={24} />
                </div>

                <h3 className="font-display text-2xl leading-tight text-foreground">
                  {area.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {area.text}
                </p>

                <div className="mt-6 h-px w-12 bg-sky-400/50 transition-all duration-300 group-hover:w-20" />
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-10 rounded-2xl border border-sky-400/20 bg-sky-400/10 p-6 text-center"
          >
            <p className="font-display text-xl text-foreground md:text-2xl">
              “A oração abre portas, mas a direção de Deus conduz o caminho.”
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

export default Ministry;