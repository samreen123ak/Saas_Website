import AvatarTextSection from "./components/avtartextSection";
import DemoCard from "./components/demoCard/page";

import HeaderSection from "./components/headerSection";
import TrustedSection from "./components/trustedSection";

export default function Home() {
  return (
    <main className=" felx justify-center">
      <HeaderSection />
      <TrustedSection />
      <AvatarTextSection />
      <DemoCard />
    </main>
  );
}
