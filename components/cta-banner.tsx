export default function CTABanner() {
  return (
    <section className="py-24 bg-primary text-primary-foreground text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          Ready to Dine with Us?
        </h2>
        <p className="text-lg md:text-xl mb-10 opacity-95">
          Reserve your table now and prepare for an unforgettable culinary journey
        </p>
        <button className="bg-primary-foreground text-primary px-10 py-4 text-lg font-semibold hover:opacity-90 transition">
          Book Your Reservation
        </button>
      </div>
    </section>
  )
}
