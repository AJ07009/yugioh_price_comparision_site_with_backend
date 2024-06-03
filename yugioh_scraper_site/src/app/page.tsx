import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <HeroSection />
      <div className="flex flex-1 flex-col items-center justify-center p-4">
      </div>
    </main>
  );
}
