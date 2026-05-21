import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Video } from "lucide-react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { Section, SectionHeader, BlueText } from "./Section";

const channels = [
  {
    icon: FaYoutube,
    title: "YouTube",
    text: "Pregações completas, mensagens, ministrações e conteúdos para aprofundar sua caminhada com Deus.",
    label: "Ministrações completas",
    href: "https://youtube.com/playlist?list=PLFI2L1fzy7AndHFgVvuoj4sKj3xlD-vKJ",
  },
  {
    icon: FaYoutube,
    title: "Pode Fé",
    text: "Uma playlist especial com conversas, reflexões e conteúdos voltados à fé e direção espiritual.",
    label: "Playlist especial",
    href: "https://youtube.com/playlist?list=PLFI2L1fzy7AndHFgVvuoj4sKj3xlD-vKJ",
  },
  {
    icon: FaInstagram,
    title: "Instagram",
    text: "Cortes, mensagens rápidas, reflexões e conteúdos diários para fortalecer sua vida espiritual.",
    label: "Conteúdo diário",
    href: "https://www.instagram.com/evanio_vale",
  },
  {
    icon: FaTiktok,
    title: "TikTok",
    text: "Vídeos curtos com palavras, ensinamentos, alertas espirituais e mensagens de edificação.",
    label: "Vídeos curtos",
    href: "#",
  },
  {
    icon: Video,
    title: "Kwai",
    text: "Mensagens rápidas, cortes e conteúdos espirituais para acompanhar no dia a dia.",
    label: "Vídeos curtos",
    href: "#",
  },
];

export function Content() {
  return (
    <Section id="conteudos" className="bg-card/20">
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-background via-card/50 to-background p-6 md:p-10 lg:p-12">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative">
          <SectionHeader
            eyebrow="Conteúdos"
            title={
              <>
                Mensagens para <BlueText>fortalecer sua fé</BlueText>
              </>
            }
            subtitle="Acompanhe pregações, ministrações, ensinos, cortes e mensagens espirituais nas principais plataformas digitais."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {channels.map((channel, index) => {
              const Icon = channel.icon;

              return (
                <motion.a
                  key={channel.title}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-background/60 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/50 hover:bg-card/80"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-300 transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-400/20">
                      <Icon size={26} />
                    </div>

                    <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-[11px] font-medium text-sky-300">
                      {channel.label}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl leading-tight text-foreground">
                    {channel.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {channel.text}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-sky-300 opacity-80 transition-opacity group-hover:opacity-100">
                    <span>Acompanhar</span>
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-12 overflow-hidden rounded-3xl border border-sky-400/25 bg-gradient-to-r from-sky-400/15 via-card/60 to-background p-6 md:p-8"
          >
            <div className="grid gap-8 md:grid-cols-[1.4fr_0.8fr] md:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-xs font-medium text-sky-300">
                  <Sparkles size={14} />
                  Conteúdo em destaque
                </div>

                <h3 className="font-display text-3xl md:text-4xl">
                  Assista à playlist Pode Fé
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  Uma seleção de conteúdos para quem deseja crescer na fé,
                  receber direção espiritual e acompanhar mensagens do
                  ministério em formato acessível.
                </p>
              </div>

              <div className="flex justify-start md:justify-end">
                <a
                  href="https://youtube.com/playlist?list=PLFI2L1fzy7AndHFgVvuoj4sKj3xlD-vKJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-4 text-sm font-medium text-white shadow-[0_0_35px_rgba(59,130,246,0.35)] transition-all hover:bg-blue-400"
                >
                  <Play size={16} />
                  Assistir no YouTube
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

export default Content;