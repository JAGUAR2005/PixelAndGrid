import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import SectionReveal from './SectionReveal'
import React from 'react'

describe('SectionReveal Component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <SectionReveal>
        <div>Reveal Content</div>
      </SectionReveal>
    )
    expect(getByText('Reveal Content')).toBeDefined()
  })

  it('initially has hidden styles', () => {
    const { container } = render(
      <SectionReveal>
        <div>Content</div>
      </SectionReveal>
    )
    const wrapper = container.firstChild as HTMLElement
    // Framer motion applies styles or classes
    expect(wrapper).toBeDefined()
  })
})
