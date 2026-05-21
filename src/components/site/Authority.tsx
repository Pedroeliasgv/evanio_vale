import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Music2, PlayCircle, UsersRound } from "lucide-react";
import { Section, SectionHeader, BlueText } from "./Section";

import evanioAvatar from "@/assets/evanio-avatar.jpg";
import kwaiLogo from "@/assets/kwai-logo.png";

const stats = [
  {
    value: 20,
    suffix: "M+",
    label: "YouTube",
    description: "inscritos acompanhando mensagens e ministrações",
    icon: PlayCircle,
    type: "icon",
  },
  {
    value: 50,
    suffix: "M+",
    label: "TikTok",
    description: "pessoas alcançadas com vídeos curtos de fé",
    icon: Music2,
    type: "icon",
  },
  {
    value: 30,
    suffix: "M+",
    label: "Kwai",
    description: "seguidores consumindo conteúdos espirituais",
    image: kwaiLogo,
    type: "image",
  },
  {
    value: 100,
    suffix: "M+",
    label: "Vidas alcançadas",
    description: "vidas impactadas através das redes sociais",
    icon: UsersRound,
    type: "icon",
  },
];

function AnimatedNumber({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) => {
    return `${Math.round(latest)}${suffix}`;
  });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration: 1.8,
      ease: "easeOut",
    });

    return controls.stop;
  }, [count, isInView, value]);

  return (
    <motion.div
      ref={ref}
      className="bg-gradient-to-r from-sky-300 via-blue-400 to-cyan-200 bg-clip-text font-display text-5xl text-transparent md:text-6xl lg:text-7xl"
    >
      {rounded}
    </motion.div>
  );
}

function StatVisual({ stat }: { stat: any }) {
  if (stat.type === "image") {
    return (
      <img
        src={stat.image}
        alt={`Logo ${stat.label}`}
        className="h-7 w-7 object-contain brightness-0 saturate-100 invert-[67%] sepia-[73%] saturate-[1135%] hue-rotate-[169deg] brightness-[101%] contrast-[101%]"
      />
    );
  }

  const Icon = stat.icon;

  return <Icon size={26} />;
}

export function Authority() {
  return (
    <Section className="relative overflow-hidden border-y border-sky-400/20 bg-card/30">
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/15 blur-[130px]" />
      <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]" />
      <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative">
        <SectionHeader
          eyebrow="Alcance"
          title={
            <>
              UM MINISTÉRIO QUE <BlueText>ALCANÇA VIDAS</BlueText> TODOS OS DIAS
            </>
          }
          subtitle="Mais do que números, cada alcance representa uma vida recebendo uma palavra, uma direção e uma mensagem de fé."
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-8 overflow-hidden rounded-[2rem] border border-sky-400/25 bg-gradient-to-br from-blue-500/15 via-card/70 to-background p-6 md:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="relative flex min-h-[260px] items-center justify-center rounded-3xl border border-sky-400/20 bg-background/50 p-8">
              <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_60%)]" />

              <div className="relative text-center">
                <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border border-sky-400/30 bg-sky-400/10 p-1 shadow-[0_0_45px_rgba(56,189,248,0.3)]">
                  <img
                    src={evanioAvatar}
                    alt="Profeta Evanio Vale pregando"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>

                <AnimatedNumber value={100} suffix="M+" />

                <p className="mt-3 text-sm uppercase tracking-[0.25em] text-sky-300">
                  vidas alcançadas
                </p>
              </div>
            </div>

            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-sky-300">
                <UsersRound size={14} />
                Presença digital
              </div>

              <h3 className="font-display text-4xl leading-tight md:text-5xl">
                Uma mensagem que ultrapassa plataformas
              </h3>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                O alcance do ministério representa pessoas sendo impactadas por
                mensagens de fé, oração, direção espiritual, interpretação de
                sonhos e ensinamentos para uma caminhada mais profunda com Deus.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-background/55 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/50 hover:bg-card/80"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-300 transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-400/20">
                    <StatVisual stat={stat} />
                  </div>

                  <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-[11px] font-medium text-sky-300">
                    {stat.label}
                  </span>
                </div>

                <AnimatedNumber value={stat.value} suffix={stat.suffix} />

                <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-foreground">
                  {stat.label}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {stat.description}
                </p>

                <div className="mt-6 h-px w-12 bg-sky-400/50 transition-all duration-300 group-hover:w-24" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Authority;