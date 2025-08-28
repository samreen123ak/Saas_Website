import HeroSection from "./hero";
import Navbar from "./navbar";

export default function HeaderSection() {
  return (
    <div className="w-full bg-gradient-to-b from-[#eef3fc] to-[#bad9fe]">
      <Navbar />
      <HeroSection />
    </div>
  );
}
