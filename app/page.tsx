import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col bg-mycolor-400">
        <Navbar/>
      </main>
    </div>
  );
}
