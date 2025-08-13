import { Button } from "@/components/ui/button";
import { FileText, BarChart3, Settings, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-foreground">
                Asistente Inteligente
              </h1>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <FileText className="w-4 h-4 mr-2" />
                Proyectos
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <BarChart3 className="w-4 h-4 mr-2" />
                Análisis
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Settings className="w-4 h-4 mr-2" />
                Configuración
              </Button>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="professional" size="sm">
              <User className="w-4 h-4 mr-2" />
              Iniciar Sesión
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};