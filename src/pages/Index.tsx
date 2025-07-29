import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoTutorials from "@/components/VideoTutorials";
import QBanksSection from "@/components/QBanksSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-cairo">
      <Header />
      <VideoTutorials />
      <Hero />
      <QBanksSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
