import { Bell, Download, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import pluralmedLogo from "@/assets/pluralmed-logo.png";

export function Header() {
  return (
    <header className="bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img 
              src={pluralmedLogo} 
              alt="PluralMed" 
              className="h-8 w-auto"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-semibold text-foreground">
                OKRs Estratégicos 2025
              </h1>
              <p className="text-sm text-muted-foreground">
                Plataforma Executiva de Monitoramento
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Export Button */}
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Download className="w-4 h-4 mr-2" />
              Exportar Relatório
            </Button>

            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="w-5 h-5" />
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs flex items-center justify-center"
                  >
                    3
                  </Badge>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel>Notificações</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="py-3">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Meta de Rentabilidade em Risco</p>
                    <p className="text-xs text-muted-foreground">
                      Eixo Econômico-Financeiro precisa de atenção
                    </p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Novo Projeto Aprovado</p>
                    <p className="text-xs text-muted-foreground">
                      Projeto Zero Desperdício iniciado
                    </p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Relatório Mensal Disponível</p>
                    <p className="text-xs text-muted-foreground">
                      Dados de Janeiro/2025 atualizados
                    </p>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Settings */}
            <Button variant="ghost" size="sm">
              <Settings className="w-5 h-5" />
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <User className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Executivo PluralMed</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Perfil</DropdownMenuItem>
                <DropdownMenuItem>Configurações</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Sair</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}