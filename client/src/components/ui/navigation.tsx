import { useState, useEffect } from "react";
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

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

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
            <a 
              href="#how-it-works"
              onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}
              className="text-muted-foreground hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none rounded-sm"
              data-testid="nav-how-it-works"
            >
              How It Works
            </a>
            <a 
              href="#benefits"
              onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }}
              className="text-muted-foreground hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none rounded-sm"
              data-testid="nav-benefits"
            >
              Benefits
            </a>
            <a 
              href="#future-vision"
              onClick={(e) => { e.preventDefault(); scrollToSection('future-vision'); }}
              className="text-muted-foreground hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none rounded-sm"
              data-testid="nav-future-vision"
            >
              Future Vision
            </a>
            <a 
              href="#about"
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
              className="text-muted-foreground hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none rounded-sm"
              data-testid="nav-about"
            >
              About
            </a>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90" data-testid="nav-get-started">
              Get Started
            </Button>
          </div>
          <button 
            className="md:hidden p-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none rounded-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            data-testid="nav-menu-toggle"
          >
            <svg className="w-6 h-6 text-foreground" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-border bg-background">
            <div className="px-4 py-2 space-y-2">
              <a 
                href="#how-it-works"
                onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none rounded-sm"
                data-testid="mobile-nav-how-it-works"
              >
                How It Works
              </a>
              <a 
                href="#benefits"
                onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none rounded-sm"
                data-testid="mobile-nav-benefits"
              >
                Benefits
              </a>
              <a 
                href="#future-vision"
                onClick={(e) => { e.preventDefault(); scrollToSection('future-vision'); }}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none rounded-sm"
                data-testid="mobile-nav-future-vision"
              >
                Future Vision
              </a>
              <a 
                href="#about"
                onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none rounded-sm"
                data-testid="mobile-nav-about"
              >
                About
              </a>
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
