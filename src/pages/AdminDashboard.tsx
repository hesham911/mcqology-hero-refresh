import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { DashboardCard } from '@/components/admin/DashboardCard';
import { cn } from '@/lib/utils';
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  FileText, 
  Building2, 
  Award, 
  Megaphone, 
  ClipboardList 
} from 'lucide-react';

const dashboardData = [
  {
    title: 'studentsCount',
    count: 2,
    icon: Users,
    color: 'text-white',
    bgColor: 'bg-green-500'
  },
  {
    title: 'teachersCount',
    count: 2,
    icon: GraduationCap,
    color: 'text-white',
    bgColor: 'bg-purple-500'
  },
  {
    title: 'coursesCount',
    count: 1,
    icon: BookOpen,
    color: 'text-white',
    bgColor: 'bg-cyan-500'
  },
  {
    title: 'reportsCount',
    count: 1,
    icon: FileText,
    color: 'text-white',
    bgColor: 'bg-gray-500'
  },
  {
    title: 'departmentsCount',
    count: 1,
    icon: Building2,
    color: 'text-white',
    bgColor: 'bg-teal-500'
  },
  {
    title: 'scholarshipsCount',
    count: 1,
    icon: Award,
    color: 'text-white',
    bgColor: 'bg-yellow-500'
  },
  {
    title: 'examinationsCount',
    count: 1,
    icon: ClipboardList,
    color: 'text-white',
    bgColor: 'bg-pink-500'
  },
  {
    title: 'announcementsCount',
    count: 1,
    icon: Megaphone,
    color: 'text-white',
    bgColor: 'bg-purple-600'
  },
  {
    title: 'announcementsCount',
    count: 0,
    icon: Megaphone,
    color: 'text-white',
    bgColor: 'bg-cyan-600'
  },
  {
    title: 'scholarshipsCount',
    count: 0,
    icon: Award,
    color: 'text-white',
    bgColor: 'bg-red-500'
  }
];

export default function AdminDashboard() {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    // Set document direction based on language
    document.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language, isRTL]);

  return (
    <div className={cn("min-h-screen bg-gray-50 flex", isRTL && "flex-row-reverse")}>
      {/* Sidebar */}
      <div className="w-80 flex-shrink-0">
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <AdminHeader />

        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {dashboardData.map((item, index) => (
              <DashboardCard
                key={index}
                title={item.title}
                count={item.count}
                icon={item.icon}
                color={item.color}
                bgColor={item.bgColor}
                onClick={() => console.log(`Navigate to ${item.title}`)}
              />
            ))}
          </div>

          {/* Footer */}
          <footer className="mt-8 text-center text-sm text-gray-500">
            Copyright © 2025 <span className="text-blue-600">Adallia Coop</span>. All rights reserved Version 1.0.0
          </footer>
        </main>
      </div>
    </div>
  );
}