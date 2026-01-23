import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 relative">
      <Hero />
      <Projects />
      <Experience />
      <Skills />
    </div>
  );
}