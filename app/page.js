import Hero from "@/section/Hero";
import TemplateCard from "./components/TemplateCard";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-bgcolor">
      <Hero/>
      <TemplateCard/>
    </main>
  );
}
