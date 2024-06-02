import About from "@/components/About/About";
import Archive from "@/components/Archive/Archive";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col bg-mycolor-400">
        <Navbar/>
        <div className="container mt-24 md:mt-36 px-12 py-4">
          <Hero/>
          <Archive/>
          <About/>
          <Projects/>
        </div>
      </main>
    </div>
  );
}
