import { MetricCard } from "@/components/ui/metric-card";
import { TrendingUp, Target, Briefcase, CheckCircle, AlertTriangle } from "lucide-react";

export function DashboardOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
      <MetricCard
        title="OKRs Totais"
        value={42}
        subtitle="Objetivos estratégicos"
        icon={<Target className="w-4 h-4" />}
        variant="primary"
      />
      
      <MetricCard
        title="OKRs Concluídos"
        value={28}
        subtitle="66.7% do total"
        icon={<CheckCircle className="w-4 h-4" />}
        trend="up"
        trendValue="+12%"
        variant="success"
      />
      
      <MetricCard
        title="Projetos Ativos"
        value={89}
        subtitle="Em andamento"
        icon={<Briefcase className="w-4 h-4" />}
        variant="default"
      />
      
      <MetricCard
        title="Performance Geral"
        value="73%"
        subtitle="Meta 2025"
        icon={<TrendingUp className="w-4 h-4" />}
        trend="up"
        trendValue="+5.2%"
        variant="success"
      />
      
      <MetricCard
        title="Alertas Ativos"
        value={7}
        subtitle="Requerem atenção"
        icon={<AlertTriangle className="w-4 h-4" />}
        variant="warning"
      />
    </div>
  );
}