import { motion } from "framer-motion";
import { HandHeart } from "lucide-react";
import heroBg from "@/assets/hero-light.jpg";

export function Impact() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[130px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-4xl space-y-8 px-6 text-center"
      >
        <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

        <h2 className="font-display text-5xl leading-tight md:text-7xl">
          <span className="italic">"A oração</span>
          <br />
          <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent">
            abre portas."
          </span>
        </h2>

        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Existe poder na fé, direção na Palavra e respostas na presença de
          Deus.
        </p>

        <div className="pt-4">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-7 py-4 text-sm font-medium text-white shadow-[0_0_35px_rgba(59,130,246,0.35)] transition-all hover:bg-blue-400"
          >
            <HandHeart size={18} />
            Enviar pedido de oração
          </a>
        </div>

        <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
      </motion.div>
    </section>
  );
}

export default Impact;