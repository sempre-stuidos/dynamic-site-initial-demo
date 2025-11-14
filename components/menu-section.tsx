interface MenuItem {
  name: string
  description: string
  price: string
}

interface MenuSectionProps {
  category: string
  items: MenuItem[]
}

export default function MenuSection({ category, items }: MenuSectionProps) {
  return (
    <section className="py-16 bg-background border-b border-border">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-foreground mb-12 text-center">
          {category}
        </h2>
        
        <div className="space-y-8">
          {items.map((item, idx) => (
            <div key={idx} className="pb-8 border-b border-border last:border-b-0">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-foreground">{item.name}</h3>
                <span className="text-lg font-semibold text-primary ml-4 flex-shrink-0">{item.price}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
