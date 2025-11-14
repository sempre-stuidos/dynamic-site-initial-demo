interface SpecialtiesProps {
  specialties?: Array<{
    title: string
    description: string
    image?: string
  }>
}

export default function Specialties({ 
  specialties = [
    {
      title: "Breakfast Classics",
      description: "Start your day with our signature morning selections, from delicate pastries to hearty egg preparations.",
      image: "/gourmet-breakfast.png"
    },
    {
      title: "Evening Tasting Menu",
      description: "Our chef's carefully curated multi-course experience, showcasing the best of seasonal cuisine.",
      image: "/fine-dining-tasting-menu-plating.jpg"
    }
  ]
}: SpecialtiesProps) {

  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-16 text-center">
          Our Specialties
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {specialties.map((item, idx) => (
            <div key={idx} className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <img 
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground mb-6">{item.description}</p>
                <button className="text-primary font-semibold hover:text-primary/80 transition">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
