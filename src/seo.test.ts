import { describe, it, expect } from 'vitest'
import { metadata } from './app/layout'
import sitemap from './app/sitemap'
import robots from './app/robots'

describe('SEO Metadata', () => {
  it('has the correct title', () => {
    expect(metadata.title).toBe('Pixel & Grid — The Digital Designers')
  })

  it('has a descriptive meta description', () => {
    expect(metadata.description).toContain('Boutique digital design studio')
    expect(metadata.description).toContain('UI/UX')
  })
})

describe('Sitemap Generator', () => {
  it('generates a valid sitemap array with proper fields', () => {
    const res = sitemap()
    expect(res).toBeInstanceOf(Array)
    expect(res[0].url).toBe('https://pixelandgrid.studio')
    expect(res[0].changeFrequency).toBe('weekly')
    expect(res[0].priority).toBe(1.0)
  })
})

describe('Robots Generator', () => {
  it('generates correct crawler rules and references sitemap', () => {
    const res = robots()
    expect(res.rules).toEqual({
      userAgent: '*',
      allow: '/',
    })
    expect(res.sitemap).toBe('https://pixelandgrid.studio/sitemap.xml')
  })
})
