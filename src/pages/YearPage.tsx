import YearPageHeader from "@/components/YearPageHeader";
import YearHero from "@/components/YearHero";
import CoursesSection from "@/components/CoursesSection";
import UniversitiesSection from "@/components/UniversitiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const YearPage = () => {
  return (
    <div className="min-h-screen">
      <YearPageHeader />
      <YearHero />
      <CoursesSection />
      <UniversitiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default YearPage;