import { Button } from "./button";

export default function HeroSection() {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>
      
      {/* Professional gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-slate-900/50 via-transparent to-slate-900/30"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-sm font-medium text-slate-300">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                Enterprise AI Compliance Platform
              </div>
              
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight" data-testid="hero-headline">
                  Automated AI Compliance for{" "}
                  <span className="font-medium bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
                    Urban Planning
                  </span>
                </h1>
                <p className="text-xl text-slate-400 leading-relaxed max-w-lg" data-testid="hero-subheading">
                  Checkitect AI helps architects, developers, and municipalities verify building plans against regulations — faster, smarter, and error-free.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="group bg-white text-slate-900 px-8 py-4 rounded-lg text-lg font-medium hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                data-testid="button-get-started"
              >
                <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Get Started
              </Button>
              <Button 
                className="bg-slate-800/50 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-slate-800/70 transition-all duration-300 border border-slate-700/50 hover:border-slate-600/50"
                data-testid="button-request-demo"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Request Demo
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern office building with glass facade" 
                className="w-full h-auto" 
                data-testid="hero-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </div>
            
            {/* Subtle decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-slate-800/20 rounded-full demo-floating-element"></div>
            <div className="absolute top-1/2 -right-12 w-8 h-8 bg-slate-700/20 rounded-full demo-floating-element" style={{animationDelay: '2s'}}></div>
            <div className="absolute -bottom-12 left-1/3 w-6 h-6 bg-slate-600/20 rounded-full demo-floating-element" style={{animationDelay: '4s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
