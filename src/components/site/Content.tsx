import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Video,
  Radio,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { Section, BlueText } from "./Section";
import podeFeBg from "@/assets/pode-fe-logo.jpg";

const playlistLink =
  "https://youtube.com/playlist?list=PLFI2L1fzy7AndHFgVvuoj4sKj3xlD-vKJ";

const channels = [
  {
    icon: FaYoutube,
    title: "YouTube",
    text: "Pregações completas, ministrações e mensagens.",
    label: "Ministrações",
    href: "https://www.youtube.com/@profetaevaniovale",
  },
  {
    icon: Radio,
    title: "Pode Fé",
    text: "Conversas, reflexões e conteúdos especiais sobre fé.",
    label: "Playlist",
    href: playlistLink,
  },
  {
    icon: FaInstagram,
    title: "Instagram",
    text: "Cortes, mensagens rápidas e conteúdos diários.",
    label: "Diário",
    href: "https://www.instagram.com/evanio_vale",
  },
  {
    icon: FaTiktok,
    title: "TikTok",
    text: "Vídeos curtos com palavras e ensinamentos.",
    label: "Vídeos curtos",
    href: "https://www.tiktok.com/@profetaevaniovale?lang=pt-BR",
  },
  {
    icon: Video,
    title: "Kwai",
    text: "Mensagens rápidas e cortes espirituais.",
    label: "Cortes",
    href: "https://k.kwai.com/u/@EvanioVale/CxHwVewQ",
  },
];

export function Content() {
  return (
    <Section id="conteudos" className="overflow-hidden bg-background">
      <div className="relative">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-sky-400/10 blur-[130px]" />
        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-sky-300">
              <Sparkles size={14} />
              Conteúdos
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.85fr_1fr] lg:items-end">
              <h2 className="font-display text-5xl leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
                Mensagens que{" "}
                <BlueText>acompanham sua caminhada</BlueText>
              </h2>

              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg lg:ml-auto">
                Pregações, cortes, conversas e reflexões espirituais distribuídas
                nas plataformas oficiais do ministério.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <div className="relative overflow-hidden rounded-[2.4rem] border border-sky-400/20 bg-[#020617] p-4 shadow-[0_35px_120px_rgba(59,130,246,0.12)] sm:p-6 lg:p-8">
              <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-sky-400/10 blur-[120px]" />
              <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

              <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <a
                  href={playlistLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative mx-auto block w-full max-w-[440px] lg:max-w-[520px]"
                >
                  <div className="absolute -inset-4 rounded-[2.2rem] bg-sky-400/15 blur-3xl transition-all group-hover:bg-sky-400/20" />

                  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-background/70 p-2 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur">
                    <div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-black">
                      <img
                        src={podeFeBg}
                        alt="Logo Pode Fé"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-xl">
                        <div>
                          <p className="text-xs uppercase tracking-[0.18em] text-sky-300">
                            Podcast
                          </p>
                          <p className="font-display text-2xl text-white">
                            Pode Fé
                          </p>
                        </div>

                        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-background">
                          <Play size={21} className="ml-1 fill-background" />
                        </span>
                      </div>
                    </div>
                  </div>
                </a>

                <div className="space-y-6 text-center lg:text-left">
                  <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-sky-300 lg:mx-0">
                    <Radio size={14} />
                    Podcast em destaque
                  </div>

                  <div>
                    <h3 className="font-display text-5xl leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
                      Pode{" "}
                      <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-cyan-200 bg-clip-text italic text-transparent">
                        Fé
                      </span>
                    </h3>

                    <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground lg:mx-0">
                      Uma playlist especial para fortalecer sua fé, ampliar sua
                      visão espiritual e acompanhar mensagens profundas do
                      ministério.
                    </p>
                  </div>

                  <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                    <a
                      href={playlistLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-4 text-sm font-medium text-white shadow-[0_0_35px_rgba(59,130,246,0.30)] transition-all hover:bg-blue-400"
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
                      <MessageCircle size={16} className="text-sky-300" />
                      Receber orientação
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="-mx-6 px-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-sky-300">
                  Canais oficiais
                </p>
                <h3 className="mt-2 font-display text-3xl">
                  Acompanhe onde estiver
                </h3>
              </div>

              <span className="hidden text-sm text-muted-foreground sm:block">
                arraste para ver →
              </span>
            </div>

            <div className="flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:snap-none lg:grid-cols-5 lg:overflow-visible lg:pb-0">
              {channels.map((channel, index) => {
                const Icon = channel.icon;

                return (
                  <motion.a
                    key={channel.title}
                    href={channel.href.trim()}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-70px" }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    className="group relative min-h-[245px] w-[82vw] shrink-0 snap-start overflow-hidden rounded-[1.7rem] border border-white/10 bg-card/35 p-5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-sky-400/35 hover:bg-card/50 sm:w-[340px] lg:w-auto"
                  >
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sky-400/10 blur-3xl transition-all group-hover:bg-sky-400/15" />

                    <div className="relative flex h-full flex-col justify-between">
                      <div className="flex items-start justify-between gap-4">
                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/15 bg-sky-400/[0.06] text-sky-300">
                          <Icon size={26} />
                        </div>

                        <span className="rounded-full border border-sky-400/15 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-sky-300">
                          {channel.label}
                        </span>
                      </div>

                      <div className="mt-8">
                        <h4 className="font-display text-3xl text-foreground">
                          {channel.title}
                        </h4>

                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {channel.text}
                        </p>
                      </div>

                      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                        <span className="text-sm font-medium text-sky-300">
                          Acessar canal
                        </span>

                        <ArrowRight
                          size={16}
                          className="text-sky-300 transition-transform group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </motion.a>
                );
              })}

              <motion.a
                href="#contato"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.5, delay: 0.34 }}
                className="group relative min-h-[245px] w-[82vw] shrink-0 snap-start overflow-hidden rounded-[1.7rem] border border-sky-400/20 bg-sky-400/[0.06] p-5 transition-all hover:-translate-y-1 hover:border-sky-400/40 sm:w-[340px] lg:hidden"
              >
                <div className="flex h-full flex-col justify-between">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/15 bg-background/40 text-sky-300">
                    <MessageCircle size={26} />
                  </div>

                  <div>
                    <h4 className="font-display text-3xl">
                      Precisa de orientação?
                    </h4>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Fale com o ministério para dúvidas, convites e pedidos de
                      oração.
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-sm font-medium text-sky-300">
                      Falar agora
                    </span>
                    <ArrowRight size={16} className="text-sky-300" />
                  </div>
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Content;