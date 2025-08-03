import Header from "@/components/Header";
import YearHero from "@/components/YearHero";
import CoursesSection from "@/components/CoursesSection";
import UniversitiesSection from "@/components/UniversitiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const YearPage = () => {
  return (
    <div className="min-h-screen">
      <Header isYearPage={true} />
      <YearHero />
      <CoursesSection />
      <UniversitiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default YearPage;