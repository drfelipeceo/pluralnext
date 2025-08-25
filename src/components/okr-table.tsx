import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Calendar, User, Target, FileText } from "lucide-react";
import { OKR } from "@/data/okr-data";
import { negocioIdToNome, celulaIdToSigla } from "@/data/organization";

interface OKRTableProps {
  okrs: OKR[];
  title: string;
}

export function OKRTable({ okrs, title }: OKRTableProps) {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="w-5 h-5 text-primary" />
          {title} - Tabela de OKRs
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[200px]">Objetivo</TableHead>
                <TableHead className="min-w-[300px]">Resultados-Chave</TableHead>
                <TableHead className="min-w-[150px]">Indicadores</TableHead>
                <TableHead className="min-w-[200px]">Projetos Vinculados</TableHead>
                <TableHead className="min-w-[220px]">Organização</TableHead>
                <TableHead className="min-w-[100px]">Status</TableHead>
                <TableHead className="min-w-[120px]">Responsável</TableHead>
                <TableHead className="min-w-[100px]">Prazo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {okrs.map((okr) => (
                <TableRow key={okr.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">
                    <div className="max-w-[200px]">
                      <p className="font-semibold text-foreground leading-tight">
                        {okr.objetivo}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1 max-w-[300px]">
                      {okr.resultadosChave.map((kr, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {kr}
                          </span>
                        </div>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="text-2xl font-bold text-foreground">
                          {okr.indicadores.percentual}%
                        </div>
                        <StatusIndicator 
                          status={okr.indicadores.status} 
                          size="md" 
                        />
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Concluído
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1 max-w-[200px]">
                      {okr.projetosVinculados.map((projeto, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {projeto}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1 max-w-[240px]">
                      {okr.negocioId && (
                        <Badge variant="outline" className="w-fit text-xs">
                          Negócio: {negocioIdToNome.get(okr.negocioId) || okr.negocioId}
                        </Badge>
                      )}
                      {okr.celulaIds && okr.celulaIds.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {okr.celulaIds.map((id) => (
                            <Badge key={id} variant="secondary" className="text-xs">
                              {celulaIdToSigla.get(id) || id}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        okr.indicadores.status === "success" ? "default" :
                        okr.indicadores.status === "warning" ? "secondary" : 
                        "destructive"
                      }
                      className="capitalize"
                    >
                      {okr.indicadores.status === "success" ? "No Prazo" :
                       okr.indicadores.status === "warning" ? "Atenção" : 
                       "Atrasado"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {okr.indicadores.responsavel}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {okr.indicadores.prazo}
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
          <div className="text-sm text-muted-foreground">
            {okrs.length} OKRs • {okrs.reduce((acc, okr) => acc + okr.projetosVinculados.length, 0)} projetos vinculados
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <FileText className="w-4 h-4" />
            Exportar Relatório
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}