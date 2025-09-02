import BlogSection from "../components/blogSection";
import ContactBanner from "../components/contactBanner";
import Footer from "../components/footerSection";
import Navbar from "../components/navbar";

export default function Blog() {
  return (
    <section>
      <Navbar />
      <BlogSection />
      <ContactBanner />
      <Footer />
    </section>
  );
}
