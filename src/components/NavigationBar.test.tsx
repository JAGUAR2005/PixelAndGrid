import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import NavigationBar from './NavigationBar'
import React from 'react'

describe('NavigationBar', () => {
  it('renders correctly', () => {
    const { getByText, container } = render(<NavigationBar />)
    expect(getByText(/Pixel/i)).toBeDefined()
    expect(getByText(/&/i)).toBeDefined()
    expect(getByText(/Grid/i)).toBeDefined()
    expect(getByText('Contact')).toBeDefined()
    
    // Check for island style
    const nav = container.querySelector('nav')
    expect(nav?.className).toContain('rounded-full')
  })
})
