export default function MenuCTA() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
          Special Dietary Requirements?
        </h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Please let us know about allergies or dietary preferences when making your reservation
        </p>
        <button className="bg-primary text-primary-foreground px-8 py-3 hover:opacity-90 transition">
          Contact Us
        </button>
      </div>
    </section>
  )
}
