import ContactBanner from "../components/contactBanner";
import CustomerReviews from "../components/customerSection";
import Footer from "../components/footerSection";
import Navbar from "../components/navbar";

export default function Testimonials() {
  return (
    <section>
      <Navbar />
      <CustomerReviews />
      <ContactBanner />
      <Footer />
    </section>
  );
}
