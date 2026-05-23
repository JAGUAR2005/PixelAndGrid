import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import Contact from './Contact'
import React from 'react'

describe('Contact Component', () => {
  it('renders section title', () => {
    const { getByText } = render(<Contact />)
    expect(getByText(/Ready to/i)).toBeDefined()
    expect(getByText(/something\?/i)).toBeDefined()
  })

  it('renders contact details', () => {
    const { getAllByText, getByText } = render(<Contact />)
    expect(getAllByText(/Email/i).length).toBeGreaterThan(0)
    expect(getByText('Based in')).toBeDefined()
    expect(getByText(/New Delhi, India/i)).toBeDefined()
  })

  it('renders form inputs', () => {
    const { getByPlaceholderText } = render(<Contact />)
    expect(getByPlaceholderText('Full name')).toBeDefined()
    expect(getByPlaceholderText('Company name')).toBeDefined()
    expect(getByPlaceholderText('your@email.com')).toBeDefined()
  })

  it('renders select dropdowns', () => {
    const { getByText } = render(<Contact />)
    expect(getByText('Select range')).toBeDefined()
    expect(getByText('What are you building?')).toBeDefined()
  })

  it('renders submit button', () => {
    const { getByText } = render(<Contact />)
    expect(getByText('Send enquiry')).toBeDefined()
  })
})
