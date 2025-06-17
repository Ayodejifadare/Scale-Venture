import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">LaunchForge</h1>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-slate-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('solutions')}
                className="text-slate-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-slate-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('case-studies')}
                className="text-slate-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Case Studies
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-white hover:bg-secondary-brand"
              >
                Get Started
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-slate-600 hover:text-primary block px-3 py-2 text-base font-medium transition-colors w-full text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('solutions')}
                className="text-slate-600 hover:text-primary block px-3 py-2 text-base font-medium transition-colors w-full text-left"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-slate-600 hover:text-primary block px-3 py-2 text-base font-medium transition-colors w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('case-studies')}
                className="text-slate-600 hover:text-primary block px-3 py-2 text-base font-medium transition-colors w-full text-left"
              >
                Case Studies
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-white hover:bg-secondary-brand w-full mt-2"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
