import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Coffee, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center group-hover:bg-forest-light transition-colors duration-300">
              <Coffee className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl lg:text-2xl font-semibold text-foreground">
              Chillax Cafe
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium">
              Menu
            </a>
            <a href="#location" className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium">
              Find Us
            </a>
            <a href="#signup" className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium">
              Join Us
            </a>
            <Button variant="hero" size="default">
              Order for Pickup
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2">
                Menu
              </a>
              <a href="#location" className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2">
                Find Us
              </a>
              <a href="#signup" className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2">
                Join Us
              </a>
              <Button variant="hero" size="lg" className="w-full mt-2">
                Order for Pickup
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
