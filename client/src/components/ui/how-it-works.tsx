export default function HowItWorks() {
  const steps = [
    {
      id: "step-1",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
      title: "Data Input",
      description: "Upload building plans, CAD files, or architectural drawings directly into our platform",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      id: "step-2", 
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "AI Analysis", 
      description: "Advanced algorithms analyze plans against municipal building codes and regulations",
      bgColor: "bg-gradient-to-br from-emerald-500 to-emerald-600"
    },
    {
      id: "step-3",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Compliance Check",
      description: "Comprehensive verification against safety, zoning, and accessibility standards",
      bgColor: "bg-gradient-to-br from-amber-500 to-amber-600"
    },
    {
      id: "step-4",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Findings Report",
      description: "Detailed compliance report with issues, recommendations, and solutions",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
  ];

  return (
    <section id="how-it-works" className="py-32 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Bold background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59,130,246,0.2) 2px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-6 py-3 bg-blue-100 border-2 border-blue-300 rounded-full text-base font-bold text-blue-800 mb-10 shadow-lg">
            <div className="w-3 h-3 bg-blue-600 rounded-full mr-4 animate-pulse"></div>
            Process Overview
          </div>
          
          <h2 className="text-6xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight mb-10" data-testid="how-it-works-title">
            How Checkitect AI{" "}
            <span className="font-black bg-gradient-to-r from-blue-600 via-blue-700 to-emerald-600 bg-clip-text text-transparent drop-shadow-lg">
              Works
            </span>
          </h2>
          <p className="text-2xl text-slate-700 leading-relaxed max-w-5xl mx-auto font-medium" data-testid="how-it-works-description">
            Our AI-powered platform streamlines the entire compliance verification process in four simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className="text-center group professional-card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={step.id}
            >
              <div className={`w-28 h-28 ${step.bgColor} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:shadow-3xl group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}>
                {step.icon}
                <div className="absolute inset-0 bg-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="bg-white border-2 border-slate-200/50 rounded-3xl p-8 h-72 flex flex-col justify-center shadow-xl group-hover:shadow-2xl group-hover:border-blue-300/50 transition-all duration-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-6" data-testid={`${step.id}-title`}>
                  {step.title}
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed font-medium" data-testid={`${step.id}-description`}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
