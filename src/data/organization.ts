import { z } from "zod";

// Tipos
export interface Negocio {
  id: number;
  nome: string;
  descricao: string;
}

export interface Celula {
  id: number;
  sigla: string;
  nome: string;
  descricao: string;
}

// Schemas de validação
export const NegocioSchema = z.object({
  id: z.number().int().positive(),
  nome: z.string().min(1),
  descricao: z.string().min(1),
});

export const CelulaSchema = z.object({
  id: z.number().int().positive(),
  sigla: z.string().min(1),
  nome: z.string().min(1),
  descricao: z.string().min(1),
});

export const OrganizacaoSchema = z.object({
  negocios: z.array(NegocioSchema).min(1),
  celulas: z.array(CelulaSchema).min(1),
});

// Dados
export const negocios: Negocio[] = [
  { id: 1, nome: "Gestão de Escalas Médicas", descricao: "Planejamento e gestão de escalas médicas." },
  { id: 2, nome: "Gestão Integral da Saúde", descricao: "Gestão integrada de serviços de saúde." },
  { id: 3, nome: "Tecnologia e Inovação em Saúde", descricao: "Soluções tecnológicas e inovação para saúde." },
  { id: 4, nome: "Gestão de Especialidades Médicas", descricao: "Coordenação de especialidades e linhas de cuidado." },
  { id: 5, nome: "Educação Permanente e Continuada em Saúde", descricao: "Formação e atualização contínua de profissionais." },
  { id: 6, nome: "PrimeTech", descricao: "Engenharia especializada em saúde (Clínica, Mecânica, Elétrica, Ambiental, Treinamentos)." },
];

export const celulas: Celula[] = [
  { id: 1, sigla: "PD&I", nome: "Pesquisa, Desenvolvimento e Inovação", descricao: "Inovação e P&D." },
  { id: 2, sigla: "GEC", nome: "Gestão de Experiência do Cliente e Marketing Estratégico", descricao: "Experiência do cliente e marketing." },
  { id: 3, sigla: "CORE", nome: "Departamento Assistencial", descricao: "Núcleo assistencial." },
  { id: 4, sigla: "CORE", nome: "Departamento Administrativo", descricao: "Núcleo administrativo." },
  { id: 5, sigla: "GRGC", nome: "Gestão de Riscos, Governança e Compliance", descricao: "Riscos e compliance." },
  { id: 6, sigla: "Alta Gestão", nome: "Alta Gestão", descricao: "Diretoria e conselho." },
  { id: 7, sigla: "GMC", nome: "Gestão de Melhoria Contínua", descricao: "Excelência operacional." },
  { id: 8, sigla: "GEF", nome: "Gestão Econômica – Financeiro", descricao: "Finanças e controladoria." },
  { id: 9, sigla: "DHO", nome: "Desenvolvimento Humano e Organizacional", descricao: "Gestão de pessoas." },
  { id: 10, sigla: "CLI", nome: "Centro de Logística Integrada", descricao: "Logística e cadeia de suprimentos." },
  { id: 11, sigla: "CCS", nome: "Centro de Compras e Suprimento", descricao: "Compras e suprimentos." },
  { id: 12, sigla: "GEP", nome: "Gestão de Ensino e Pesquisa", descricao: "Ensino e pesquisa." },
  { id: 13, sigla: "EGV", nome: "Escritório de Geração de Valor", descricao: "Análise e captura de valor." },
  { id: 14, sigla: "RI", nome: "Relações Institucionais", descricao: "Relacionamento institucional." },
  { id: 15, sigla: "SND", nome: "Serviço de Nutrição e Dietética", descricao: "Nutrição e dietética." },
  { id: 16, sigla: "GTI", nome: "Gestão de Tecnologia e Inovação", descricao: "Gestão de TI e inovação." },
  { id: 17, sigla: "GI", nome: "Gestão da Inteligência", descricao: "Inteligência e analytics." },
  { id: 18, sigla: "GC", nome: "Gestão do Conhecimento", descricao: "Gestão do conhecimento organizacional." },
  { id: 19, sigla: "NSM", nome: "Núcleo de Saúde Mental", descricao: "Saúde mental." },
  { id: 20, sigla: "ESG", nome: "Gestão Ambiental, Social e Governança", descricao: "Agenda ESG." },
];

// Validação em tempo de carga (fail-fast em ambientes que suportam throw)
OrganizacaoSchema.parse({ negocios, celulas });

// Helpers
export const celulaIdToSigla = new Map<number, string>(celulas.map(c => [c.id, c.sigla]));
export const negocioIdToNome = new Map<number, string>(negocios.map(n => [n.id, n.nome]));


