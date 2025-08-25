import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import pluralmedLogo from "@/assets/pluralmed-logo.png";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <img 
              src={pluralmedLogo} 
              alt="PluralMed" 
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              Plataforma executiva para monitoramento e avaliação dos OKRs Estratégicos 2025 
              do Grupo PluralMed. Gestão que transforma a saúde pública.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Fortaleza, CE</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mr-2" />
                <span>contato@pluralmed.com.br</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="w-4 h-4 mr-2" />
                <span>(85) 3000-0000</span>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Conecte-se</h3>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © 2025 Grupo PluralMed. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground mt-2 sm:mt-0">
            Plataforma em conformidade com a LGPD
          </p>
        </div>
      </div>
    </footer>
  );
}