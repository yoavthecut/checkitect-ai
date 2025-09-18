export default function HowItWorks() {
  const steps = [
    {
      id: "step-1",
      icon: (
        <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      ),
      title: "Data Input",
      description: "Upload building plans, CAD files, or architectural drawings directly into our platform",
      bgColor: "bg-primary"
    },
    {
      id: "step-2", 
      icon: (
        <svg className="w-8 h-8 text-secondary-foreground" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
        </svg>
      ),
      title: "AI Analysis", 
      description: "Advanced algorithms analyze plans against municipal building codes and regulations",
      bgColor: "bg-secondary"
    },
    {
      id: "step-3",
      icon: (
        <svg className="w-8 h-8 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Compliance Check",
      description: "Comprehensive verification against safety, zoning, and accessibility standards",
      bgColor: "bg-accent"
    },
    {
      id: "step-4",
      icon: (
        <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
      ),
      title: "Findings Report",
      description: "Detailed compliance report with issues, recommendations, and solutions",
      bgColor: "bg-primary"
    },
    {
      id: "step-5",
      icon: (
        <svg className="w-8 h-8 text-secondary-foreground" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
        </svg>
      ),
      title: "Continuous Updates",
      description: "Real-time monitoring of regulation changes and automatic compliance updates", 
      bgColor: "bg-secondary"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="how-it-works-title">How Checkitect AI Works</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="how-it-works-description">
            Our AI-powered platform streamlines the entire compliance verification process in five simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-4">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className="process-step text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={step.id}
            >
              <div className={`w-20 h-20 ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                {step.icon}
              </div>
              <div className="bg-card border border-border rounded-xl p-6 h-48 flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-foreground mb-3" data-testid={`${step.id}-title`}>
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm" data-testid={`${step.id}-description`}>
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
