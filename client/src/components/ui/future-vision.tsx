export default function FutureVision() {
  const features = [
    {
      id: "future-automatic-alternatives",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      title: "Automatic Design Alternatives",
      description: "AI will generate compliant design alternatives automatically when issues are detected, saving architects hours of rework.",
      gradient: "bg-gradient-to-br from-primary to-secondary"
    },
    {
      id: "future-3d-simulations",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "3D Simulations",
      description: "Advanced 3D modeling and simulation capabilities to test compliance scenarios before construction begins.",
      gradient: "bg-gradient-to-br from-secondary to-accent"
    },
    {
      id: "future-decision-support",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
      title: "Committee Decision Support",
      description: "AI-powered insights and recommendations to support planning committee decisions with data-driven analysis.",
      gradient: "bg-gradient-to-br from-accent to-primary"
    }
  ];

  return (
    <section id="future-vision" className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="future-vision-title">
            Our Language Models and Knowledge Graph
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="future-vision-description">
            We combine domain-tuned language models with a regulation database and a structured knowledge graph to interpret plans, map rules, and explain outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className={`bg-card border border-border rounded-xl p-8 text-center ${feature.id === 'future-3d-simulations' ? 'relative' : ''}`}
              data-testid={feature.id}
            >
              {/* Coming in the Future Badge - Only for 3D Simulations */}
              {feature.id === 'future-3d-simulations' && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                    Coming in the Future
                  </div>
                </div>
              )}
              
              <div className={`w-20 h-20 ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4" data-testid={`${feature.id}-title`}>
                {feature.title}
              </h3>
              <p className="text-muted-foreground" data-testid={`${feature.id}-description`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div 
            className="inline-flex items-center bg-primary/10 text-primary px-6 py-3 rounded-full"
            data-testid="future-vision-timeline"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Coming in late 2025 - 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
