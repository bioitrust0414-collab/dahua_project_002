import { createFileRoute } from "@tanstack/react-router";
import mal1688Css from "@/styles/mal1688.css?url";
import { HeroSection } from "@/components/mal1688/HeroSection";
import { IngredientsSection } from "@/components/mal1688/IngredientsSection";
import { Footer } from "@/components/mal1688/Footer";

export const Route = createFileRoute("/mal1688")({
  head: () => ({
    meta: [{ title: "MitoActiveLife 活「粒」生活 - 兒童成長生醫級四重複合鈣" }],
    links: [{ rel: "stylesheet", href: mal1688Css }],
  }),
  component: Mal1688Page,
});

function Mal1688Page() {
  return (
    <div className="bg-slate-50 text-slate-800 overflow-x-hidden">
      <HeroSection />
      <IngredientsSection />
      <Footer />
    </div>
  );
}
