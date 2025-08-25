import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { OKRTable } from "@/components/okr-table";
import { AxisDashboard } from "@/components/axis-dashboard";
import { ArrowLeft, TrendingUp } from "lucide-react";
import { axisData } from "@/data/okr-data";
import { cn } from "@/lib/utils";

const colorVariants = {
  blue: "bg-pluralmed-blue/5 border-pluralmed-blue/20",
  orange: "bg-pluralmed-orange/5 border-pluralmed-orange/20",
  teal: "bg-pluralmed-teal/5 border-pluralmed-teal/20",
  green: "bg-pluralmed-green/5 border-pluralmed-green/20",
  "dark-teal": "bg-pluralmed-dark-teal/5 border-pluralmed-dark-teal/20"
};

const colorClasses = {
  blue: "text-pluralmed-blue",
  orange: "text-pluralmed-orange",
  teal: "text-pluralmed-teal",
  green: "text-pluralmed-green",
  "dark-teal": "text-pluralmed-dark-teal"
};

const AxisDetail = () => {
  const { axisId } = useParams();
  const navigate = useNavigate();
  
  const axis = axisData.find(a => a.id === axisId);
  
  if (!axis) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Eixo não encontrado</h1>
            <Button onClick={() => navigate("/")} variant="outline">
              Voltar ao Dashboard
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Cabeçalho do Eixo */}
        <div className={cn(
          "rounded-2xl p-8 mb-8 shadow-executive border",
          colorVariants[axis.color]
        )}>
          <div className="flex items-start justify-between mb-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/")}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Dashboard
            </Button>
            
            <Badge variant="secondary" className="gap-2">
              <TrendingUp className="w-3 h-3" />
              {axis.metrics.performance}% Performance
            </Badge>
          </div>
          
          <div className="max-w-4xl">
            <h1 className={cn(
              "text-4xl font-bold mb-4",
              colorClasses[axis.color]
            )}>
              {axis.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {axis.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-background/60 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                <div className="text-2xl font-bold text-foreground">{axis.okrs.length}</div>
                <div className="text-sm text-muted-foreground">OKRs Ativos</div>
              </div>
              
              <div className="bg-background/60 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                <div className="text-2xl font-bold text-foreground">
                  {axis.metrics.projetos.concluidos + axis.metrics.projetos.andamento + axis.metrics.projetos.atrasados}
                </div>
                <div className="text-sm text-muted-foreground">Projetos Vinculados</div>
              </div>
              
              <div className="bg-background/60 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                <div className="text-2xl font-bold text-foreground">
                  {Math.round((axis.okrs.filter(okr => okr.indicadores.status === "success").length / axis.okrs.length) * 100)}%
                </div>
                <div className="text-sm text-muted-foreground">OKRs no Prazo</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Visual */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Dashboard Visual</h2>
          <AxisDashboard data={axis} />
        </div>

        {/* Tabela de OKRs */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">OKRs Detalhados</h2>
          <OKRTable okrs={axis.okrs} title={axis.title} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AxisDetail;