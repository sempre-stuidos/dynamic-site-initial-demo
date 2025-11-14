import InfoBar from './info-bar'
import HeroSection from './hero-section'
import WhyWeStand from './why-we-stand'
import Specialties from './specialties'
import GalleryTeaser from './gallery-teaser'
import CTABanner from './cta-banner'

interface DynamicSectionProps {
  component: string
  content: Record<string, any>
}

export default function DynamicSection({ component, content }: DynamicSectionProps) {
  switch (component) {
    case 'InfoBar':
      return <InfoBar hours={content.hours} phone={content.phone} tagline={content.tagline} />
    
    case 'HeroWelcome':
    case 'HeroSection':
      return (
        <HeroSection
          title={content.title}
          subtitle={content.subtitle}
          ctaLabel={content.ctaLabel}
          imageUrl={content.imageUrl}
        />
      )
    
    case 'WhyWeStand':
      return <WhyWeStand reasons={content.reasons} />
    
    case 'Specialties':
    case 'PromoCard':
      return <Specialties specialties={content.specialties || content.items} />
    
    case 'GalleryTeaser':
      return <GalleryTeaser />
    
    case 'CTABanner':
      return <CTABanner />
    
    default:
      return (
        <div className="p-4 border rounded-lg">
          <p className="text-muted-foreground">Component {component} not found</p>
        </div>
      )
  }
}

