import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import Home from './page'
import React from 'react'

describe('Home Page', () => {
  it('renders the Hero section', () => {
    const { getByRole } = render(<Home />)
    const heading = getByRole('heading', { level: 1 })
    expect(heading.textContent).toContain('We craft')
  })
})
