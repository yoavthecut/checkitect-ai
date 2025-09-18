import { Button } from "./button";

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6" data-testid="hero-headline">
              Automated AI Compliance for{" "}
              <span className="text-white/90">Urban Planning</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed" data-testid="hero-subheading">
              Checkitect AI helps architects, developers, and municipalities verify building plans against regulations — faster, smarter, and error-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-accent text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent/90 transition-colors"
                data-testid="button-get-started"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Get Started
              </Button>
              <Button 
                className="bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20"
                data-testid="button-request-demo"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Request Demo
              </Button>
            </div>
          </div>
          <div className="relative animate-float">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern office building with glass facade" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
              data-testid="hero-image"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg" data-testid="hero-stats-card">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-secondary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground" data-testid="stat-compliance-rate">97% Compliance Rate</p>
                  <p className="text-sm text-muted-foreground" data-testid="stat-verification-type">Automated Verification</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
