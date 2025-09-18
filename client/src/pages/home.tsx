import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import HowItWorks from "@/components/ui/how-it-works";
import BenefitsSection from "@/components/ui/benefits-section";
import FutureVision from "@/components/ui/future-vision";
import AboutSection from "@/components/ui/about-section";
import ContactSection from "@/components/ui/contact-section";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Compliance Delays Cost the Industry{" "}
                <span className="text-gradient">Billions Each Year</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Manual compliance checking creates bottlenecks, errors, and costly delays. Checkitect AI eliminates these pain points with intelligent automation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group" data-testid="problem-delayed-approvals">
                <div className="w-16 h-16 bg-destructive rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-destructive-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Delayed Approvals</h3>
                <p className="text-muted-foreground">Average 6-month delays in permit approval process</p>
              </div>
              
              <div className="text-center group" data-testid="problem-human-error">
                <div className="w-16 h-16 bg-destructive rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-destructive-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Human Error</h3>
                <p className="text-muted-foreground">Manual reviews miss critical compliance issues</p>
              </div>
              
              <div className="text-center group" data-testid="problem-cost-overruns">
                <div className="w-16 h-16 bg-destructive rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-destructive-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Cost Overruns</h3>
                <p className="text-muted-foreground">Compliance failures lead to expensive rework</p>
              </div>
              
              <div className="text-center group" data-testid="problem-resource-strain">
                <div className="w-16 h-16 bg-destructive rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-destructive-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Resource Strain</h3>
                <p className="text-muted-foreground">Overloaded teams struggle with complex regulations</p>
              </div>
            </div>
          </div>
        </section>
        <HowItWorks />
        <BenefitsSection />
        
        {/* Product Demo Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  See Checkitect AI in Action
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Watch how our AI instantly identifies compliance issues and provides actionable recommendations for your building plans.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mr-4">
                      <svg className="w-3 h-3 text-secondary-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-foreground">Instant plan analysis and verification</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mr-4">
                      <svg className="w-3 h-3 text-secondary-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-foreground">Visual highlighting of compliance issues</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mr-4">
                      <svg className="w-3 h-3 text-secondary-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-foreground">Detailed compliance reports with solutions</span>
                  </div>
                </div>
                <button 
                  className="mt-8 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
                  data-testid="button-watch-demo"
                >
                  <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Watch Demo
                </button>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="AI compliance dashboard showing building plan analysis" 
                  className="rounded-2xl shadow-2xl w-full h-auto" 
                />
                <div className="absolute inset-0 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FutureVision />

        {/* Statistics Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Proven Results</h2>
              <p className="text-xl text-muted-foreground">See the impact Checkitect AI delivers for our clients</p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center" data-testid="stat-compliance-accuracy">
                <div className="text-4xl font-bold text-gradient mb-2">97%</div>
                <p className="text-muted-foreground">Compliance Accuracy</p>
              </div>
              <div className="text-center" data-testid="stat-time-reduction">
                <div className="text-4xl font-bold text-gradient mb-2">75%</div>
                <p className="text-muted-foreground">Time Reduction</p>
              </div>
              <div className="text-center" data-testid="stat-cost-savings">
                <div className="text-4xl font-bold text-gradient mb-2">$2M+</div>
                <p className="text-muted-foreground">Cost Savings</p>
              </div>
              <div className="text-center" data-testid="stat-projects-completed">
                <div className="text-4xl font-bold text-gradient mb-2">500+</div>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
            </div>
          </div>
        </section>

        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
