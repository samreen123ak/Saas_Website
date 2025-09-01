import AvatarTextSection from "./components/avtartextSection";
import CustomerSection from "./components/customerSection";
import DemoCard from "./components/demoCard/page";
import FeaturesSection from "./components/featureSection";
import GrowSection from "./components/growSection";

import HeaderSection from "./components/headerSection";
import PricingSection from "./components/pricingSection";
import TrustedSection from "./components/trustedSection";

export default function Home() {
  return (
    <main className=" felx justify-center">
      <HeaderSection />
      <TrustedSection />
      <AvatarTextSection />
      <DemoCard />
      <FeaturesSection />
      <CustomerSection />
      <PricingSection />
      <GrowSection />
    </main>
  );
}
