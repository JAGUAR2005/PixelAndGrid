'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Monitor, Globe, Layers, ArrowRight } from 'lucide-react'

const Services = () => {
  const services = [
    {
      num: '01',
      title: 'UI / UX',
      accentWord: 'Design',
      description: 'From wireframe to high-fidelity prototype. We design digital products that users genuinely want to use — reducing friction, increasing completion rates, and turning casual visitors into committed users.',
      tags: ['SaaS Products', 'Mobile Apps', 'Dashboards', 'Prototyping'],
      icon: <Monitor className="w-8 h-8 stroke-[1.2] text-gold-dim transition-colors group-hover:text-gold" />
    },
    {
      num: '02',
      title: 'Web',
      accentWord: 'Experience',
      description: 'Marketing sites, e-commerce storefronts, and editorial portals that represent your brand with the authority it deserves. We design and specify; we also develop using modern React-based stacks when needed.',
      tags: ['Marketing Sites', 'E-commerce', 'Next.js', 'CMS'],
      icon: <Globe className="w-8 h-8 stroke-[1.2] text-gold-dim transition-colors group-hover:text-gold" />
    },
    {
      num: '03',
      title: 'Brand',
      accentWord: 'Identity',
      description: 'Digital-first brand systems that work everywhere — from a 16px favicon to a 16-foot exhibition wall. Logos, colour systems, typography, iconography, and the guidelines that keep it all coherent as you scale.',
      tags: ['Logo Design', 'Design Systems', 'Guidelines', 'Motion Identity'],
      icon: <Layers className="w-8 h-8 stroke-[1.2] text-gold-dim transition-colors group-hover:text-gold" />
    }
  ]

  return (
    <section id="services" className="px-6 lg:px-12 py-24 lg:py-32 bg-cream transition-colors duration-500">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
        <div>
          <div className="text-[0.6rem] tracking-[0.18em] uppercase text-mist font-mono">01 / What we do</div>
          <h2 className="font-display text-[clamp(2rem,3.5vw,3.5rem)] font-light leading-tight mt-3 tracking-tight text-ink">
            Our <em className="italic text-gold-dim">disciplines</em>
          </h2>
        </div>
        <a href="#contact" className="text-[0.65rem] tracking-[0.14em] uppercase flex items-center gap-2.5 text-mist transition-colors hover:text-gold group mb-2">
          Discuss your project
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-ink/10 dark:bg-paper/10 border border-ink/5 dark:border-paper/5 shadow-[0_15px_40px_rgba(0,0,0,0.02)]">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group bg-cream p-8 lg:p-10 relative overflow-hidden transition-all duration-500 hover:bg-paper"
          >
            {/* Sleek Border Glow Accent on Hover */}
            <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 transition-colors duration-500 pointer-events-none rounded-sm" />
            
            {/* Elegant Radial Ambient Glow from the bottom corner */}
            <div 
              className="absolute -bottom-20 -right-20 w-44 h-44 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none blur-3xl"
              style={{ backgroundImage: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)' }}
            />
            
            {/* Fine-line coordinate design detail in background (top-left) */}
            <div className="absolute top-4 left-4 w-4 h-4 opacity-0 group-hover:opacity-10 pointer-events-none transition-all duration-500">
              <div className="absolute top-0 left-0 w-2 h-px bg-gold" />
              <div className="absolute top-0 left-0 h-2 w-px bg-gold" />
            </div>
            
            {/* Slide up/fade border effect from bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
            
            {/* Subtle floating service number in Cormorant display style */}
            <div className="absolute top-10 right-10 font-display text-[4.5rem] font-light text-ink/5 leading-none transition-all duration-700 group-hover:text-gold/10 group-hover:-translate-y-1.5 group-hover:scale-105 pointer-events-none select-none">
              {service.num}
            </div>

            {/* Elevated Icon Micro-animation */}
            <div className="mb-10 flex items-center justify-center w-12 h-12 bg-paper dark:bg-cream border border-ink/5 dark:border-paper/5 rounded-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-105 group-hover:border-gold/20 group-hover:shadow-[0_8px_20px_rgba(175,137,54,0.15)]">
              {service.icon}
            </div>

            {/* Title using Cormorant Display Touches */}
            <h3 className="font-display text-2xl font-light mb-4 leading-tight text-ink group-hover:text-gold transition-colors duration-300">
              {service.title} <br className="hidden sm:inline" />
              <span className="italic font-normal text-gold-dim">{service.accentWord}</span>
            </h3>

            {/* Premium, crisp description text */}
            <p className="text-[0.78rem] text-mist/95 leading-relaxed mb-10 min-h-[72px]">
              {service.description}
            </p>

            {/* Elegant revealing arrow on hover */}
            <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 pointer-events-none hidden lg:block">
              <ArrowRight className="w-5 h-5 text-gold-dim" />
            </div>

            {/* Tag List styled with explicit DM Mono, tiny dots, and responsive accents */}
            <div className="flex flex-wrap gap-2 relative z-10">
              {service.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="text-[0.58rem] tracking-[0.14em] uppercase font-mono border border-ink/10 dark:border-paper/10 px-3 py-1.5 text-mist/90 transition-all duration-300 hover:border-gold/30 hover:text-ink hover:bg-gold/5 inline-flex items-center gap-1.5 rounded-sm"
                >
                  <span className="w-1 h-1 bg-gold/35 rounded-full group-hover:bg-gold transition-colors duration-300" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
