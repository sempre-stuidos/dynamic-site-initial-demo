interface HeroSectionProps {
  title?: string
  subtitle?: string
  ctaLabel?: string
  imageUrl?: string
}

export default function HeroSection({
  title = "Culinary Excellence",
  subtitle = "Experience an unforgettable evening of refined cuisine and impeccable service",
  ctaLabel = "View Our Menu",
  imageUrl = "/elegant-restaurant-interior.png"
}: HeroSectionProps) {
  return (
    <section className="relative h-96 md:h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-secondary to-background">
      {imageUrl && (
        <div className="absolute inset-0 opacity-10">
          <img 
            src={imageUrl}
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 text-balance">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        {ctaLabel && (
          <button className="bg-primary text-primary-foreground px-8 py-3 text-lg hover:opacity-90 transition">
            {ctaLabel}
          </button>
        )}
      </div>
    </section>
  )
}
