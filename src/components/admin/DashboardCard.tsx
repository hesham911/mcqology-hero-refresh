import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  count: number;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  onClick?: () => void;
}

export function DashboardCard({ 
  title, 
  count, 
  icon: Icon, 
  color, 
  bgColor, 
  onClick 
}: DashboardCardProps) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <Card className={cn("overflow-hidden transition-all duration-300 hover:scale-105", bgColor)}>
      <CardContent className="p-6">
        <div className={cn(
          "flex items-center justify-between",
          isRTL && "flex-row-reverse"
        )}>
          <div className={cn("flex-1", isRTL && "text-right")}>
            <div className={cn("text-6xl font-bold mb-2", color)}>
              {count}
            </div>
            <h3 className={cn("text-lg font-semibold text-white mb-4")}>
              {t(title)}
            </h3>
            <Button
              variant="link"
              className={cn(
                "p-0 h-auto text-white hover:text-gray-200 gap-2",
                isRTL && "flex-row-reverse"
              )}
              onClick={onClick}
            >
              <span>{t('viewMore')}</span>
              {isRTL ? (
                <ArrowLeft className="w-4 h-4" />
              ) : (
                <ArrowRight className="w-4 h-4" />
              )}
            </Button>
          </div>
          <div className="opacity-30">
            <Icon className="w-16 h-16 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}