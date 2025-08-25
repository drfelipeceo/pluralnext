import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ProgressRing } from "@/components/ui/progress-ring";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { ChevronRight, TrendingUp, Target, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

interface StrategicAxisCardProps {
  title: string;
  description: string;
  progress: number;
  projectsCount: number;
  completedOkrs: number;
  totalOkrs: number;
  color: "blue" | "orange" | "teal" | "green" | "dark-teal";
  onClick?: () => void;
}

const colorVariants = {
  blue: "border-pluralmed-blue/20 bg-pluralmed-blue/5 hover:bg-pluralmed-blue/10",
  orange: "border-pluralmed-orange/20 bg-pluralmed-orange/5 hover:bg-pluralmed-orange/10",
  teal: "border-pluralmed-teal/20 bg-pluralmed-teal/5 hover:bg-pluralmed-teal/10",
  green: "border-pluralmed-green/20 bg-pluralmed-green/5 hover:bg-pluralmed-green/10",
  "dark-teal": "border-pluralmed-dark-teal/20 bg-pluralmed-dark-teal/5 hover:bg-pluralmed-dark-teal/10"
};

const colorClasses = {
  blue: "text-pluralmed-blue",
  orange: "text-pluralmed-orange", 
  teal: "text-pluralmed-teal",
  green: "text-pluralmed-green",
  "dark-teal": "text-pluralmed-dark-teal"
};

export function StrategicAxisCard({
  title,
  description,
  progress,
  projectsCount,
  completedOkrs,
  totalOkrs,
  color,
  onClick
}: StrategicAxisCardProps) {
  const getStatus = (progress: number) => {
    if (progress >= 80) return "success";
    if (progress >= 60) return "warning";
    return "danger";
  };

  return (
    <Card 
      className={cn(
        "cursor-pointer transition-executive hover:shadow-elevated group",
        colorVariants[color]
      )}
      onClick={onClick}
    >
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Progress Ring */}
        <div className="flex items-center justify-between">
          <ProgressRing progress={progress} size={80} strokeWidth={6}>
            <div className="text-center">
              <div className={cn("text-lg font-bold", colorClasses[color])}>
                {progress}%
              </div>
            </div>
          </ProgressRing>
          
          <div className="flex-1 ml-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Status Geral</span>
              <StatusIndicator status={getStatus(progress)} size="md" />
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">OKRs</span>
              <Badge variant="secondary" className="text-xs">
                {completedOkrs}/{totalOkrs}
              </Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Projetos</span>
              <Badge variant="outline" className="text-xs">
                {projectsCount}
              </Badge>
            </div>
          </div>
        </div>
        
        {/* Performance Indicators */}
        <div className="grid grid-cols-3 gap-3 pt-2 border-t border-border/50">
          <div className="text-center">
            <Target className="w-4 h-4 text-muted-foreground mx-auto mb-1" />
            <div className="text-xs text-muted-foreground">Meta</div>
            <div className="text-sm font-semibold">{totalOkrs}</div>
          </div>
          
          <div className="text-center">
            <TrendingUp className="w-4 h-4 text-success mx-auto mb-1" />
            <div className="text-xs text-muted-foreground">Concluído</div>
            <div className="text-sm font-semibold text-success">{completedOkrs}</div>
          </div>
          
          <div className="text-center">
            <Briefcase className="w-4 h-4 text-muted-foreground mx-auto mb-1" />
            <div className="text-xs text-muted-foreground">Projetos</div>
            <div className="text-sm font-semibold">{projectsCount}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}