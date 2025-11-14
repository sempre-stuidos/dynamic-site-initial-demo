import { createServerSupabaseClient } from './supabase'
import { validatePreviewToken } from './preview'

export interface Page {
  id: string
  org_id: string
  name: string
  slug: string
  template?: string
  status: 'published' | 'dirty' | 'draft'
  created_at: string
  updated_at: string
}

export interface PageSection {
  id: string
  page_id: string
  org_id: string
  key: string
  label: string
  component: string
  position: number
  published_content: Record<string, any>
  draft_content: Record<string, any>
  status: 'published' | 'dirty' | 'draft'
  created_at: string
  updated_at: string
}

/**
 * Get page by slug for an organization
 */
export async function getPageBySlug(
  orgSlug: string,
  pageSlug: string
): Promise<Page | null> {
  try {
    const supabase = await createServerSupabaseClient()
    
    // First get organization by slug
    const { data: org, error: orgError } = await supabase
      .from('organizations')
      .select('id')
      .eq('slug', orgSlug)
      .single()

    if (orgError || !org) {
      return null
    }

    // Then get page by slug for this org
    const { data: page, error: pageError } = await supabase
      .from('pages')
      .select('*')
      .eq('org_id', org.id)
      .eq('slug', pageSlug)
      .single()

    if (pageError || !page) {
      return null
    }

    return page as Page
  } catch (error) {
    console.error('Error in getPageBySlug:', error)
    return null
  }
}

/**
 * Get page sections with preview support
 */
export async function getPageSections(
  pageId: string,
  useDraft: boolean = false,
  previewToken?: string
): Promise<PageSection[]> {
  try {
    const supabase = await createServerSupabaseClient()
    
    // Validate preview token if provided
    let shouldUseDraft = useDraft
    if (previewToken) {
      const validation = await validatePreviewToken(previewToken, undefined, pageId)
      shouldUseDraft = validation.valid
    }

    const { data, error } = await supabase
      .from('page_sections_v2')
      .select('*')
      .eq('page_id', pageId)
      .order('position', { ascending: true })

    if (error) {
      console.error('Error fetching sections:', error)
      return []
    }

    if (!data) {
      return []
    }

    const sections = data as PageSection[]
    
    // If using draft/preview, return sections with draft_content as published_content
    if (shouldUseDraft) {
      return sections.map(section => ({
        ...section,
        published_content: section.draft_content,
      }))
    }

    // Only return published sections for public view
    return sections.filter(s => s.status === 'published')
  } catch (error) {
    console.error('Error in getPageSections:', error)
    return []
  }
}

