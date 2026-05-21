import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Video, Radio, ExternalLink } from "lucide-react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { Section, SectionHeader, BlueText } from "./Section";

const channels = [
  {
    icon: FaYoutube,
    title: "YouTube",
    text: "Pregações completas, ministrações e mensagens para aprofundar sua caminhada com Deus.",
    label: "Ministrações",
    href: "https://www.youtube.com/@profetaevaniovale",
  },
  {
    icon: Radio,
    title: "Pode Fé",
    text: "Conteúdos especiais, conversas e reflexões sobre fé, direção espiritual e propósito.",
    label: "Playlist",
    href: "https://youtube.com/playlist?list=PLFI2L1fzy7AndHFgVvuoj4sKj3xlD-vKJ",
  },
  {
    icon: FaInstagram,
    title: "Instagram",
    text: "Cortes, mensagens rápidas, reflexões e conteúdos diários para fortalecer sua fé.",
    label: "Diário",
    href: "https://www.instagram.com/evanio_vale",
  },
  {
    icon: FaTiktok,
    title: "TikTok",
    text: "Vídeos curtos com palavras, ensinamentos, alertas espirituais e mensagens de edificação.",
    label: "Vídeos curtos",
    href: "https://www.tiktok.com/@profetaevaniovale?lang=pt-BR",
  },
  {
    icon: Video,
    title: "Kwai",
    text: "Mensagens rápidas, cortes e conteúdos espirituais para acompanhar no dia a dia.",
    label: "Cortes",
    href: " https://k.kwai.com/u/@EvanioVale/CxHwVewQ",
  },
];

export function Content() {
  return (
    <Section id="conteudos" className="bg-card/20">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-sky-400/20 bg-gradient-to-br from-background via-card/40 to-background p-6 md:p-10 lg:p-12">
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-blue-500/15 blur-[120px]" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />

        <div className="relative">
          <SectionHeader
            eyebrow="Conteúdos"
            title={
              <>
                Uma presença digital para{" "}
                <BlueText>fortalecer sua fé</BlueText>
              </>
            }
            subtitle="Acompanhe pregações, ministrações, ensinos, cortes e mensagens espirituais nas principais plataformas digitais."
          />

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 overflow-hidden rounded-[2rem] border border-sky-400/25 bg-gradient-to-br from-blue-500/15 via-card/70 to-background p-6 md:p-8"
          >
            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-sky-300">
                  <Sparkles size={14} />
                  Conteúdo em destaque
                </div>

                  <a
                    href="https://youtube.com/playlist?list=PLFI2L1fzy7AndHFgVvuoj4sKj3xlD-vKJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3"
                  >
                    <h3 className="font-display text-4xl leading-tight md:text-5xl">
                      Assista à playlist{" "}
                      <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent transition-all group-hover:brightness-125">
                        Pode Fé
                      </span>
                    </h3>

                    <ArrowRight
                      size={28}
                      className="hidden text-sky-300 transition-transform group-hover:translate-x-1 md:block"
                    />
                  </a>

                <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  Uma seleção de conteúdos para quem deseja crescer na fé,
                  receber direção espiritual e acompanhar mensagens do
                  ministério em um formato simples, acessível e profundo.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="https://youtube.com/playlist?list=PLFI2L1fzy7AndHFgVvuoj4sKj3xlD-vKJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-4 text-sm font-medium text-white shadow-[0_0_35px_rgba(59,130,246,0.35)] transition-all hover:bg-blue-400"
                  >
                    <Play size={16} />
                    Assistir agora
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>

                  <a
                    href="#contato"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-400/25 bg-background/40 px-7 py-4 text-sm font-medium text-foreground backdrop-blur transition-all hover:border-sky-300/60"
                  >
                    Receber orientação
                  </a>
                </div>
              </div>

              <div className="relative min-h-[260px] overflow-hidden rounded-3xl border border-sky-400/20 bg-background/50 p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.22),transparent_55%)]" />

                <div className="relative flex h-full min-h-[220px] flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300">
                      <FaYoutube size={30} />
                    </div>

                    <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs text-sky-300">
                      YouTube
                    </span>
                  </div>

                  <div>
                    <p className="font-display text-3xl">Pode Fé</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Conteúdos para fortalecer sua fé e ampliar sua visão
                      espiritual.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium text-sky-300">
                    <span>Acessar playlist</span>
                    <ExternalLink size={15} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
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
                  className="group relative overflow-hidden rounded-3xl border border-border bg-background/55 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/50 hover:bg-card/80"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-400/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative">
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

                    <p className="mt-4 min-h-[88px] text-sm leading-relaxed text-muted-foreground">
                      {channel.text}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-border/70 pt-5">
                      <span className="text-sm font-medium text-sky-300">
                        Acompanhar
                      </span>

                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-400/10 text-sky-300 transition-transform group-hover:translate-x-1">
                        <ArrowRight size={15} />
                      </span>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Content;