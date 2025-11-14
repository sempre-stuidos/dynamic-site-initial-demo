export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">The Lighthouse</h3>
            <p className="opacity-80 text-sm">Premium fine dining experience with seasonal menus and exceptional service.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Mon - Thu: 5PM - 10PM</li>
              <li>Fri - Sat: 5PM - 11PM</li>
              <li>Sunday: 5PM - 9PM</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>+1 (555) 123-4567</li>
              <li>info@thelighthouse.com</li>
              <li>123 Ocean Drive, City</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:text-background transition">Instagram</a></li>
              <li><a href="#" className="hover:text-background transition">Facebook</a></li>
              <li><a href="#" className="hover:text-background transition">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/30 pt-8 text-center text-sm opacity-70">
          <p>&copy; 2025 The Lighthouse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
