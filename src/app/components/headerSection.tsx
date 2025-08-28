import HeaderImage from "./headerImage";
import HeroSection from "./hero";
import Navbar from "./navbar";

export default function HeaderSection() {
  return (
    <section className="relative">
      {/* Top Blue Section */}
      <div className="w-full bg-gradient-to-b from-[#eef3fc] to-[#bad9fe] pb-[400px]">
        <Navbar />
        <HeroSection />
      </div>

      {/* Header Image overlapping bottom */}
      <div className="absolute inset-x-0 top-[400px] flex justify-center">
        <HeaderImage />
      </div>
    </section>
  );
}
