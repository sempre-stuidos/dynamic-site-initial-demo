import Header from '@/components/header'
import InfoBar from '@/components/info-bar'
import Footer from '@/components/footer'
import DynamicSection from '@/components/dynamic-section'
import { getPageBySlug, getPageSections } from '@/lib/pages'
import { validatePreviewToken } from '@/lib/preview'

interface HomeProps {
  searchParams: Promise<{ token?: string; page?: string }>
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams
  const previewToken = params.token
  const pageSlug = params.page || 'home'
  
  // For now, use a default org slug - in production this would come from the domain or config
  const orgSlug = process.env.NEXT_PUBLIC_ORG_SLUG || 'default'
  
  // Get the page
  const page = await getPageBySlug(orgSlug, pageSlug)
  
  // If no page found, show default static content
  if (!page) {
    return (
      <main className="min-h-screen">
        <InfoBar />
        <Header />
        <div className="p-8 text-center">
          <p className="text-muted-foreground">Page not found. Please configure your pages in the dashboard.</p>
        </div>
        <Footer />
      </main>
    )
  }

  // Validate preview token if provided
  let useDraft = false
  if (previewToken) {
    const validation = await validatePreviewToken(previewToken, undefined, page.id)
    useDraft = validation.valid
  }

  // Get sections for this page
  const sections = await getPageSections(page.id, useDraft, previewToken)

  return (
    <main className="min-h-screen">
      <InfoBar />
      <Header />
      {sections.map((section) => (
        <DynamicSection
          key={section.id}
          component={section.component}
          content={section.published_content || {}}
        />
      ))}
      <Footer />
    </main>
  )
}
