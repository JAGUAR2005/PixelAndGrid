import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import Hero from './Hero'
import React from 'react'

describe('Hero Component', () => {
  it('renders the main heading with italic emphasis', () => {
    const { getByRole, getByText } = render(<Hero />)
    const heading = getByRole('heading', { level: 1 })
    expect(heading.textContent).toContain('We craft')
    expect(heading.textContent).toContain('digital')
    expect(heading.textContent).toContain('presence')
  })

  it('renders the eyebrow label', () => {
    const { getByText } = render(<Hero />)
    expect(getByText(/New Delhi · India/i)).toBeDefined()
  })

  it('renders stats bar items', () => {
    const { getByText } = render(<Hero />)
    expect(getByText('MMXXIV')).toBeDefined()
    expect(getByText('Digital')).toBeDefined()
    expect(getByText('Design Collective')).toBeDefined()
  })

  it('renders call to action buttons', () => {
    const { getByText } = render(<Hero />)
    expect(getByText(/Start a project/i)).toBeDefined()
    expect(getByText(/Our Philosophy/i)).toBeDefined()
  })
})
