import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MessageCircle, Phone } from "lucide-react";

interface CTAButtonProps {
  variant?: "whatsapp" | "phone" | "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export const CTAButton = ({ 
  variant = "primary", 
  size = "md", 
  children, 
  href, 
  className,
  onClick 
}: CTAButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "whatsapp":
        return "bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl";
      case "phone":
        return "bg-primary hover:bg-primary-dark text-primary-foreground shadow-lg hover:shadow-xl";
      case "secondary":
        return "bg-secondary hover:bg-secondary-dark text-secondary-foreground shadow-lg hover:shadow-xl";
      default:
        return "bg-primary hover:bg-primary-dark text-primary-foreground shadow-lg hover:shadow-xl";
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return "px-4 py-2 text-sm";
      case "lg":
        return "px-8 py-4 text-lg";
      default:
        return "px-6 py-3 text-base";
    }
  };

  const getIcon = () => {
    if (variant === "whatsapp") return <MessageCircle className="w-5 h-5 mr-2" />;
    if (variant === "phone") return <Phone className="w-5 h-5 mr-2" />;
    return null;
  };

  const buttonContent = (
    <Button
      className={
        `font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 
        ${getVariantStyles()} 
        ${getSizeStyles()}
        ${className}`
      }
      onClick={onClick}
    >
      {getIcon()}
      {children}
    </Button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
};