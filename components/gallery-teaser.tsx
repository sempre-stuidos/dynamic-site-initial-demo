interface GalleryTeaserProps {
  images?: string[]
  ctaLabel?: string
}

export default function GalleryTeaser({ 
  images = [
    "/plated-fine-dining-dish.jpg",
    "/elegant-restaurant-dining-room.jpg",
    "/gourmet-food-presentation.jpg",
  ],
  ctaLabel = "View Full Gallery"
}: GalleryTeaserProps) {

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-center">
          Gallery
        </h2>
        <div className="h-1 w-16 bg-primary mx-auto mb-16"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {images.map((img, idx) => (
            <div key={idx} className="h-80 overflow-hidden rounded-lg shadow-lg group">
              <img 
                src={img || "/placeholder.svg"}
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-primary text-primary-foreground px-8 py-3 hover:opacity-90 transition">
            {ctaLabel}
          </button>
        </div>
      </div>
    </section>
  )
}
