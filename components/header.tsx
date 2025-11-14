import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold text-foreground">
          The Lighthouse
        </Link>
        <nav className="hidden md:flex gap-8 text-sm">
          <Link href="/menu" className="hover:text-primary transition">Full Menu</Link>
          <Link href="/gallery" className="hover:text-primary transition">Gallery</Link>
          <Link href="/contact" className="hover:text-primary transition">Contact</Link>
        </nav>
        <button className="bg-primary text-primary-foreground px-6 py-2 text-sm hover:opacity-90 transition">
          Reserve Table
        </button>
      </div>
    </header>
  )
}
