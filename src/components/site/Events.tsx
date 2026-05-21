import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Section, SectionHeader, BlueText } from "./Section";

export function Events() {
  return (
    <Section id="eventos">
      <SectionHeader
        eyebrow="Agenda"
        title={
          <>
            Eventos e <BlueText>Inscrições</BlueText>
          </>
        }
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border border-sky-400/30 bg-gradient-to-br from-card via-card/80 to-background p-8 md:p-14"
      >
        <div className="absolute inset-0 bg-blue-500/10 blur-3xl" />

        <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-sky-300">
              <Calendar size={14} />
              Evento Especial
            </div>

            <h3 className="font-display text-4xl md:text-5xl">
              Evento{" "}
              <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-cyan-200 bg-clip-text italic text-transparent">
                "A Mesa"
              </span>
            </h3>

            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Um encontro especial de fé, palavra, comunhão e direção
              espiritual. Faça sua inscrição e participe.
            </p>
          </div>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSexnQFWhcfZPoqzRonaW-FqD-QI6O64k1x2lOcne9NatwVvCw/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-blue-500 px-7 py-4 text-sm font-medium text-white shadow-[0_0_35px_rgba(59,130,246,0.35)] transition-all hover:bg-blue-400"
          >
            Inscrever-se no Evento
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </motion.div>
    </Section>
  );
}

export default Events;