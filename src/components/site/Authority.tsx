import { motion } from "framer-motion";
import { Section, SectionHeader, BlueText } from "./Section";

const stats = [
  { value: "50k+", label: "YouTube" },
  { value: "80k+", label: "TikTok" },
  { value: "30k+", label: "Kwai" },
  { value: "160k+", label: "Vidas alcançadas" },
];

export function Authority() {
  return (
    <Section className="border-y border-sky-400/20 bg-card/30">
      <SectionHeader
        eyebrow="Alcance"
        title={
          <>
            Um ministério que <BlueText>alcança vidas</BlueText> todos os dias
          </>
        }
        subtitle="Mais do que números, cada alcance representa uma vida recebendo uma palavra, uma direção e uma mensagem de fé."
      />

      <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative rounded-2xl border border-border bg-card/50 p-8 text-center transition-all hover:border-sky-400/50"
          >
            <div className="absolute inset-0 rounded-2xl bg-blue-500/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

            <div className="relative">
              <div className="bg-gradient-to-r from-sky-300 via-blue-400 to-cyan-200 bg-clip-text font-display text-5xl text-transparent md:text-6xl">
                {s.value}
              </div>

              <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default Authority;