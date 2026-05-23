import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import Footer from './Footer'
import React from 'react'

describe('Footer Component', () => {
  it('renders the brand logo', () => {
    const { getAllByText } = render(<Footer />)
    expect(getAllByText(/Pixel/i).length).toBeGreaterThan(0)
    expect(getAllByText(/Grid/i).length).toBeGreaterThan(0)
  })

  it('renders navigation columns', () => {
    const { getByText, getAllByText } = render(<Footer />)
    expect(getByText('Navigate')).toBeDefined()
    expect(getAllByText('Services').length).toBeGreaterThan(0)
    expect(getByText('Legal')).toBeDefined()
  })

  it('renders social links', () => {
    const { getByText } = render(<Footer />)
    expect(getByText('Behance')).toBeDefined()
    expect(getByText('LinkedIn')).toBeDefined()
    expect(getByText('Twitter / X')).toBeDefined()
  })

  it('has a dark background (ink)', () => {
    const { container } = render(<Footer />)
    const footer = container.firstChild as HTMLElement
    expect(footer.className).toContain('bg-ink')
  })
})
