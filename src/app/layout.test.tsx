import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import RootLayout from './layout'
import React from 'react'

describe('RootLayout', () => {
  it('renders children and global components', () => {
    const { getByText, container } = render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>
    )
    
    expect(getByText('Test Child')).toBeDefined()
    // GrainOverlay has svg class
    expect(container.querySelector('.fixed.inset-0')).toBeDefined()
    // CustomCursor
    expect(container.querySelector('.fixed.top-0.left-0')).toBeDefined()
    // NavigationBar and Preloader presence
    expect(container.textContent).toContain('Pixel')
    expect(container.textContent).toContain('&')
    expect(container.textContent).toContain('Grid')
  })
})
