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
      <main className="pt-20">
        <HeroSection />
        <section className="py-32 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
          {/* Bold background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(239,68,68,0.3) 2px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <div className="text-center mb-24">
              <div className="inline-flex items-center px-6 py-3 bg-red-100 border-2 border-red-300 rounded-full text-base font-bold text-red-800 mb-10 shadow-lg">
                <div className="w-3 h-3 bg-red-600 rounded-full mr-4 animate-pulse"></div>
                Industry Challenges
              </div>
              
              <h2 className="text-6xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight mb-10">
                Compliance Delays Cost the Industry{" "}
                <span className="font-black bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent drop-shadow-lg">
                  Billions Each Year
                </span>
              </h2>
              <p className="text-2xl text-slate-700 leading-relaxed max-w-5xl mx-auto font-medium">
                Manual compliance checking creates bottlenecks, errors, and costly delays. Checkitect AI eliminates these pain points with intelligent automation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="text-center group professional-card-hover bg-white rounded-3xl p-8 shadow-xl border-2 border-red-100 hover:border-red-300 transition-all duration-500 hover:shadow-2xl" data-testid="problem-delayed-approvals">
                <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-red-200 border-2 border-red-300 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Delayed Approvals</h3>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">Chronic delays in the permit approval process create project bottlenecks and financial strain.</p>
              </div>
              
              <div className="text-center group professional-card-hover bg-white rounded-3xl p-8 shadow-xl border-2 border-red-100 hover:border-red-300 transition-all duration-500 hover:shadow-2xl" data-testid="problem-human-error">
                <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-red-200 border-2 border-red-300 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Human Error</h3>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">Manual reviews miss critical compliance issues, leading to costly corrections and delays.</p>
              </div>
              
              <div className="text-center group professional-card-hover bg-white rounded-3xl p-8 shadow-xl border-2 border-red-100 hover:border-red-300 transition-all duration-500 hover:shadow-2xl" data-testid="problem-cost-overruns">
                <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-red-200 border-2 border-red-300 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Cost Overruns</h3>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">Compliance failures lead to expensive rework, budget overruns, and project delays.</p>
              </div>
              
              <div className="text-center group professional-card-hover bg-white rounded-3xl p-8 shadow-xl border-2 border-red-100 hover:border-red-300 transition-all duration-500 hover:shadow-2xl" data-testid="problem-resource-strain">
                <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-red-200 border-2 border-red-300 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Regulatory Overload</h3>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">Complex municipal and national construction laws create compliance challenges, increasing error risks and project delays.</p>
              </div>
            </div>
          </div>
        </section>
        <HowItWorks />
        <BenefitsSection />
        
        {/* Product Demo Section */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10">
                <div className="space-y-8">
                  <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-sm font-medium text-slate-300">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                    AI-Powered Compliance Analysis
                  </div>
                  
                  <div className="space-y-6">
                    <h2 className="text-6xl font-light text-white leading-tight tracking-tight">
                      See Checkitect AI in{" "}
                      <span className="font-medium bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
                        Action
                      </span>
                    </h2>
                    <p className="text-xl text-slate-400 leading-relaxed max-w-lg">
                      Experience enterprise-grade architectural compliance verification powered by advanced AI that transforms complex regulations into actionable insights.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="group flex items-start space-x-6">
                    <div className="w-14 h-14 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl flex items-center justify-center group-hover:border-emerald-500/50 transition-all duration-500">
                      <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-white mb-3">Instant Plan Analysis</h3>
                      <p className="text-slate-400 leading-relaxed">Upload architectural drawings and receive comprehensive compliance verification in seconds, eliminating weeks of manual review processes.</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-start space-x-6">
                    <div className="w-14 h-14 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl flex items-center justify-center group-hover:border-blue-500/50 transition-all duration-500">
                      <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-white mb-3">Visual Issue Highlighting</h3>
                      <p className="text-slate-400 leading-relaxed">Precision-targeted visual annotations identify exact compliance violations with detailed explanations and regulatory references.</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-start space-x-6">
                    <div className="w-14 h-14 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl flex items-center justify-center group-hover:border-purple-500/50 transition-all duration-500">
                      <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-white mb-3">Intelligent Recommendations</h3>
                      <p className="text-slate-400 leading-relaxed">AI-powered solutions provide alternative approaches and optimization strategies to resolve compliance issues efficiently.</p>
                    </div>
                  </div>
                </div>
                
              </div>
              
              <div className="relative">
                {/* Professional dashboard mockup */}
                <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/10 demo-dashboard">
                  {/* Dashboard header */}
                  <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-8 py-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center border border-slate-600/50">
                        <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">Compliance Analytics</h3>
                        <p className="text-slate-400 text-sm">Analysis of 11 regulatory requirements</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-light text-white">18%</div>
                      <div className="text-slate-400 text-sm">Overall Compliance</div>
                    </div>
                  </div>
                  
                  {/* Dashboard content */}
                  <div className="p-8 space-y-8">
                    {/* Metrics cards */}
                    <div className="grid grid-cols-4 gap-6">
                      <div className="bg-emerald-50 border border-emerald-200/50 rounded-xl p-6 text-center demo-metric-card" style={{'--delay': '0'} as React.CSSProperties}>
                        <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="text-3xl font-light text-emerald-700 mb-1">2</div>
                        <div className="text-emerald-600 text-sm font-medium">Compliant</div>
                      </div>
                      <div className="bg-red-50 border border-red-200/50 rounded-xl p-6 text-center demo-metric-card" style={{'--delay': '1'} as React.CSSProperties}>
                        <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <div className="text-3xl font-light text-red-700 mb-1">7</div>
                        <div className="text-red-600 text-sm font-medium">Violations</div>
                      </div>
                      <div className="bg-amber-50 border border-amber-200/50 rounded-xl p-6 text-center demo-metric-card" style={{'--delay': '2'} as React.CSSProperties}>
                        <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                        </div>
                        <div className="text-3xl font-light text-amber-700 mb-1">2</div>
                        <div className="text-amber-600 text-sm font-medium">Warnings</div>
                      </div>
                      <div className="bg-slate-50 border border-slate-200/50 rounded-xl p-6 text-center demo-metric-card" style={{'--delay': '3'} as React.CSSProperties}>
                        <div className="w-10 h-10 bg-slate-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <div className="text-3xl font-light text-slate-700 mb-1">11</div>
                        <div className="text-slate-600 text-sm font-medium">Total Checks</div>
                      </div>
                    </div>
                    
                    {/* Charts section */}
                    <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <h4 className="font-medium text-slate-900 text-lg">Compliance Distribution</h4>
                        <div className="relative w-40 h-40 mx-auto">
                          <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 40 40">
                            <circle cx="20" cy="20" r="18" fill="none" stroke="#e2e8f0" strokeWidth="3"/>
                            <circle cx="20" cy="20" r="18" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="113 57" strokeDashoffset="0" className="demo-chart-circle"/>
                            <circle cx="20" cy="20" r="18" fill="none" stroke="#f59e0b" strokeWidth="3" strokeDasharray="113 57" strokeDashoffset="-57" className="demo-chart-circle"/>
                            <circle cx="20" cy="20" r="18" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="113 57" strokeDashoffset="-85" className="demo-chart-circle"/>
                          </svg>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <h4 className="font-medium text-slate-900 text-lg">Compliance by Category</h4>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                              <span className="text-slate-700 font-medium">Violations: 7 (64%)</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                              <span className="text-slate-700 font-medium">Compliant: 2 (18%)</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                              <span className="text-slate-700 font-medium">Warnings: 2 (18%)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Professional play button */}
                <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer demo-play-button">
                  <svg className="w-6 h-6 text-slate-900 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                
                {/* Subtle decorative elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-slate-800/20 rounded-full demo-floating-element"></div>
                <div className="absolute top-1/2 -right-12 w-8 h-8 bg-slate-700/20 rounded-full demo-floating-element" style={{animationDelay: '2s'}}></div>
                <div className="absolute -bottom-12 left-1/3 w-6 h-6 bg-slate-600/20 rounded-full demo-floating-element" style={{animationDelay: '4s'}}></div>
              </div>
            </div>
          </div>
        </section>

        <FutureVision />

        {/* Removed Proven Results section as requested */}

        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
