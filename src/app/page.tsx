import { AmbientBackground } from "@/components/AmbientBackground";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Credentials } from "@/components/Credentials";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <ScrollProgress />
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Credentials />
        <Contact />
      </main>
    </>
  );
}
