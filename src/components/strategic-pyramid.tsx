import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Users, Brain, Settings, TrendingUp, Shield } from "lucide-react";
import { axisData } from "@/data/okr-data";
import { cn } from "@/lib/utils";

interface PyramidLayer {
  id: string;
  title: string;
  color: string;
  icon: React.ReactNode;
  axisId: string;
}

const pyramidLayers: PyramidLayer[] = [
  {
    id: "perenidade",
    title: "Perenidade & Financeiro",
    color: "bg-yellow-400",
    icon: <Globe className="w-6 h-6" />,
    axisId: "economico-financeiro"
  },
  {
    id: "mercado",
    title: "Mercado & Clientes",
    color: "bg-red-500",
    icon: <Brain className="w-6 h-6" />,
    axisId: "mercado-marketing-clientes"
  },
  {
    id: "processos",
    title: "Processos & Tecnologia",
    color: "bg-blue-800",
    icon: <Settings className="w-6 h-6" />,
    axisId: "processos-internos-tecnologia"
  },
  {
    id: "patrimonio",
    title: "Patrimônio Humano",
    color: "bg-blue-600",
    icon: <Users className="w-6 h-6" />,
    axisId: "patrimonio-humano"
  },
  {
    id: "esg",
    title: "ESG - RC",
    color: "bg-gray-400",
    icon: <Shield className="w-6 h-6" />,
    axisId: "esg-risco-compliance"
  }
];

export function StrategicPyramid() {
  const getAxisData = (axisId: string) => {
    return axisData.find(axis => axis.id === axisId);
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Pirâmide Estratégica - Projetos por Eixo
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center space-y-2">
          {pyramidLayers.map((layer, index) => {
            const axis = getAxisData(layer.axisId);
            if (!axis) return null;

            const totalProjects = axis.metrics.projetos.concluidos + 
                                axis.metrics.projetos.andamento + 
                                axis.metrics.projetos.atrasados;

            const width = 100 - (index * 15); // Pirâmide: topo menor, base maior
            const height = 60 + (index * 10); // Altura aumenta para baixo

            return (
              <div
                key={layer.id}
                className={cn(
                  "relative flex items-center justify-center text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105",
                  layer.color
                )}
                style={{
                  width: `${width}%`,
                  height: `${height}px`,
                  minWidth: "200px"
                }}
              >
                <div className="flex items-center gap-3">
                  {layer.icon}
                  <div className="text-center">
                    <div className="text-sm font-bold">{layer.title}</div>
                    <div className="text-xs opacity-90">{totalProjects} projetos</div>
                  </div>
                </div>
                
                {/* Badges de status flutuantes */}
                <div className="absolute -top-2 -right-2 flex gap-1">
                  <Badge 
                    variant="secondary" 
                    className="text-xs bg-green-100 text-green-800"
                  >
                    {axis.metrics.projetos.concluidos}✓
                  </Badge>
                  <Badge 
                    variant="secondary" 
                    className="text-xs bg-yellow-100 text-yellow-800"
                  >
                    {axis.metrics.projetos.andamento}⟳
                  </Badge>
                  <Badge 
                    variant="secondary" 
                    className="text-xs bg-red-100 text-red-800"
                  >
                    {axis.metrics.projetos.atrasados}⚠
                  </Badge>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Legenda */}
        <div className="mt-6 flex justify-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Concluídos</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span>Em Andamento</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span>Atrasados</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
