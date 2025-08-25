import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/ui/metric-card";
import { ProgressRing } from "@/components/ui/progress-ring";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Target, Briefcase, Calendar, Filter, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AxisData } from "@/data/okr-data";
import { negocios, celulas } from "@/data/organization";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

interface AxisDashboardProps {
  data: AxisData;
}

const colorVariants = {
  blue: "text-pluralmed-blue",
  orange: "text-pluralmed-orange",
  teal: "text-pluralmed-teal",
  green: "text-pluralmed-green",
  "dark-teal": "text-pluralmed-dark-teal"
};

export function AxisDashboard({ data }: AxisDashboardProps) {
  // Filtros organizacionais
  const [negocioFilter, setNegocioFilter] = useState<string>("todos");
  const [celulaFilter, setCelulaFilter] = useState<string>("todas");
  const [periodFilter, setPeriodFilter] = useState<string>("2025-01");

  const months2025 = [
    { value: "2025-01", label: "Janeiro/2025" },
    { value: "2025-02", label: "Fevereiro/2025" },
    { value: "2025-03", label: "Março/2025" },
    { value: "2025-04", label: "Abril/2025" },
    { value: "2025-05", label: "Maio/2025" },
    { value: "2025-06", label: "Junho/2025" },
    { value: "2025-07", label: "Julho/2025" },
    { value: "2025-08", label: "Agosto/2025" },
    { value: "2025-09", label: "Setembro/2025" },
    { value: "2025-10", label: "Outubro/2025" },
    { value: "2025-11", label: "Novembro/2025" },
    { value: "2025-12", label: "Dezembro/2025" },
  ];

  const filteredOkrs = useMemo(() => {
    return data.okrs.filter((okr) => {
      const matchesNegocio =
        negocioFilter === "todos" || okr.negocioId?.toString() === negocioFilter;
      const matchesCelula =
        celulaFilter === "todas" || okr.celulaIds?.map(String).includes(celulaFilter);
      return matchesNegocio && matchesCelula;
    });
  }, [data.okrs, negocioFilter, celulaFilter]);

  // Dados para gráfico de barras - progresso dos OKRs (já filtrados)
  const okrProgress = filteredOkrs.map((okr, index) => ({
    name: `OKR ${index + 1}`,
    progresso: okr.indicadores.percentual,
    status: okr.indicadores.status
  }));

  // Dados para gráfico de pizza - status dos projetos
  const projectStatus = [
    { name: "Concluídos", value: data.metrics.projetos.concluidos, color: "#22c55e" },
    { name: "Em Andamento", value: data.metrics.projetos.andamento, color: "#f59e0b" },
    { name: "Atrasados", value: data.metrics.projetos.atrasados, color: "#ef4444" }
  ];

  // Helpers de período
  const monthNamesPt = [
    "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"
  ];
  const formatRangeFromPeriod = (period: string, span: number) => {
    const [yearStr, monthStr] = period.split("-");
    const year = Number(yearStr);
    const monthIndex = Number(monthStr) - 1; // 0-based
    const endIndex = (monthIndex + Math.max(0, span - 1)) % 12;
    return `${monthNamesPt[monthIndex]} - ${monthNamesPt[endIndex]}`;
  };

  // Timeline dinâmica a partir dos projetos vinculados aos OKRs filtrados
  const projectTimeline = useMemo(() => {
    type StatusTimeline = "concluido" | "andamento" | "atrasado";
    const statusRank: Record<StatusTimeline, number> = { concluido: 0, andamento: 1, atrasado: 2 };
    const mapOkrStatus = (s: string): StatusTimeline =>
      s === "success" ? "concluido" : s === "warning" ? "andamento" : "atrasado";

    const projectToStatus = new Map<string, StatusTimeline>();
    filteredOkrs.forEach((okr) => {
      const st = mapOkrStatus(okr.indicadores.status);
      okr.projetosVinculados.forEach((p) => {
        const existing = projectToStatus.get(p);
        if (!existing || statusRank[st] > statusRank[existing]) {
          projectToStatus.set(p, st);
        }
      });
    });

    const rangeLabel = formatRangeFromPeriod(periodFilter, 3);
    return Array.from(projectToStatus.entries()).slice(0, 8).map(([projeto, s]) => ({
      projeto,
      inicio: rangeLabel.split(" - ")[0],
      fim: rangeLabel.split(" - ")[1],
      status: s,
    }));
  }, [filteredOkrs, periodFilter]);

  return (
    <div className="space-y-6">
      {/* Filtros e Ações */}
      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-primary" />
              Filtros Inteligentes
            </CardTitle>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="w-4 h-4" />
              Exportar PDF/Excel
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select value={celulaFilter} onValueChange={setCelulaFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Célula" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todas">Todas as Células</SelectItem>
                {celulas.map((c) => (
                  <SelectItem key={c.id} value={String(c.id)}>
                    {c.sigla} - {c.nome}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={negocioFilter} onValueChange={setNegocioFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Negócio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os Negócios</SelectItem>
                {negocios.map((n) => (
                  <SelectItem key={n.id} value={String(n.id)}>
                    {n.nome}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            
            
            <Select value={periodFilter} onValueChange={setPeriodFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Período" />
              </SelectTrigger>
              <SelectContent>
                {months2025.map((m) => (
                  <SelectItem key={m.value} value={m.value}>{m.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Métricas Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Performance Geral"
          value={`${data.metrics.performance}%`}
          subtitle="Meta 2025"
          icon={<TrendingUp className="w-4 h-4" />}
          trend="up"
          trendValue="+5.2%"
          variant="primary"
        />
        
        <MetricCard
          title="OKRs Ativos"
          value={filteredOkrs.length}
          subtitle="Objetivos estratégicos"
          icon={<Target className="w-4 h-4" />}
          variant="default"
        />
        
        <MetricCard
          title="Projetos"
          value={data.metrics.projetos.concluidos + data.metrics.projetos.andamento + data.metrics.projetos.atrasados}
          subtitle={`${data.metrics.projetos.concluidos} concluídos`}
          icon={<Briefcase className="w-4 h-4" />}
          variant="success"
        />
        
        <MetricCard
          title={data.metrics.indicadores?.nps ? "NPS" : data.metrics.indicadores?.conformidade ? "Conformidade" : "Indicador"}
          value={data.metrics.indicadores?.nps || data.metrics.indicadores?.conformidade || data.metrics.indicadores?.conversao || data.metrics.indicadores?.automacao || 75}
          subtitle="Score atual"
          icon={<TrendingUp className="w-4 h-4" />}
          trend="up"
          trendValue="+3.1%"
          variant="success"
        />
      </div>

      {/* Dashboard Visual */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico de Progresso dos OKRs */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Progresso dos OKRs</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={okrProgress}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="name" className="fill-muted-foreground" />
                <YAxis className="fill-muted-foreground" />
                <Bar 
                  dataKey="progresso" 
                  className="fill-primary"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Gráfico de Pizza - Status dos Projetos */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Status dos Projetos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={projectStatus}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}`}
                  >
                    {projectStatus.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              {projectStatus.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-muted-foreground">
                    {item.name}: {item.value}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Timeline dos Projetos */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Timeline dos Projetos (Gantt Simplificado)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {projectTimeline.map((project, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg">
                <div className="min-w-[120px]">
                  <div className="font-medium text-foreground">{project.projeto}</div>
                  <div className="text-sm text-muted-foreground">
                    {project.inicio} - {project.fim}
                  </div>
                </div>
                <div className="flex-1 bg-muted rounded-full h-2 relative">
                  <div 
                    className={cn(
                      "h-2 rounded-full",
                      project.status === "concluido" ? "bg-success" :
                      project.status === "andamento" ? "bg-warning" :
                      "bg-destructive"
                    )}
                    style={{ width: project.status === "concluido" ? "100%" : "60%" }}
                  />
                </div>
                <Badge 
                  variant={
                    project.status === "concluido" ? "default" :
                    project.status === "andamento" ? "secondary" :
                    "destructive"
                  }
                  className="capitalize"
                >
                  {project.status === "concluido" ? "Concluído" :
                   project.status === "andamento" ? "Em Andamento" :
                   "Atrasado"}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Ring */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Performance do Eixo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center">
            <ProgressRing progress={data.metrics.performance} size={200} strokeWidth={12}>
              <div className="text-center">
                <div className={cn("text-4xl font-bold", colorVariants[data.color])}>
                  {data.metrics.performance}%
                </div>
                <div className="text-sm text-muted-foreground">Performance</div>
              </div>
            </ProgressRing>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}