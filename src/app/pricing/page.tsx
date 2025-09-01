import ContactBanner from "../components/contactBanner";
import Footer from "../components/footerSection";
import Navbar from "../components/navbar";
import PricingSection from "../components/pricingSection";

export default function () {
  return (
    <section>
      <Navbar />
      <PricingSection />
      <ContactBanner />
      <Footer />
    </section>
  );
}
