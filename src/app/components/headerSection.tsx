import HeaderImage from "./headerImage";
import HeroSection from "./hero";
import Navbar from "./navbar";

export default function HeaderSection() {
  return (
    <section className="relative">
      {/* Top Blue Section */}
      <div className=" bg-gradient-to-b from-blue-50 to-blue-200 pb-[400px] m-2 rounded">
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
