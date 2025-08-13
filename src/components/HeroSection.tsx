import { Button } from "@/components/ui/button";
import { PlayCircle, ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Gestión Inteligente
          <br />
          <span className="text-blue-100">de Proyectos</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Automatiza la documentación, análisis de riesgos y generación de actas. 
          Centraliza toda la información de tus proyectos en una sola plataforma.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-3">
            Comenzar Ahora
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-white/10 border-white/30 text-white hover:bg-white/20">
            <PlayCircle className="w-5 h-5 mr-2" />
            Ver Demo
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold">85%</div>
            <div className="text-blue-100">Reducción en tiempo de documentación</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold">100%</div>
            <div className="text-blue-100">Automatización de actas</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold">50%</div>
            <div className="text-blue-100">Mejora en gestión de riesgos</div>
          </div>
        </div>
      </div>
    </section>
  );
};