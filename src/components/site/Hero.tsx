import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-light.jpg";
import silhouette from "@/assets/profeta.jpeg";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-25"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        <div className="absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[130px]" />
        <div className="absolute right-0 top-1/3 h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-sky-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-300" />
            Profeta Evanio Vale
          </div>

          <h1 className="font-display text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Sonhos são{" "}
            <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-cyan-200 bg-clip-text italic text-transparent">
              informações
            </span>{" "}
            privilegiadas
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Uma voz profética levando mensagens de fé, oração, libertação e
            direção espiritual para milhares de vidas.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#sobre"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-500 px-7 py-3.5 text-sm font-medium text-white shadow-[0_0_35px_rgba(59,130,246,0.35)] transition-all hover:bg-blue-400"
            >
              Conheça o Ministério
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#conteudos"
              className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-card/40 px-7 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-sky-300/60"
            >
              <Play size={16} className="text-sky-300" />
              Assistir Mensagens
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-10 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-sky-400/20 shadow-[0_30px_100px_rgba(59,130,246,0.25)]">
            <img
              src={silhouette}
              alt="Profeta Evanio Vale"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-display text-2xl text-foreground">
                "A oração abre portas."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;