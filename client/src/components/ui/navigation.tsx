import { useState } from "react";
import { Button } from "./button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 3a1 1 0 011-1h6a1 1 0 010 2H7a1 1 0 01-1-1zm1 3a1 1 0 000 2h6a1 1 0 000-2H7z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xl font-bold text-foreground">Checkitect AI</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-how-it-works"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-benefits"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('future-vision')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-future-vision"
            >
              Future Vision
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90" data-testid="nav-get-started">
              Get Started
            </Button>
          </div>
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="nav-menu-toggle"
          >
            <svg className="w-6 h-6 text-foreground" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-4 py-2 space-y-2">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
                data-testid="mobile-nav-how-it-works"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('benefits')}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
                data-testid="mobile-nav-benefits"
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection('future-vision')}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
                data-testid="mobile-nav-future-vision"
              >
                Future Vision
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-2" data-testid="mobile-nav-get-started">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
