import Header from "@/components/Header";
import HeroVideo from "@/components/HeroVideo";
import AboutUsSection from "@/components/AboutUsSection";
import TeamSection from "@/components/TeamSection";
import YearCardsSection from "@/components/YearCardsSection";
import QBanksSection from "@/components/QBanksSection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroVideo />
      <AboutUsSection />
      <TeamSection />
      <YearCardsSection />
      <QBanksSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
