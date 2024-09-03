import Hero from "@/section/Hero";
import TemplateCard from "./components/TemplateCard";
import { TemplateSection } from "@/section/TemplateSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-8 bg-bgcolor">
      <Hero/>
      <TemplateSection/>
    </main>
  );
}
