import { motion } from "framer-motion";
import { Section, SectionHeader, BlueText } from "./Section";
import bible from "@/assets/pastor.jpeg";

export function About() {
  return (
    <Section id="sobre">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-full bg-blue-500/20 opacity-70 blur-3xl" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-sky-400/20 shadow-[0_30px_100px_rgba(59,130,246,0.18)]">
            <img
              src={bible}
              alt="Profeta Evanio Vale"
              width={1280}
              height={896}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -right-6 hidden max-w-xs rounded-2xl border border-sky-400/30 bg-card/90 p-6 shadow-[0_0_35px_rgba(59,130,246,0.25)] backdrop-blur md:block">
            <p className="bg-gradient-to-r from-sky-300 via-blue-400 to-cyan-200 bg-clip-text font-display text-2xl text-transparent">
              + de 160k
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              vidas alcançadas pelas redes
            </p>
          </div>
        </motion.div>

        <div>
          <SectionHeader
            center={false}
            eyebrow="Sobre"
            title={
              <>
                Sobre o <BlueText>Profeta Evanio Vale</BlueText>
              </>
            }
          />

          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              O Profeta Evanio Vale é pregador da Palavra e atua levando
              mensagens de fé, oração, libertação e direção espiritual. Seu
              ministério tem alcançado milhares de pessoas através das redes
              sociais, ministrações, cursos, seminários e conteúdos voltados ao
              crescimento espiritual.
            </p>

            <p>
              Com uma comunicação direta, profunda e acessível, Evanio Vale
              ensina sobre o mundo espiritual, interpretação de sonhos, oração,
              dons espirituais e princípios de fé para uma vida com mais
              direção em Deus.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;