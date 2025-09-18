export default function BenefitsSection() {
  const benefits = [
    {
      id: "benefit-time-savings",
      icon: (
        <svg className="w-8 h-8 text-secondary-foreground" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: "90% Time Savings",
      description: "Reduce compliance checking time from weeks to hours with automated analysis.",
      checkText: "Instant verification results",
      bgColor: "bg-secondary"
    },
    {
      id: "benefit-reduced-error",
      icon: (
        <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a1 1 0 00-1 1v3a1 1 0 002 0v-3a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      ),
      title: "Reduced Human Error",
      description: "AI-powered analysis eliminates oversight and ensures comprehensive compliance checks.",
      checkText: "99.5% accuracy rate",
      bgColor: "bg-primary"
    },
    {
      id: "benefit-transparency",
      icon: (
        <svg className="w-8 h-8 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
        </svg>
      ),
      title: "Complete Transparency",
      description: "Clear audit trails and detailed reports for all stakeholders and regulators.",
      checkText: "Full documentation",
      bgColor: "bg-accent"
    },
    {
      id: "benefit-universal-tool",
      icon: (
        <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
      title: "Tool for All Stakeholders",
      description: "Serves architects, developers, planners, and municipal authorities equally.",
      checkText: "Universal compatibility",
      bgColor: "bg-primary"
    },
    {
      id: "benefit-real-time-alternatives",
      icon: (
        <svg className="w-8 h-8 text-secondary-foreground" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      title: "Real-time Alternatives",
      description: "Instant suggestions for compliance improvements and alternative solutions.",
      checkText: "Smart recommendations",
      bgColor: "bg-secondary"
    },
    {
      id: "benefit-cost-reduction",
      icon: (
        <svg className="w-8 h-8 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
        </svg>
      ),
      title: "Cost Reduction",
      description: "Eliminate expensive rework and delays with early compliance detection.",
      checkText: "Up to 60% cost savings",
      bgColor: "bg-accent"
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="benefits-title">Key Benefits</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="benefits-description">
            Transform your compliance workflow with AI-powered efficiency and accuracy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id}
              className="feature-card bg-card border border-border rounded-xl p-8"
              data-testid={benefit.id}
            >
              <div className={`w-16 h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4" data-testid={`${benefit.id}-title`}>
                {benefit.title}
              </h3>
              <p className="text-muted-foreground mb-6" data-testid={`${benefit.id}-description`}>
                {benefit.description}
              </p>
              <div className="flex items-center text-secondary">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium" data-testid={`${benefit.id}-check`}>
                  {benefit.checkText}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
