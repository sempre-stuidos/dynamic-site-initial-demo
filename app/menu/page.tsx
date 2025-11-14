'use client'

import { useState } from 'react'
import Header from '@/components/header'
import MenuHero from '@/components/menu-hero'
import MenuSection from '@/components/menu-section'
import MenuCTA from '@/components/menu-cta'
import Footer from '@/components/footer'

export default function MenuPage() {
  const [activeMenu, setActiveMenu] = useState<'brunch' | 'dinner'>('brunch')

  return (
    <main className="min-h-screen">
      <Header />
      <MenuHero />
      
      <div className="sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-40 border-b border-border">
        <div className="container max-w-4xl mx-auto px-4 py-6">
          <div className="flex gap-8 justify-center">
            <button
              onClick={() => setActiveMenu('brunch')}
              className={`text-xl font-serif transition-all pb-2 border-b-2 ${
                activeMenu === 'brunch'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-foreground/60 hover:text-foreground'
              }`}
            >
              Brunch Menu
            </button>
            <button
              onClick={() => setActiveMenu('dinner')}
              className={`text-xl font-serif transition-all pb-2 border-b-2 ${
                activeMenu === 'dinner'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-foreground/60 hover:text-foreground'
              }`}
            >
              Dinner Menu
            </button>
          </div>
        </div>
      </div>

      {activeMenu === 'brunch' && (
        <>
          <MenuSection category="Appetizers" items={brunchAppetizers} />
          <MenuSection category="Mains" items={brunchMains} />
          <MenuSection category="Desserts & Pastries" items={brunchDesserts} />
          <MenuSection category="Beverages" items={brunchBeverages} />
        </>
      )}

      {activeMenu === 'dinner' && (
        <>
          <MenuSection category="Appetizers" items={dinnerAppetizers} />
          <MenuSection category="Mains" items={dinnerMains} />
          <MenuSection category="Desserts" items={dinnerDesserts} />
          <MenuSection category="Wine & Beverages" items={dinnerBeverages} />
        </>
      )}

      <MenuCTA />
      <Footer />
    </main>
  )
}

// BRUNCH MENU
const brunchAppetizers = [
  {
    name: "Smoked Salmon Toast",
    description: "House-made sourdough with crème fraîche, capers, and microgreens",
    price: "$16"
  },
  {
    name: "Burrata & Heirloom Tomato",
    description: "Fresh burrata, basil, aged balsamic, crostini",
    price: "$14"
  },
  {
    name: "Charcuterie Board",
    description: "Cured meats, artisan cheeses, pickled vegetables, house jam",
    price: "$24"
  }
]

const brunchMains = [
  {
    name: "Wild Mushroom Omelet",
    description: "Farm-fresh eggs with seasonal mushrooms, herb cream, and crispy potatoes",
    price: "$18"
  },
  {
    name: "Benedictine Royale",
    description: "English muffin, smoked ham, poached eggs, hollandaise sauce",
    price: "$20"
  },
  {
    name: "Pan-Seared Halibut",
    description: "Fresh Atlantic halibut, lemon caper sauce, roasted asparagus, fingerling potatoes",
    price: "$28"
  },
  {
    name: "Herb-Roasted Chicken",
    description: "Half bird with chimichurri, seasonal vegetables, crispy skin",
    price: "$26"
  }
]

const brunchDesserts = [
  {
    name: "Morning Parfait",
    description: "Greek yogurt, seasonal berries, granola, and lavender honey",
    price: "$12"
  },
  {
    name: "Croissant aux Amandes",
    description: "Butter croissant with almond cream and sliced almonds",
    price: "$10"
  },
  {
    name: "Chocolate Hazelnut Crepe",
    description: "House-made crepe with Nutella, fresh berries, whipped cream",
    price: "$13"
  }
]

const brunchBeverages = [
  {
    name: "Fresh Pressed Juices",
    description: "Orange, grapefruit, or seasonal fruit juice blends",
    price: "$8"
  },
  {
    name: "Specialty Coffees",
    description: "Cappuccino, latte, macchiato with single-origin espresso",
    price: "$6-8"
  },
  {
    name: "Brunch Cocktails",
    description: "Mimosas, bellinis, and house specialty brunch drinks",
    price: "$12-16"
  }
]

// DINNER MENU
const dinnerAppetizers = [
  {
    name: "Pan-Seared Scallops",
    description: "Diver scallops with brown butter, microgreens, citrus gastrique",
    price: "$22"
  },
  {
    name: "Beef Carpaccio",
    description: "Thinly sliced prime beef, arugula, shaved parmesan, truffle oil, crostini",
    price: "$20"
  },
  {
    name: "Crispy Oysters",
    description: "Bay oysters, panko crust, remoulade, lemon",
    price: "$18"
  },
  {
    name: "Foie Gras Terrine",
    description: "House-prepared terrine with fig compote and brioche",
    price: "$24"
  }
]

const dinnerMains = [
  {
    name: "Beef Tenderloin",
    description: "Prime beef with truffle mashed potatoes, asparagus, and red wine reduction",
    price: "$48"
  },
  {
    name: "Dover Sole Meunière",
    description: "Whole flounder, brown butter, capers, lemon, seasonal sides",
    price: "$42"
  },
  {
    name: "Duck Breast",
    description: "Seared duck with cherry gastrique, wild rice, and roasted beets",
    price: "$38"
  },
  {
    name: "Lobster Thermidor",
    description: "Maine lobster, Gruyère, cognac sauce, served in the shell with vegetables",
    price: "$52"
  },
  {
    name: "Pan-Seared Branzino",
    description: "Mediterranean white fish with roasted vegetables and lemon beurre blanc",
    price: "$36"
  }
]

const dinnerDesserts = [
  {
    name: "Chocolate Soufflé",
    description: "Dark chocolate soufflé with Grand Marnier, vanilla ice cream",
    price: "$14"
  },
  {
    name: "Crème Brûlée",
    description: "Classic vanilla bean custard with caramelized sugar crust",
    price: "$12"
  },
  {
    name: "Lavender Panna Cotta",
    description: "Silky panna cotta with fresh berries and edible flowers",
    price: "$13"
  },
  {
    name: "Grand Marnier Soufflé Pancake",
    description: "Pillowy soufflé pancake with Grand Marnier, butter, lemon",
    price: "$15"
  }
]

const dinnerBeverages = [
  {
    name: "Wine Selection",
    description: "Curated red and white wines from premium vineyards worldwide",
    price: "From $45 bottle"
  },
  {
    name: "Craft Cocktails",
    description: "House-made bitters and premium spirits in classic and contemporary preparations",
    price: "$16-20"
  },
  {
    name: "Premium Spirits",
    description: "Cognac, single-malt scotch, aged rum, and digestifs",
    price: "$12-18"
  }
]
