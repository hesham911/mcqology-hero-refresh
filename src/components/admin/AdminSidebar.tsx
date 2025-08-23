import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Home, 
  Users, 
  GraduationCap, 
  BookOpen, 
  Building2, 
  Award, 
  FileText, 
  Megaphone,
  ClipboardList,
  FolderOpen,
  Settings,
  LogOut
} from 'lucide-react';

interface SidebarItem {
  key: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: number;
}

const sidebarItems: SidebarItem[] = [
  { key: 'home', icon: Home },
  { key: 'students', icon: Users, badge: 1 },
  { key: 'teachers', icon: GraduationCap, badge: 2 },
  { key: 'courses', icon: BookOpen, badge: 1 },
  { key: 'departments', icon: Building2, badge: 1 },
  { key: 'scholarships', icon: Award, badge: 1 },
  { key: 'reports', icon: FileText, badge: 1 },
  { key: 'announcements', icon: Megaphone, badge: 0 },
  { key: 'examinations', icon: ClipboardList, badge: 0 },
  { key: 'projects', icon: FolderOpen },
];

interface AdminSidebarProps {
  className?: string;
}

export function AdminSidebar({ className }: AdminSidebarProps) {
  const { t, i18n } = useTranslation();
  const [activeItem, setActiveItem] = useState('home');
  const isRTL = i18n.language === 'ar';

  return (
    <div className={cn(
      "h-screen bg-slate-900 text-white flex flex-col",
      isRTL ? "border-l border-slate-700" : "border-r border-slate-700",
      className
    )}>
      {/* Header */}
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">جمعية صباح الناصر</h2>
            <p className="text-xs text-slate-400">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-2 py-4">
        <nav className="space-y-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.key;
            
            return (
              <Button
                key={item.key}
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-3 h-12 text-slate-300 hover:text-white hover:bg-slate-800",
                  isActive && "bg-primary text-white hover:bg-primary/90",
                  isRTL && "flex-row-reverse"
                )}
                onClick={() => setActiveItem(item.key)}
              >
                <Icon className="w-5 h-5" />
                <span className="flex-1 text-right">{t(item.key)}</span>
                {item.badge !== undefined && (
                  <span className={cn(
                    "px-2 py-1 text-xs rounded-full",
                    item.badge === 0 ? "bg-red-500" : "bg-blue-500"
                  )}>
                    {item.badge}
                  </span>
                )}
              </Button>
            );
          })}
        </nav>
      </ScrollArea>

      {/* Footer */}
      <div className="p-4 border-t border-slate-700 space-y-2">
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start gap-3 text-slate-300 hover:text-white hover:bg-slate-800",
            isRTL && "flex-row-reverse"
          )}
        >
          <Settings className="w-5 h-5" />
          <span className="flex-1 text-right">{t('settings')}</span>
        </Button>
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start gap-3 text-slate-300 hover:text-red-400 hover:bg-red-500/10",
            isRTL && "flex-row-reverse"
          )}
        >
          <LogOut className="w-5 h-5" />
          <span className="flex-1 text-right">{t('logout')}</span>
        </Button>
      </div>
    </div>
  );
}