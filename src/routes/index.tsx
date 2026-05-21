import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Authority } from "@/components/site/Authority";
import { Ministry } from "@/components/site/Ministry";
import { Courses } from "@/components/site/Courses";
import { Events } from "@/components/site/Events";
import { Content } from "@/components/site/Content";
import { Impact } from "@/components/site/Impact";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Profeta Evanio Vale — Sonhos são informações privilegiadas" },
      {
        name: "description",
        content:
          "Site oficial do Profeta Evanio Vale. Pregações, interpretações de sonhos, cursos, seminários e conteúdos para fortalecer sua vida espiritual.",
      },
      { property: "og:title", content: "Profeta Evanio Vale" },
      {
        property: "og:description",
        content:
          "Uma voz profética levando mensagens de fé, oração, libertação e direção espiritual.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Authority />
        <Ministry />
        <Courses />
        <Events />
        <Content />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
