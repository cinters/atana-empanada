import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FindUsBanner from "@/components/FindUsBanner";
import MenuHighlights from "@/components/MenuHighlights";
import StoryStrip from "@/components/StoryStrip";
import SocialProof from "@/components/SocialProof";
import CateringBanner from "@/components/CateringBanner";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FindUsBanner />
        <MenuHighlights />
        <StoryStrip />
        <SocialProof />
        <CateringBanner />
      </main>
      <Footer />
    </>
  );
}
