import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FindUsBanner from "@/components/FindUsBanner";
import EmailSignup from "@/components/EmailSignup";
import MenuHighlights from "@/components/MenuHighlights";
import CateringBanner from "@/components/CateringBanner";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FindUsBanner />
        <EmailSignup />
        <MenuHighlights />
        <CateringBanner />
      </main>
      <Footer />
    </>
  );
}
