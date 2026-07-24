import { createFileRoute } from "@tanstack/react-router";
import mal1688Css from "@/styles/mal1688.css?url";
import { Header } from "@/components/mal1688/Header";
import { HeroSection } from "@/components/mal1688/HeroSection";
import { StorySection } from "@/components/mal1688/StorySection";
import { SciencePillars } from "@/components/mal1688/SciencePillars";
import { ProductMatrix } from "@/components/mal1688/ProductMatrix";
import { LabSimulator } from "@/components/mal1688/LabSimulator";
import { ImageBanner } from "@/components/mal1688/ImageBanner";
import { PricingSection } from "@/components/mal1688/PricingSection";
import { AcademySection } from "@/components/mal1688/AcademySection";
import { FactoryGallery } from "@/components/mal1688/FactoryGallery";
import { Footer } from "@/components/mal1688/Footer";

export const Route = createFileRoute("/mal1688")({
  head: () => ({
    meta: [
      { title: "MitoActiveLife 活「粒」生活 - 專業全家與兒童複合鈣矩陣" },
      {
        name: "description",
        content:
          "MAL 活粒鈣：四重晶體複合鈣源，融合維生素 D3 與 K2，香濃牛奶風味咀嚼錠，為全家與兒童骨骼與牙齒發育提供高吸收、不脹氣的營養支持。",
      },
    ],
    links: [{ rel: "stylesheet", href: mal1688Css }],
  }),
  component: Mal1688Page,
});

function Mal1688Page() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-slate-800 overflow-x-hidden">
      <Header />
      <HeroSection />
      <StorySection />
      <SciencePillars />
      <ProductMatrix />
      <LabSimulator />
      <ImageBanner src="/mal1688/MAL_Calc_banner_v1.webp" alt="MAL 成長鈣咀嚼錠電商官方 Banner" />
      <PricingSection />
      <AcademySection />
      <FactoryGallery />
      <Footer />
    </div>
  );
}
