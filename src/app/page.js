import Image from "next/image";
import Section from "./components/Section";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <NavBar />
      <div class='container mt-24 mx-auto px-12 py-4'>
        <Section />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
