export default function AboutSection() {
  const teamFeatures = [
    {
      id: "team-expert",
      icon: (
        <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      ),
      title: "Expert Team"
    },
    {
      id: "team-recognition",
      icon: (
        <svg className="w-6 h-6 text-secondary-foreground" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Industry Recognition"
    },
    {
      id: "team-partners",
      icon: (
        <svg className="w-6 h-6 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      ),
      title: "Trusted Partners"
    }
  ];

  return (
    <section id="about" className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6" data-testid="about-title">
              About Checkitect AI
            </h2>
            <p className="text-xl text-muted-foreground mb-6" data-testid="about-intro">
              Checkitect AI was founded by a team of Reichman University students with specialized expertise in Law and Business Administration, bringing together deep technical knowledge and regulatory understanding to revolutionize compliance processes.
            </p>
            <p className="text-muted-foreground mb-8" data-testid="about-description">
              Our interdisciplinary approach combines advanced software engineering capabilities with comprehensive legal expertise, enabling us to develop intelligent solutions that address the complex challenges of building compliance and municipal regulatory frameworks.
            </p>
            
            <div className="space-y-4">
              {teamFeatures.map((feature) => (
                <div key={feature.id} className="flex items-center" data-testid={feature.id}>
                  <div className={`w-12 h-12 ${feature.id.includes('expert') ? 'bg-primary' : feature.id.includes('recognition') ? 'bg-secondary' : 'bg-accent'} rounded-full flex items-center justify-center mr-4`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground" data-testid={`${feature.id}-title`}>
                      {feature.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional team reviewing urban planning documents and blueprints" 
              className="rounded-2xl shadow-xl w-full h-auto"
              data-testid="about-team-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
