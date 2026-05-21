import { motion } from "framer-motion";
import {
  MessageCircle,
  Mic,
  GraduationCap,
  Calendar,
  HandHeart,
} from "lucide-react";
import { Section, SectionHeader, BlueText } from "./Section";

const whatsappNumber = "5511999936035";

const whatsappMessage =
  "Olá! Vim pelo site do Profeta Evanio Vale e gostaria de mais informações.";

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

const items = [
  { icon: Mic, label: "Convites para ministrações" },
  { icon: GraduationCap, label: "Informações sobre cursos" },
  { icon: Calendar, label: "Eventos" },
  { icon: HandHeart, label: "Pedidos de oração" },
];

export function Contact() {
  return (
    <Section id="contato">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeader
            center={false}
            eyebrow="Contato"
            title={
              <>
                Entre em <BlueText>contato</BlueText>
              </>
            }
            subtitle="Fale com o ministério para convites, dúvidas, oração ou parcerias."
          />

          <ul className="space-y-4">
            {items.map((it) => (
              <li
                key={it.label}
                className="flex items-center gap-4 rounded-xl border border-border bg-card/40 p-4 transition-all hover:border-sky-400/30"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sky-400/10 text-sky-300">
                  <it.icon size={18} />
                </span>

                <span className="text-foreground">{it.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-sky-400/30 bg-gradient-to-br from-card to-background p-10 text-center md:p-14"
        >
          <div className="absolute inset-0 bg-blue-500/10 blur-3xl" />

          <div className="relative space-y-6">
            <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300">
              <MessageCircle size={28} />
            </div>

            <h3 className="font-display text-3xl">Fale diretamente conosco</h3>

            <p className="text-muted-foreground">
              Atendimento ministerial para convites, agenda, cursos e pedidos
              de oração.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-8 py-4 text-sm font-medium text-white shadow-[0_0_35px_rgba(59,130,246,0.35)] transition-all hover:bg-blue-400"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>

            <p className="pt-2 text-xs text-muted-foreground/70">
              Atendimento pelo WhatsApp: (11) 99993-6035
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

export default Contact;