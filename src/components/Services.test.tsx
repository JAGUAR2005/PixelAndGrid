import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import Services from './Services'
import React from 'react'

describe('Services Component', () => {
  it('renders all discipline titles', () => {
    const { getByRole } = render(<Services />)
    expect(getByRole('heading', { name: /UI \/ UX Design/i })).toBeDefined()
    expect(getByRole('heading', { name: /Web Experience/i })).toBeDefined()
    expect(getByRole('heading', { name: /Brand Identity/i })).toBeDefined()
  })

  it('renders service numbers', () => {
    const { getByText } = render(<Services />)
    expect(getByText('01')).toBeDefined()
    expect(getByText('02')).toBeDefined()
    expect(getByText('03')).toBeDefined()
  })

  it('renders section header', () => {
    const { getByText } = render(<Services />)
    expect(getByText('01 / What we do')).toBeDefined()
    expect(getByText(/disciplines/i)).toBeDefined()
  })
})
