interface WhyWeStandProps {
  reasons?: Array<{
    title: string
    description: string
  }>
}

export default function WhyWeStand({ 
  reasons = [
    {
      title: "Seasonal Ingredients",
      description: "We source the finest locally-grown produce, partnering with regional farmers for the freshest offerings each season."
    },
    {
      title: "Expert Preparation",
      description: "Our award-winning chefs bring years of international experience to every plate, crafting dishes that tell a story."
    },
    {
      title: "Refined Ambiance",
      description: "Intimate lighting, carefully curated acoustics, and thoughtful design create the perfect setting for your special occasion."
    }
  ]
}: WhyWeStandProps) {

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-center">
          Why People Love Us
        </h2>
        <div className="h-1 w-16 bg-primary mx-auto mb-16"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reasons.map((reason, idx) => (
            <div key={idx} className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-serif font-bold text-primary">{idx + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
