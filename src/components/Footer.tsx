'use client'

import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Studio', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ]

  const serviceLinks = [
    { label: 'UI / UX Design', href: '#services' },
    { label: 'Web Experience', href: '#services' },
    { label: 'Brand Identity', href: '#services' },
    { label: 'Design Systems', href: '#services' }
  ]

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' }
  ]

  const socialLinks = [
    { label: 'Behance', href: '#' },
    { label: 'Dribbble', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Twitter / X', href: '#' }
  ]

  return (
    <footer className="bg-ink dark:bg-black text-paper px-6 lg:px-12 pt-20 pb-10 border-t border-white/5 transition-colors duration-500">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24 pb-16 border-b border-white/5">
        {/* Brand Column */}
        <div className="max-w-xs">
          <div className="font-display text-2xl font-semibold tracking-tighter uppercase mb-4 text-paper">
            Pixel <span className="text-gold">&</span> Grid
          </div>
          <p className="text-[0.7rem] text-white/30 tracking-wider">
            The Digital Designers · New Delhi<br />
            Crafting premium digital experiences since 2024.
          </p>
        </div>

        {/* Nav Grid */}
        <nav aria-label="Footer Navigation" className="grid grid-cols-2 sm:grid-cols-3 gap-16 lg:gap-24">
          <div className="space-y-6">
            <h4 className="text-[0.6rem] tracking-[0.18em] uppercase text-white/20 font-mono">Navigate</h4>
            <ul className="space-y-3 list-none">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[0.75rem] text-white/50 hover:text-gold transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[0.6rem] tracking-[0.18em] uppercase text-white/20 font-mono">Services</h4>
            <ul className="space-y-3 list-none">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[0.75rem] text-white/50 hover:text-gold transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[0.6rem] tracking-[0.18em] uppercase text-white/20 font-mono">Legal</h4>
            <ul className="space-y-3 list-none">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[0.75rem] text-white/50 hover:text-gold transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-8 pt-10">
        <div className="text-[0.6rem] tracking-[0.12em] text-white/20 uppercase font-mono">
          © {currentYear} Pixel & Grid Studio. All rights reserved.
        </div>

        <div className="flex gap-8">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-[0.6rem] tracking-[0.14em] text-white/30 hover:text-gold uppercase font-mono transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
