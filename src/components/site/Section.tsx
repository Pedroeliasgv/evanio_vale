import { motion } from "framer-motion";
import { ReactNode } from "react";

export function BlueText({ children }: { children: ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent">
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`${center ? "text-center mx-auto" : ""} max-w-3xl mb-16 space-y-4`}
    >
      {eyebrow && (
        <div className="text-xs uppercase tracking-[0.3em] text-sky-300">
          {eyebrow}
        </div>
      )}

      <h2 className="font-display text-4xl md:text-5xl leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}