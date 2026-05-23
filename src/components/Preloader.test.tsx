import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, act } from '@testing-library/react';
import Preloader from './Preloader';
import React from 'react';

describe('Preloader Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders correctly with initial progress', () => {
    const { getByText, getByAltText } = render(<Preloader />);
    
    expect(getByText(/Pixel & Grid/i)).toBeDefined();
    expect(getByAltText('Pixel & Grid Logo')).toBeDefined();
    expect(getByText(/EST. MMXXIV/i)).toBeDefined();
    expect(getByText(/LAT: 28.6139° N/i)).toBeDefined();
    expect(getByText(/LON: 77.2090° E/i)).toBeDefined();
  });

  it('progresses to 100% over time', () => {
    const { getByText } = render(<Preloader />);
    
    // Progressive step-by-step timer execution to allow state renders to commit
    for (let i = 0; i < 50; i++) {
      act(() => {
        vi.advanceTimersByTime(50);
      });
    }

    expect(getByText(/100/)).toBeDefined();
  });
});
