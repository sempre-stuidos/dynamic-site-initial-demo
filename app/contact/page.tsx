import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Contact | The Lighthouse',
  description: 'Get in touch with The Lighthouse',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="bg-gradient-to-b from-primary/10 to-background py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4 text-center">Contact Us</h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for reservations or inquiries.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    1847 Harbor Lane<br />
                    Coastal Cove, CA 90210
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Phone</h3>
                  <a href="tel:+1-555-0147" className="text-primary hover:underline">
                    +1 (555) 0147
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Email</h3>
                  <a href="mailto:hello@thelighthouse.com" className="text-primary hover:underline">
                    hello@thelighthouse.com
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Thursday: 5:00 PM - 11:00 PM<br />
                    Friday - Saturday: 5:00 PM - 12:00 AM<br />
                    Sunday: 5:00 PM - 10:00 PM<br />
                    <span className="font-semibold">Closed Mondays (Brunch)</span>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="text-primary hover:text-primary/80 transition">Instagram</a>
                    <a href="#" className="text-primary hover:text-primary/80 transition">Facebook</a>
                    <a href="#" className="text-primary hover:text-primary/80 transition">Twitter</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8">Send us a Message</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Your message..."
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
