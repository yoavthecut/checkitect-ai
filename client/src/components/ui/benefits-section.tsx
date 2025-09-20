export default function BenefitsSection() {
  const benefits = [
    {
      id: "benefit-time-savings",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Lightning Fast Reviews",
      description: "Accelerate compliance checking with guided, automated analysis that significantly reduces review time.",
      metric: "Much Faster",
      bgColor: "bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700",
      accentColor: "from-emerald-500 to-emerald-600"
    },
    {
      id: "benefit-reduced-error",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Zero Oversights",
      description: "AI assistance surfaces relevant codes and conflicts with clarity, eliminating human error in compliance reviews.",
      metric: "High Accuracy",
      bgColor: "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700",
      accentColor: "from-blue-500 to-blue-600"
    },
    {
      id: "benefit-transparency",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: "Crystal Clear Transparency",
      description: "Clear audit trails and detailed reports for stakeholders and regulators with full compliance documentation.",
      metric: "Fully Traceable",
      bgColor: "bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700",
      accentColor: "from-amber-500 to-amber-600"
    },
    {
      id: "benefit-universal-tool",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Universal Collaboration",
      description: "Architects, developers, planners, and municipal authorities all benefit from unified compliance workflows.",
      metric: "All Stakeholders",
      bgColor: "bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700",
      accentColor: "from-purple-500 to-purple-600"
    },
    {
      id: "benefit-real-time-alternatives",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Smart Alternatives",
      description: "Suggestions for improvements and compliant alternatives, in context, with detailed implementation guidance.",
      metric: "AI-Powered",
      bgColor: "bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700",
      accentColor: "from-emerald-500 to-emerald-600"
    },
    {
      id: "benefit-cost-reduction",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Massive Cost Savings",
      description: "Identify issues early to reduce back-and-forth and delays, saving significant project costs and time.",
      metric: "Less Rework",
      bgColor: "bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700",
      accentColor: "from-amber-500 to-amber-600"
    }
  ];

  return (
    <section id="benefits" className="py-32 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Bold background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(16,185,129,0.2) 2px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-6 py-3 bg-emerald-100 border-2 border-emerald-300 rounded-full text-base font-bold text-emerald-800 mb-10 shadow-lg">
            <div className="w-3 h-3 bg-emerald-600 rounded-full mr-4 animate-pulse"></div>
            Key Benefits
          </div>
          
          <h2 className="text-6xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight mb-10" data-testid="benefits-title">
            Transform Your Workflow with{" "}
            <span className="font-black bg-gradient-to-r from-emerald-600 via-emerald-700 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
              AI-Powered Efficiency
            </span>
          </h2>
          <p className="text-2xl text-slate-700 leading-relaxed max-w-5xl mx-auto font-medium" data-testid="benefits-description">
            Transform your compliance workflow with AI-powered efficiency and accuracy that delivers measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.id}
              className="group relative bg-white border-2 border-slate-200/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-emerald-300/50"
              data-testid={benefit.id}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${benefit.accentColor} rounded-3xl blur opacity-15 group-hover:opacity-25 transition duration-500`}></div>
              
              <div className="relative">
                <div className={`w-24 h-24 ${benefit.bgColor} rounded-3xl flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}>
                  {benefit.icon}
                  <div className="absolute inset-0 bg-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3" data-testid={`${benefit.id}-title`}>
                    {benefit.title}
                  </h3>
                  <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${benefit.accentColor} rounded-full text-sm font-bold text-white shadow-lg`}>
                    {benefit.metric}
                  </div>
                </div>
                
                <p className="text-lg text-slate-700 leading-relaxed font-medium" data-testid={`${benefit.id}-description`}>
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
