// Dados mockados dos OKRs por eixo estratégico

export interface OKR {
  id: string;
  objetivo: string;
  resultadosChave: string[];
  indicadores: {
    percentual: number;
    status: "success" | "warning" | "danger";
    responsavel: string;
    prazo: string;
  };
  projetosVinculados: string[];
}

export interface AxisData {
  id: string;
  title: string;
  description: string;
  color: "blue" | "orange" | "teal" | "green" | "dark-teal";
  okrs: OKR[];
  metrics: {
    performance: number;
    projetos: {
      concluidos: number;
      andamento: number;
      atrasados: number;
    };
    indicadores: {
      nps?: number;
      conformidade?: number;
      reducaoCustos?: number;
      expansao?: number;
      turnover?: number;
      conversao?: number;
      automacao?: number;
    };
  };
}

export const axisData: AxisData[] = [
  {
    id: "economico-financeiro",
    title: "Econômico-Financeiro",
    description: "Aumentar rentabilidade, controle financeiro em tempo real, inteligência de dados e cultura de integridade",
    color: "blue",
    okrs: [
      {
        id: "okr-ef-1",
        objetivo: "Aumentar margem de contribuição em 15%",
        resultadosChave: [
          "Reduzir custos operacionais em 8%",
          "Implementar precificação dinâmica",
          "Otimizar mix de produtos/serviços"
        ],
        indicadores: {
          percentual: 78,
          status: "success",
          responsavel: "Diretoria Financeira",
          prazo: "Q4 2025"
        },
        projetosVinculados: ["Zero Desperdício", "Precifica 360°", "Revisa+"]
      },
      {
        id: "okr-ef-2",
        objetivo: "Implementar controle financeiro em tempo real",
        resultadosChave: [
          "Integrar 100% dos sistemas financeiros",
          "Automatizar 90% das conciliações",
          "Reduzir tempo de fechamento para 3 dias"
        ],
        indicadores: {
          percentual: 65,
          status: "warning",
          responsavel: "Gerência Contábil",
          prazo: "Q3 2025"
        },
        projetosVinculados: ["Financeiro Único", "BI Integrado", "Extrato 360"]
      },
      {
        id: "okr-ef-3",
        objetivo: "Estabelecer cultura de integridade financeira",
        resultadosChave: [
          "100% colaboradores capacitados",
          "Reduzir desvios em 80%",
          "Implementar auditoria contínua"
        ],
        indicadores: {
          percentual: 82,
          status: "success",
          responsavel: "Compliance",
          prazo: "Q2 2025"
        },
        projetosVinculados: ["Auditoria Viva", "Meta Ativa", "Selo Integridade"]
      }
    ],
    metrics: {
      performance: 78,
      projetos: {
        concluidos: 12,
        andamento: 6,
        atrasados: 2
      },
      indicadores: {
        reducaoCustos: 12.5,
        conformidade: 87
      }
    }
  },
  {
    id: "esg-risco-compliance",
    title: "ESG, Risco & Compliance",
    description: "Conformidade legal, governança estruturada, gestão de riscos, integridade institucional e agenda ESG",
    color: "green",
    okrs: [
      {
        id: "okr-esg-1",
        objetivo: "Atingir 100% conformidade legal",
        resultadosChave: [
          "Revisar 100% dos contratos",
          "Implementar auditoria permanente",
          "Zero pendências regulatórias"
        ],
        indicadores: {
          percentual: 92,
          status: "success",
          responsavel: "Jurídico",
          prazo: "Q3 2025"
        },
        projetosVinculados: ["Contrato Integridade", "Juris360", "Auditoria Contratual Permanente"]
      },
      {
        id: "okr-esg-2",
        objetivo: "Estruturar governança corporativa",
        resultadosChave: [
          "Implementar carta de governança",
          "Definir fluxo de responsabilidades",
          "Capacitar 100% líderes"
        ],
        indicadores: {
          percentual: 75,
          status: "success",
          responsavel: "Governança",
          prazo: "Q4 2025"
        },
        projetosVinculados: ["Carta de Governança", "Portal do Líder Responsável"]
      },
      {
        id: "okr-esg-3",
        objetivo: "Publicar relatório GRI 2025",
        resultadosChave: [
          "Mapear indicadores ESG",
          "Implementar painel de impacto",
          "Certificação ESG"
        ],
        indicadores: {
          percentual: 58,
          status: "warning",
          responsavel: "Sustentabilidade",
          prazo: "Q4 2025"
        },
        projetosVinculados: ["Política ESG PluralMed", "Painel Impacto Positivo", "Relatório GRI 2025"]
      }
    ],
    metrics: {
      performance: 65,
      projetos: {
        concluidos: 8,
        andamento: 5,
        atrasados: 2
      },
      indicadores: {
        conformidade: 92,
        nps: 85
      }
    }
  },
  {
    id: "patrimonio-humano",
    title: "Patrimônio Humano",
    description: "Capital humano estratégico, desenvolvimento de líderes, engajamento e gestão de pessoas por dados",
    color: "teal",
    okrs: [
      {
        id: "okr-ph-1",
        objetivo: "Desenvolver pipeline de sucessão",
        resultadosChave: [
          "Mapear 100% talentos críticos",
          "Implementar escola de liderança",
          "Reduzir dependência chave em 60%"
        ],
        indicadores: {
          percentual: 85,
          status: "success",
          responsavel: "RH Corporativo",
          prazo: "Q3 2025"
        },
        projetosVinculados: ["Mapa de Talentos Plural", "Pipeline de Sucessão", "Escola de Liderança Plural"]
      },
      {
        id: "okr-ph-2",
        objetivo: "Aumentar engajamento para 90%",
        resultadosChave: [
          "Implementar cultura viva",
          "Reduzir turnover para 8%",
          "NPS interno acima de 80"
        ],
        indicadores: {
          percentual: 78,
          status: "success",
          responsavel: "Engajamento",
          prazo: "Q4 2025"
        },
        projetosVinculados: ["Cultura Viva", "Reconhece+", "Onboarding com Alma"]
      },
      {
        id: "okr-ph-3",
        objetivo: "Promover saúde mental e bem-estar",
        resultadosChave: [
          "100% adesão ao PluralCuidado",
          "Reduzir absenteísmo em 25%",
          "Mapear riscos psicossociais"
        ],
        indicadores: {
          percentual: 82,
          status: "success",
          responsavel: "Bem-Estar",
          prazo: "Q2 2025"
        },
        projetosVinculados: ["PluralCuidado", "Mapa de Bem-Estar", "Liderança que Cuida"]
      }
    ],
    metrics: {
      performance: 82,
      projetos: {
        concluidos: 11,
        andamento: 7,
        atrasados: 1
      },
      indicadores: {
        turnover: 9.2,
        nps: 82
      }
    }
  },
  {
    id: "mercado-marketing-clientes",
    title: "Mercado, Marketing & Clientes",
    description: "Inteligência de mercado, ampliar base de clientes, customer success e consolidação da marca",
    color: "orange",
    okrs: [
      {
        id: "okr-mmc-1",
        objetivo: "Ampliar base de clientes em 30%",
        resultadosChave: [
          "Implementar CRM Plural+",
          "Aumentar conversão para 25%",
          "Expandir no Ceará"
        ],
        indicadores: {
          percentual: 62,
          status: "warning",
          responsavel: "Comercial",
          prazo: "Q4 2025"
        },
        projetosVinculados: ["CRM Plural+", "Mapa de Expansão CE", "Roadshow Regional"]
      },
      {
        id: "okr-mmc-2",
        objetivo: "Consolidar marca PluralMed",
        resultadosChave: [
          "Rebranding completo",
          "Aumentar NPS para 85",
          "Painel de evidências ativo"
        ],
        indicadores: {
          percentual: 70,
          status: "success",
          responsavel: "Marketing",
          prazo: "Q3 2025"
        },
        projetosVinculados: ["Rebranding PluralMED", "Painel de Evidências", "Campanha Gestão que Transforma"]
      },
      {
        id: "okr-mmc-3",
        objetivo: "Implementar inteligência de mercado",
        resultadosChave: [
          "Radar público ativo",
          "Diagnóstico SUS completo",
          "FPM+ operacional"
        ],
        indicadores: {
          percentual: 45,
          status: "danger",
          responsavel: "Inteligência",
          prazo: "Q3 2025"
        },
        projetosVinculados: ["Radar Público Plural", "Diagnóstico de Mercado SUS", "Painel FPM+"]
      }
    ],
    metrics: {
      performance: 59,
      projetos: {
        concluidos: 6,
        andamento: 8,
        atrasados: 4
      },
      indicadores: {
        conversao: 18.5,
        nps: 78,
        expansao: 22
      }
    }
  },
  {
    id: "processos-internos-tecnologia",
    title: "Processos Internos & Tecnologia",
    description: "Base tecnológica corporativa, automação com IA, cultura de inovação e ecossistema digital",
    color: "dark-teal",
    okrs: [
      {
        id: "okr-pit-1",
        objetivo: "Implementar base tecnológica única",
        resultadosChave: [
          "Sankhya+ 100% operacional",
          "Integrar todos os sistemas",
          "Reduzir retrabalho em 70%"
        ],
        indicadores: {
          percentual: 78,
          status: "success",
          responsavel: "TI Corporativo",
          prazo: "Q3 2025"
        },
        projetosVinculados: ["Sankhya+", "Integra Plural UX", "Plataforma No-Code Interna"]
      },
      {
        id: "okr-pit-2",
        objetivo: "Automatizar processos com IA",
        resultadosChave: [
          "30 processos automatizados",
          "Agente IA operacional",
          "Reduzir tempo manual em 50%"
        ],
        indicadores: {
          percentual: 65,
          status: "warning",
          responsavel: "Inovação",
          prazo: "Q4 2025"
        },
        projetosVinculados: ["Automação Financeira 360", "Agente IA Operacional", "Mapeamento de Processos Smart"]
      },
      {
        id: "okr-pit-3",
        objetivo: "Fortalecer ecossistema digital",
        resultadosChave: [
          "PluralMedApp 2.0 lançado",
          "PluralMed Conecta em 50 municípios",
          "Vituz Total implementado"
        ],
        indicadores: {
          percentual: 72,
          status: "success",
          responsavel: "Produto",
          prazo: "Q4 2025"
        },
        projetosVinculados: ["PluralMedApp 2.0", "PluralMed Conecta", "Plataforma Vituz Total"]
      }
    ],
    metrics: {
      performance: 71,
      projetos: {
        concluidos: 9,
        andamento: 9,
        atrasados: 2
      },
      indicadores: {
        automacao: 65,
        nps: 74
      }
    }
  }
];