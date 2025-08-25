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
  negocioId?: number; // Negócio principal relacionado
  celulaIds?: number[]; // Células envolvidas (transversalidade)
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
        objetivo: "Aumentar a rentabilidade da operação em 2025",
        resultadosChave: [
          "Reduzir em 20% os custos indiretos sem geração de valor até dezembro de 2025",
          "Revisar 100% dos contratos vigentes com foco em margem e encargos até outubro de 2025",
          "Implementar nova política de precificação baseada em custos reais até novembro de 2025",
          "Reduzir a inadimplência financeira em 30% até o final do ano",
          "Auditar 100% dos contratos para cobrança de serviços prestados não contabilizados"
        ],
        indicadores: {
          percentual: 64,
          status: "warning",
          responsavel: "Diretoria Financeira",
          prazo: "Q4 2025"
        },
        projetosVinculados: ["Zero Desperdício", "Revisa+", "Precifica 360°", "Caixa Saudável", "Execução"],
        negocioId: 2,
        celulaIds: [8, 5]
      },
      {
        id: "okr-ef-2",
        objetivo: "Implantar controle financeiro em tempo real em todos os CNPJs até julho de 2025",
        resultadosChave: [
          "Implantar sistema único de contas a pagar/receber em 100% dos CNPJs",
          "Publicar dashboards financeiros integrados em tempo real até junho de 2025",
          "Implementar calendário semanal de caixa com alarmes automáticos",
          "Padronizar plano de contas e centros de custo até maio de 2025",
          "Automatizar a conciliação bancária com integração a 100% dos bancos"
        ],
        indicadores: {
          percentual: 60,
          status: "warning",
          responsavel: "Controladoria",
          prazo: "Q3 2025"
        },
        projetosVinculados: ["Financeiro Único", "BI Integrado", "Calendário de Caixa", "Padroniza Contas", "Extrato 360"],
        negocioId: 2,
        celulaIds: [8, 16, 17]
      },
      {
        id: "okr-ef-3",
        objetivo: "Transformar o setor financeiro em referência nacional de inteligência de dados",
        resultadosChave: [
          "Construir modelo preditivo de cenário econômico-financeiro até setembro de 2025",
          "Disponibilizar dashboards executivos atualizados automaticamente",
          "Elaborar projeções mensais, trimestrais e anuais com algoritmos preditivos",
          "Validar KPIs financeiros estratégicos por projeto e contrato",
          "Relatórios de performance até o 10º dia útil de cada mês"
        ],
        indicadores: {
          percentual: 57,
          status: "warning",
          responsavel: "Inteligência / Finanças",
          prazo: "Q4 2025"
        },
        projetosVinculados: ["Decisão Baseada em Dados", "BI Executivo", "Fluxo Futuro", "Indicadores de Ouro", "Diagnóstico de Performance"],
        negocioId: 2,
        celulaIds: [17, 8]
      },
      {
        id: "okr-ef-4",
        objetivo: "Institucionalizar cultura de performance, integridade e compliance financeiro",
        resultadosChave: [
          "Implantar metas por entregáveis em 100% das equipes financeiras até setembro de 2025",
          "Certificar 70% das equipes com selo de integridade até dezembro de 2025",
          "Implementar sistema de auditoria contínua com ciclo mensal",
          "Política de compliance financeiro com trilha obrigatória",
          "Treinar 100% dos líderes financeiros em performance e governança"
        ],
        indicadores: {
          percentual: 72,
          status: "success",
          responsavel: "Compliance / Finanças",
          prazo: "Q4 2025"
        },
        projetosVinculados: ["Selo Integridade", "Meta Ativa", "Auditoria Viva", "Compliance Vivo", "Liderança de Alta Performance"],
        negocioId: 2,
        celulaIds: [5, 8, 9]
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
        objetivo: "Garantir 100% de conformidade legal e regulatória nos contratos e processos organizacionais",
        resultadosChave: [
          "Revisar e validar 100% dos contratos vigentes segundo novo checklist jurídico de compliance",
          "Implantar 1 sistema digital de controle e rastreabilidade contratual integrado ao ERP e jurídico",
          "Realizar auditorias internas em 100% dos contratos de gestão até o final do ano"
        ],
        indicadores: {
          percentual: 70,
          status: "warning",
          responsavel: "Jurídico / Compliance",
          prazo: "Q4 2025"
        },
        projetosVinculados: ["Contrato Integridade", "Juris360", "Auditoria Contratual Permanente"],
        negocioId: 2,
        celulaIds: [5]
      },
      {
        id: "okr-esg-2",
        objetivo: "Consolidar a governança organizacional com estruturas decisórias claras e rastreáveis",
        resultadosChave: [
          "Implementar regimentos internos para 100% das diretorias com organogramas e fluxos decisórios mapeados",
          "Publicar a Carta de Governança PluralMed para toda a organização",
          "Disponibilizar painéis de acesso e execução para líderes com trilhas de capacitação e atribuições legais"
        ],
        indicadores: {
          percentual: 62,
          status: "warning",
          responsavel: "Governança",
          prazo: "Q4 2025"
        },
        projetosVinculados: ["Carta de Governança", "Fluxograma de Responsabilidades", "Portal do Líder Responsável"],
        negocioId: 2,
        celulaIds: [6]
      },
      {
        id: "okr-esg-3",
        objetivo: "Estruturar uma gestão de riscos corporativos proativa e orientada por dados",
        resultadosChave: [
          "Mapear 100% dos riscos estratégicos por núcleo de negócio e registrar em plataforma digital até junho",
          "Criar 1 matriz de riscos com criticidade, impacto e plano de ação preventivo",
          "Realizar reuniões trimestrais de comitê de riscos com relatórios executivos"
        ],
        indicadores: {
          percentual: 55,
          status: "warning",
          responsavel: "Gestão de Riscos",
          prazo: "Q4 2025"
        },
        projetosVinculados: ["Mapa Corporativo de Risco", "Matriz 3R", "Comitê de Riscos e Incidentes"],
        negocioId: 2,
        celulaIds: [5, 17]
      },
      {
        id: "okr-esg-4",
        objetivo: "Fortalecer a cultura de integridade, ética e transparência institucional",
        resultadosChave: [
          "Criar e disseminar o Código de Ética e Integridade com 100% de adesão até Q3/2025",
          "Implantar canal de denúncias digital auditado por empresa independente",
          "Realizar 4 campanhas internas por ano com foco em cultura ética, compliance e conduta profissional"
        ],
        indicadores: {
          percentual: 68,
          status: "success",
          responsavel: "Compliance / DHO",
          prazo: "Q3 2025"
        },
        projetosVinculados: ["Código PluralMed Ético", "Canal + Confiança", "Cultura Ética Ativa"],
        negocioId: 2,
        celulaIds: [5, 9]
      },
      {
        id: "okr-esg-5",
        objetivo: "Iniciar a agenda ESG na PluralMed com foco em impacto socioambiental mensurável",
        resultadosChave: [
          "Criar Política ESG com compromissos para os pilares ambiental, social e governança",
          "Implantar sistema de medição de impacto (ex: emissão de carbono, inclusão social, diversidade)",
          "Publicar o 1º Relatório Anual de Sustentabilidade da PluralMed com base nas diretrizes GRI até dezembro de 2025"
        ],
        indicadores: {
          percentual: 58,
          status: "warning",
          responsavel: "Sustentabilidade",
          prazo: "Q4 2025"
        },
        projetosVinculados: ["Política ESG PluralMed", "Painel Impacto Positivo", "Relatório GRI 2025"],
        negocioId: 2,
        celulaIds: [20]
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
        objetivo: "Fortalecer o capital humano como vantagem competitiva do negócio",
        resultadosChave: [
          "Mapear 100% do capital humano estratégico em tempo real",
          "Plano de sucessão com pelo menos 3 lideranças por núcleo até Q4",
          "Política de cargos, salários e trilhas para 100% dos contratos"
        ],
        indicadores: {
          percentual: 66,
          status: "warning",
          responsavel: "DHO",
          prazo: "Q4 2025"
        },
        projetosVinculados: ["Mapa de Talentos Plural", "Pipeline de Sucessão", "Plano de Cargos e Trilhas"],
        negocioId: 5,
        celulaIds: [9]
      },
      {
        id: "okr-ph-2",
        objetivo: "Desenvolver líderes de alta performance com base em competências e cultura institucional",
        resultadosChave: [
          "Avaliar 100% dos líderes em matriz de competências e alinhamento",
          "Implantar trilha de liderança com três níveis",
          "Criar Programa de Mentoria Interna"
        ],
        indicadores: {
          percentual: 71,
          status: "success",
          responsavel: "DHO / Educação Permanente",
          prazo: "Q4 2025"
        },
        projetosVinculados: ["Escola de Liderança Plural", "Matriz 3C", "Mentoria Intersetorial"],
        negocioId: 5,
        celulaIds: [9, 12]
      },
      {
        id: "okr-ph-3",
        objetivo: "Aumentar o engajamento e pertencimento dos colaboradores",
        resultadosChave: [
          "Duas pesquisas de clima com participação >= 75% e NPS interno >= 60",
          "Programa de integração e cultura com 100% de cobertura",
          "Seis campanhas de valorização por ano com reconhecimento público"
        ],
        indicadores: {
          percentual: 69,
          status: "success",
          responsavel: "DHO / Comunicação",
          prazo: "Q4 2025"
        },
        projetosVinculados: ["Cultura Viva", "Onboarding com Alma", "Reconhece+"],
        negocioId: 5,
        celulaIds: [9]
      },
      {
        id: "okr-ph-4",
        objetivo: "Profissionalizar a gestão de pessoas com base em dados e decisões inteligentes",
        resultadosChave: [
          "Implantar BI de RH com dashboards-chave",
          "Reduzir turnover voluntário em 20%",
          "100% das decisões de pessoal vinculadas à análise de dados"
        ],
        indicadores: {
          percentual: 58,
          status: "warning",
          responsavel: "DHO / Inteligência",
          prazo: "Q4 2025"
        },
        projetosVinculados: ["RH Inteligente", "Painel de Indicadores Humanos", "Decisão por Dados"],
        negocioId: 5,
        celulaIds: [9, 17]
      },
      {
        id: "okr-ph-5",
        objetivo: "Fortalecer as lideranças locais nas unidades e contratos de gestão",
        resultadosChave: [
          "Presença de lideranças locais formadas em 100% das unidades",
          "Trilha de formação de coordenadores locais em parceria com NAC e GEC",
          "Fórum bimestral de líderes locais com benchmarking"
        ],
        indicadores: {
          percentual: 63,
          status: "warning",
          responsavel: "Operações / DHO",
          prazo: "Q4 2025"
        },
        projetosVinculados: ["LideraLocal", "Trilha Coordenador 360", "Fórum dos Gestores"],
        negocioId: 5,
        celulaIds: [3, 9]
      },
      {
        id: "okr-ph-6",
        objetivo: "Promover a saúde mental e o bem-estar dos colaboradores",
        resultadosChave: [
          "Programa de Saúde Emocional com cobertura 100% até o final de 2025",
          "Quatro ciclos de campanhas anuais de bem-estar",
          "Sistema de acompanhamento de indicadores com relatórios trimestrais",
          "100% das lideranças formadas sobre saúde mental no trabalho"
        ],
        indicadores: {
          percentual: 74,
          status: "success",
          responsavel: "NSM / DHO",
          prazo: "Q4 2025"
        },
        projetosVinculados: ["PluralCuidado", "Mapa de Bem-Estar", "Ciclo de Cuidado", "Liderança que Cuida"],
        negocioId: 5,
        celulaIds: [19, 9]
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
        objetivo: "Inteligência de mercado e diagnóstico situacional",
        resultadosChave: [
          "Criar mapa de oportunidades de contratos públicos atualizado trimestralmente",
          "Automatizar painéis preditivos com variáveis de repasses e editais",
          "Relatórios mensais ao CEO com análise de riscos e potencial de novos contratos"
        ],
        indicadores: {
          percentual: 52,
          status: "warning",
          responsavel: "PD&I / Inteligência",
          prazo: "Q4 2025"
        },
        projetosVinculados: ["Radar Público Plural", "Painel FPM+", "Diagnóstico de Mercado SUS"],
        negocioId: 4,
        celulaIds: [1, 17]
      },
      {
        id: "okr-mmc-2",
        objetivo: "Ampliar a base de clientes",
        resultadosChave: [
          "Aumentar em 30% a base de municípios até dezembro",
          "100% dos planos de trabalho baseados em inteligência territorial",
          "Implantar CRM com conversão mínima de 15%"
        ],
        indicadores: {
          percentual: 59,
          status: "warning",
          responsavel: "Comercial / Marketing",
          prazo: "Q4 2025"
        },
        projetosVinculados: ["CRM Plural+", "Plano Municipal Inteligente", "Roadshow Regional de Saúde"],
        negocioId: 4,
        celulaIds: [2, 17]
      },
      {
        id: "okr-mmc-3",
        objetivo: "Customer success e retenção ativa",
        resultadosChave: [
          "Política de sucesso do cliente com metas por NPS e ciclo de vida",
          "Encontros estratégicos com cada cliente a cada 60 dias",
          "Taxa de renovação contratual para 85% ao final de 2025"
        ],
        indicadores: {
          percentual: 61,
          status: "warning",
          responsavel: "GEC / Operações",
          prazo: "Q4 2025"
        },
        projetosVinculados: ["Jornada Cliente Plural", "Relatório de Valor Gerado", "Customer Board"],
        negocioId: 4,
        celulaIds: [2, 3]
      },
      {
        id: "okr-mmc-4",
        objetivo: "Consolidação da marca PluralMED",
        resultadosChave: [
          "Publicar 12 evidências de impacto em gestão pública",
          "Identidade institucional renovada em 100% das unidades",
          "Elevar engajamento digital institucional em 50%"
        ],
        indicadores: {
          percentual: 72,
          status: "success",
          responsavel: "Marketing",
          prazo: "Q4 2025"
        },
        projetosVinculados: ["Campanha Gestão que Transforma", "Rebranding PluralMED", "Painel de Evidências"],
        negocioId: 4,
        celulaIds: [2, 9]
      },
      {
        id: "okr-mmc-5",
        objetivo: "Expansão inteligente no Ceará",
        resultadosChave: [
          "Atuar em pelo menos 8 novos municípios com viabilidade comprovada",
          "Usar matriz de viabilidade 3E em 100% dos novos projetos",
          "Criar plano de comunicação para stakeholders locais até 15 dias após início"
        ],
        indicadores: {
          percentual: 48,
          status: "danger",
          responsavel: "Comercial / Relações Institucionais",
          prazo: "Q4 2025"
        },
        projetosVinculados: ["Mapa de Expansão CE", "Matriz de Decisão 3E", "Welcome Stakeholders"],
        negocioId: 4,
        celulaIds: [14, 17, 2]
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
        objetivo: "Estruturar a base tecnológica corporativa para suportar o crescimento e a integração dos negócios",
        resultadosChave: [
          "Implantar Sankhya ERP em 100% das frentes até dezembro",
          "Integrar rotinas financeiras no módulo automatizado",
          "Criar 5 soluções internas via plataforma No-Code"
        ],
        indicadores: {
          percentual: 68,
          status: "success",
          responsavel: "TI Corporativo",
          prazo: "Q4 2025"
        },
        projetosVinculados: ["Sankhya+", "Plataforma No-Code Interna", "Automação Financeira 360"],
        negocioId: 3,
        celulaIds: [16, 8]
      },
      {
        id: "okr-pit-2",
        objetivo: "Promover a automação inteligente dos processos internos com IA e tecnologias emergentes",
        resultadosChave: [
          "Ativar agente de IA para monitoramento de KPIs até junho",
          "Mapear e automatizar pelo menos 15 processos críticos",
          "Reduzir tempo médio de execução de processos em 40%"
        ],
        indicadores: {
          percentual: 60,
          status: "warning",
          responsavel: "Inovação / TI",
          prazo: "Q4 2025"
        },
        projetosVinculados: ["Agente IA Operacional", "Mapeamento de Processos Smart", "Alertas Proativos Vituz"],
        negocioId: 3,
        celulaIds: [16, 7]
      },
      {
        id: "okr-pit-3",
        objetivo: "Consolidar a cultura de inovação contínua como diferencial competitivo",
        resultadosChave: [
          "Metodologia ágil com painéis de acompanhamento em tempo real",
          "Capacitar 100% dos líderes técnicos em inovação",
          "Lançar ao menos 10 produtos/processos inovadores certificados em 2025"
        ],
        indicadores: {
          percentual: 55,
          status: "warning",
          responsavel: "PD&I / Inovação",
          prazo: "Q4 2025"
        },
        projetosVinculados: ["PluralMed Labs", "PM Canvas Inovação", "Trilhas Ágeis de Capacitação"],
        negocioId: 3,
        celulaIds: [1, 16]
      },
      {
        id: "okr-pit-4",
        objetivo: "Estruturar o ecossistema digital com foco em usabilidade e conectividade plena",
        resultadosChave: [
          "Disponibilizar PluralMedApp 100% funcional para médicos",
          "Implantar PluralMed Conecta em 5 municípios",
          "Integrar apps com BI estratégico e ERP"
        ],
        indicadores: {
          percentual: 67,
          status: "success",
          responsavel: "Produto / TI",
          prazo: "Q4 2025"
        },
        projetosVinculados: ["PluralMedApp 2.0", "PluralMed Conecta", "Integra Plural UX"],
        negocioId: 3,
        celulaIds: [16]
      },
      {
        id: "okr-pit-5",
        objetivo: "Fortalecer o core business com processos de excelência e modelo orientado à sustentabilidade",
        resultadosChave: [
          "Estruturar 100% dos processos críticos com protocolos e indicadores",
          "Implantar núcleo de gestão estratégica do Core Business",
          "Modelo de governança e sustentabilidade para expansão dos serviços"
        ],
        indicadores: {
          percentual: 62,
          status: "success",
          responsavel: "Operações / Estratégia",
          prazo: "Q4 2025"
        },
        projetosVinculados: ["Core PluralMed Estratégico", "Plataforma Vituz Total", "Matriz de Sustentabilidade Assistencial"],
        negocioId: 3,
        celulaIds: [3, 16]
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