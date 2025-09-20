import { useState, useEffect } from "react";
import { Button } from "./button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
    setActiveSection(sectionId);
  };

  // Handle scroll effect and active section detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Detect active section
      const sections = ['how-it-works', 'benefits', 'future-vision', 'about'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const navItems = [
    { id: 'how-it-works', label: 'How It Works', testId: 'nav-how-it-works' },
    { id: 'benefits', label: 'Benefits', testId: 'nav-benefits' },
    { id: 'future-vision', label: 'Future Vision', testId: 'nav-future-vision' },
    { id: 'about', label: 'About', testId: 'nav-about' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/98 backdrop-blur-xl border-b border-slate-200/60 shadow-lg' 
        : 'bg-white/90 backdrop-blur-lg'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section */}
          <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="relative">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border border-slate-200/50">
                <img 
                  src="/checkitecticon.png" 
                  alt="Checkitect AI" 
                  className="w-12 h-12 object-contain"
                  onError={(e) => {
                    // Fallback to SVG if image fails to load
                    e.currentTarget.style.display = 'none';
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextElement) {
                      nextElement.style.display = 'block';
                    }
                  }}
                />
                <svg className="w-8 h-8 text-blue-600 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-light text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors duration-300">
                Checkitect AI
              </span>
              <span className="text-xs text-slate-500 font-medium tracking-wider uppercase">
                Compliance Intelligence
              </span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center space-x-1 bg-slate-100/80 rounded-2xl p-2 backdrop-blur-sm border border-slate-200/50">
              {navItems.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                  className={`relative px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                  }`}
                  data-testid={item.testId}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                  )}
                </a>
              ))}
            </div>
            
            <div className="flex items-center space-x-4 ml-8">
              <LanguageToggle />
              <Button 
                className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 px-8 py-3 rounded-xl font-semibold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group" 
                data-testid="nav-get-started"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden relative p-3 rounded-xl hover:bg-slate-100/80 transition-all duration-300 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            data-testid="nav-menu-toggle"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
              <span className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div id="mobile-menu" className="lg:hidden border-t border-slate-200/50 bg-white/98 backdrop-blur-xl">
            <div className="px-6 py-8 space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                  className={`block px-4 py-3 rounded-xl font-medium text-base transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-blue-700 bg-blue-50 border border-blue-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                  data-testid={`mobile-${item.testId}`}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center justify-between pt-6 border-t border-slate-200/50">
                <LanguageToggle />
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 px-8 py-3 rounded-xl font-semibold text-sm shadow-xl" 
                  data-testid="mobile-nav-get-started"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function LanguageToggle() {
  const [lang, setLang] = useState<'en' | 'he'>(() => {
    const persisted = typeof window !== 'undefined' ? window.localStorage.getItem('lang') : null;
    return (persisted === 'he' || persisted === 'en') ? (persisted as 'en' | 'he') : 'en';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('lang', lang);
      document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const toggle = () => setLang(prev => prev === 'en' ? 'he' : 'en');

  return (
    <button 
      onClick={toggle} 
      className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 rounded-lg hover:bg-slate-100"
    >
      {lang === 'en' ? 'עברית' : 'English'}
    </button>
  );
}
