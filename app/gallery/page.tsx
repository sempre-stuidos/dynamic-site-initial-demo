import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Gallery | The Lighthouse',
  description: 'Explore our restaurant ambiance and culinary creations',
}

export default function GalleryPage() {
  const galleryImages = [
    {
      id: 1,
      title: 'Main Dining Room',
      description: 'Elegant ambiance with warm lighting and intimate seating',
      image: '/upscale-restaurant-dining-room-with-warm-lighting.jpg'
    },
    {
      id: 2,
      title: 'Signature Dish',
      description: 'Our pan-seared duck breast with seasonal vegetables',
      image: '/gourmet-plated-dish-with-duck-and-vegetables.jpg'
    },
    {
      id: 3,
      title: 'Bar Area',
      description: 'Crafted cocktails and premium wine selection',
      image: '/elegant-restaurant-bar-with-bottles-and-ambient-li.jpg'
    },
    {
      id: 4,
      title: 'Private Dining',
      description: 'Intimate space for special occasions',
      image: '/private-dining-room-elegant-setup.jpg'
    },
    {
      id: 5,
      title: 'Dessert Selection',
      description: 'Handcrafted desserts and pastries',
      image: '/luxury-desserts-plating-presentation.jpg'
    },
    {
      id: 6,
      title: 'Open Kitchen',
      description: 'Watch our chefs craft your meal',
      image: '/open-concept-restaurant-kitchen.jpg'
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="bg-gradient-to-b from-primary/10 to-background py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4 text-center">Gallery</h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Discover the elegance and warmth that defines The Lighthouse experience
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="group overflow-hidden rounded-lg border border-border hover:shadow-lg transition-shadow"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={image.image || "/placeholder.svg"}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 bg-background">
                  <h3 className="text-lg font-serif font-bold text-foreground mb-2">{image.title}</h3>
                  <p className="text-sm text-muted-foreground">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
