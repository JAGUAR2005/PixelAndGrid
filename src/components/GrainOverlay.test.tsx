import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import GrainOverlay from './GrainOverlay'
import React from 'react'

describe('GrainOverlay', () => {
  it('renders correctly', () => {
    const { container } = render(<GrainOverlay />)
    const svg = container.querySelector('svg')
    expect(svg).toBeDefined()
    expect(container.firstChild).toHaveClass('fixed')
  })
})
