import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import Marquee from './Marquee'
import React from 'react'

describe('Marquee Component', () => {
  it('renders service labels', () => {
    const { getAllByText } = render(<Marquee />)
    expect(getAllByText('UI / UX Design').length).toBeGreaterThan(0)
    expect(getAllByText('Brand Identity').length).toBeGreaterThan(0)
    expect(getAllByText('Web Experience').length).toBeGreaterThan(0)
  })

  it('renders dot separators', () => {
    const { getAllByText } = render(<Marquee />)
    const dots = getAllByText('·')
    expect(dots.length).toBeGreaterThan(0)
  })

  it('has the correct background color (ink)', () => {
    const { container } = render(<Marquee />)
    const strip = container.firstChild as HTMLElement
    expect(strip.className).toContain('bg-ink')
  })
})
