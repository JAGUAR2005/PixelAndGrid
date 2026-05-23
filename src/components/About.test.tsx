import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import About from './About'
import React from 'react'

describe('About Component', () => {
  it('renders section title', () => {
    const { getByText } = render(<About />)
    expect(getByText(/Design that/i)).toBeDefined()
    expect(getByText(/attention/i)).toBeDefined()
  })

  it('renders studio philosophy items', () => {
    const { getByText } = render(<About />)
    expect(getByText('User-First')).toBeDefined()
    expect(getByText('Intentional Craft')).toBeDefined()
  })

  it('renders the section number', () => {
    const { getByText } = render(<About />)
    expect(getByText('01 — The Studio Archetype')).toBeDefined()
  })
})
