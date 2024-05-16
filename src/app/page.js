import Image from "next/image";
import Section from "./components/Section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <div class='container mx-auto px-12 py-4'>
        <Section />
      </div>
    </main>
  );
}
