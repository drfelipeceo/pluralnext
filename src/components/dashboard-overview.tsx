import { MetricCard } from "@/components/ui/metric-card";
import { TrendingUp, Target, Briefcase, CheckCircle, AlertTriangle } from "lucide-react";
import { axisData } from "@/data/okr-data";

export function DashboardOverview() {
  const totalOkrs = axisData.reduce((acc, axis) => acc + axis.okrs.length, 0);
  const completedOkrs = axisData.reduce(
    (acc, axis) => acc + axis.okrs.filter((o) => o.indicadores.status === "success").length,
    0
  );
  const projectsConcluidos = axisData.reduce((acc, axis) => acc + axis.metrics.projetos.concluidos, 0);
  const projectsAndamento = axisData.reduce((acc, axis) => acc + axis.metrics.projetos.andamento, 0);
  const projectsAtrasados = axisData.reduce((acc, axis) => acc + axis.metrics.projetos.atrasados, 0);
  const projectsTotal = projectsConcluidos + projectsAndamento + projectsAtrasados;
  const performanceAvg = Math.round(
    axisData.reduce((acc, axis) => acc + axis.metrics.performance, 0) / axisData.length
  );
  const alertasAtivos = axisData.reduce(
    (acc, axis) => acc + axis.okrs.filter((o) => o.indicadores.status !== "success").length,
    0
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
      <MetricCard
        title="OKRs Totais"
        value={totalOkrs}
        subtitle="Objetivos estratégicos"
        icon={<Target className="w-4 h-4" />}
        variant="primary"
      />
      
      <MetricCard
        title="OKRs Concluídos"
        value={completedOkrs}
        subtitle={`${Math.round((completedOkrs / Math.max(totalOkrs, 1)) * 100)}% do total`}
        icon={<CheckCircle className="w-4 h-4" />}
        trend="up"
        trendValue="+12%"
        variant="success"
      />
      
      <MetricCard
        title="Projetos Ativos"
        value={projectsAndamento}
        subtitle="Em andamento"
        icon={<Briefcase className="w-4 h-4" />}
        variant="default"
      />
      
      <MetricCard
        title="Performance Geral"
        value={`${performanceAvg}%`}
        subtitle="Meta 2025"
        icon={<TrendingUp className="w-4 h-4" />}
        trend="up"
        trendValue="+5.2%"
        variant="success"
      />
      
      <MetricCard
        title="Alertas Ativos"
        value={alertasAtivos}
        subtitle="Requerem atenção"
        icon={<AlertTriangle className="w-4 h-4" />}
        variant="warning"
      />
    </div>
  );
}