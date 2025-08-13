import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const FeatureCard = ({ icon: Icon, title, description, features }: FeatureCardProps) => {
  return (
    <Card className="p-6 bg-gradient-card border-border shadow-card hover:shadow-feature transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>
      
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button variant="outline" className="w-full">
        Explorar módulo
      </Button>
    </Card>
  );
};