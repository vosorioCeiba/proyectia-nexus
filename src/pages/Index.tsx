import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeatureCard } from "@/components/FeatureCard";
import { 
  FileText, 
  Mic, 
  AlertTriangle, 
  Settings, 
  Upload, 
  Brain 
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Mic,
      title: "Transcripción Automática",
      description: "Convierte reuniones y notas de voz en texto estructurado automáticamente.",
      features: [
        "Transcripción en tiempo real",
        "Identificación de puntos clave",
        "Integración con documentos existentes"
      ]
    },
    {
      icon: FileText,
      title: "Generación de Actas",
      description: "Crea actas profesionales automáticamente basadas en reuniones y documentos.",
      features: [
        "Plantillas personalizables",
        "Revisión y aprobación rápida",
        "Integración con Google Drive"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Análisis de Riesgos",
      description: "Identifica y gestiona riesgos proactivamente con planes de contingencia.",
      features: [
        "Detección automática de riesgos",
        "Planes de mitigación",
        "Alertas y monitoreo continuo"
      ]
    },
    {
      icon: Upload,
      title: "Gestión de Documentos",
      description: "Centraliza y organiza toda la documentación del proyecto.",
      features: [
        "Carga de PDFs y audios",
        "Sincronización con Google Drive",
        "Búsqueda inteligente"
      ]
    },
    {
      icon: Settings,
      title: "Configuración Avanzada",
      description: "Personaliza plantillas y configuraciones según tu organización.",
      features: [
        "Plantillas personalizadas",
        "Configuración de rutas",
        "Integraciones flexibles"
      ]
    },
    {
      icon: Brain,
      title: "Inteligencia Artificial",
      description: "IA avanzada para análisis contextual y recomendaciones inteligentes.",
      features: [
        "Análisis contextual",
        "Recomendaciones automáticas",
        "Aprendizaje continuo"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Funcionalidades Principales
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubre cómo nuestro asistente inteligente transforma la gestión de tus proyectos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                features={feature.features}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
