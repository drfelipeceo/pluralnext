import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DashboardOverview } from "@/components/dashboard-overview";
import { StrategicAxisCard } from "@/components/strategic-axis-card";

const strategicAxes = [
  {
    title: "Econômico-Financeiro",
    description: "Aumentar rentabilidade, controle financeiro em tempo real, inteligência de dados e cultura de integridade",
    progress: 78,
    projectsCount: 20,
    completedOkrs: 7,
    totalOkrs: 9,
    color: "blue" as const
  },
  {
    title: "ESG, Risco & Compliance",
    description: "Conformidade legal, governança estruturada, gestão de riscos, integridade institucional e agenda ESG",
    progress: 65,
    projectsCount: 15,
    completedOkrs: 6,
    totalOkrs: 9,
    color: "green" as const
  },
  {
    title: "Patrimônio Humano",
    description: "Capital humano estratégico, desenvolvimento de líderes, engajamento e gestão de pessoas por dados",
    progress: 82,
    projectsCount: 19,
    completedOkrs: 8,
    totalOkrs: 10,
    color: "teal" as const
  },
  {
    title: "Mercado, Marketing & Clientes",
    description: "Inteligência de mercado, ampliar base de clientes, customer success e consolidação da marca",
    progress: 59,
    projectsCount: 15,
    completedOkrs: 5,
    totalOkrs: 8,
    color: "orange" as const
  },
  {
    title: "Processos Internos & Tecnologia",
    description: "Base tecnológica corporativa, automação com IA, cultura de inovação e ecossistema digital",
    progress: 71,
    projectsCount: 20,
    completedOkrs: 6,
    totalOkrs: 8,
    color: "dark-teal" as const
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="gradient-hero rounded-2xl p-8 text-white mb-8 shadow-executive">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              OKRs Estratégicos 2025
            </h1>
            <p className="text-lg text-white/90 mb-6">
              Plataforma executiva para monitoramento e avaliação dos objetivos estratégicos do Grupo PluralMed. 
              Acompanhe o progresso em tempo real e tome decisões baseadas em dados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold">73%</div>
                <div className="text-sm text-white/80">Performance Geral</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold">89</div>
                <div className="text-sm text-white/80">Projetos Ativos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold">42</div>
                <div className="text-sm text-white/80">OKRs Estratégicos</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Overview */}
        <DashboardOverview />

        {/* Strategic Axes */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">
              Eixos Estratégicos 2025
            </h2>
            <div className="text-sm text-muted-foreground">
              5 eixos • 44 OKRs • 89 projetos
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {strategicAxes.map((axis) => (
              <StrategicAxisCard
                key={axis.title}
                {...axis}
                onClick={() => {
                  // TODO: Navigate to detailed view
                  console.log(`Navigating to ${axis.title} details`);
                }}
              />
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 bg-secondary/50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Ações Rápidas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-card rounded-lg p-4 shadow-card cursor-pointer hover:shadow-elevated transition-executive">
              <h4 className="font-medium text-foreground mb-2">Relatório Executivo</h4>
              <p className="text-sm text-muted-foreground">Gerar relatório consolidado para diretoria</p>
            </div>
            <div className="bg-card rounded-lg p-4 shadow-card cursor-pointer hover:shadow-elevated transition-executive">
              <h4 className="font-medium text-foreground mb-2">Análise de Riscos</h4>
              <p className="text-sm text-muted-foreground">Identificar OKRs em situação crítica</p>
            </div>
            <div className="bg-card rounded-lg p-4 shadow-card cursor-pointer hover:shadow-elevated transition-executive">
              <h4 className="font-medium text-foreground mb-2">Configurações LGPD</h4>
              <p className="text-sm text-muted-foreground">Gerenciar conformidade e privacidade</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
