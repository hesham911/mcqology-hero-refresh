import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Dashboard
      dashboard: "Dashboard",
      // Navigation
      home: "Home",
      students: "Students",
      teachers: "Teachers",
      courses: "Courses",
      departments: "Departments",
      scholarships: "Scholarships",
      reports: "Reports",
      announcements: "Announcements",
      examinations: "Examinations",
      projects: "Projects",
      // Stats
      studentsCount: "Students",
      teachersCount: "Teachers",
      coursesCount: "Courses",
      reportsCount: "Reports",
      departmentsCount: "Departments",
      scholarshipsCount: "Scholarships",
      announcementsCount: "Announcements",
      examinationsCount: "Examinations",
      // Actions
      viewMore: "View More",
      // Header
      search: "Search",
      profile: "Profile",
      settings: "Settings",
      logout: "Logout",
      // Language
      language: "Language",
      arabic: "العربية",
      english: "English"
    }
  },
  ar: {
    translation: {
      // Dashboard
      dashboard: "لوحة التحكم",
      // Navigation
      home: "الرئيسية",
      students: "الطلاب",
      teachers: "المعلمون المساعدون",
      courses: "المقررات",
      departments: "الأقسام",
      scholarships: "منحة الاجادة",
      reports: "التقارير",
      announcements: "الإعلانات",
      examinations: "الامتحانات",
      projects: "المشاريع",
      // Stats
      studentsCount: "الطلاب",
      teachersCount: "المعلمون المساعدون",
      coursesCount: "المقررات",
      reportsCount: "التقارير",
      departmentsCount: "الأقسام",
      scholarshipsCount: "منحة الاجادة",
      announcementsCount: "الإعلانات",
      examinationsCount: "الامتحانات",
      // Actions
      viewMore: "عرض المزيد",
      // Header
      search: "البحث",
      profile: "الملف الشخصي",
      settings: "الإعدادات",
      logout: "تسجيل الخروج",
      // Language
      language: "اللغة",
      arabic: "العربية",
      english: "English"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;