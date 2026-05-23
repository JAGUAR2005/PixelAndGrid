import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import Process from './Process'
import React from 'react'

describe('Process Component', () => {
  it('renders section title', () => {
    const { getByText } = render(<Process />)
    expect(getByText('Our')).toBeDefined()
    expect(getByText('process')).toBeDefined()
  })

  it('renders all process steps', () => {
    const { getByText } = render(<Process />)
    expect(getByText('Discovery & Research')).toBeDefined()
    expect(getByText('Structure & Flow')).toBeDefined()
    expect(getByText('Visual Design')).toBeDefined()
    expect(getByText('Handoff & Support')).toBeDefined()
  })

  it('renders step numbers', () => {
    const { getByText } = render(<Process />)
    expect(getByText('01')).toBeDefined()
    expect(getByText('02')).toBeDefined()
    expect(getByText('03')).toBeDefined()
    expect(getByText('04')).toBeDefined()
  })

  it('has a dark background (ink)', () => {
    const { container } = render(<Process />)
    const section = container.firstChild as HTMLElement
    expect(section.className).toContain('bg-ink')
  })
})
