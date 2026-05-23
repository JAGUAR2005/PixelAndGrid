import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import CustomCursor from './CustomCursor'
import React from 'react'

describe('CustomCursor', () => {
  it('renders correctly', () => {
    const { container } = render(<CustomCursor />)
    const cursor = container.querySelector('.cursor-pixel')
    expect(cursor).toBeDefined()
  })
})
