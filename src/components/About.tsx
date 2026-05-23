'use client'

import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const philosophies = [
    {
      title: 'User-First',
      description: 'Every pixel is in service of the person using the product.'
    },
    {
      title: 'Intentional Craft',
      description: 'We reject decoration. Every decision earns its place or it goes.'
    },
    {
      title: 'Contextual Truth',
      description: 'Great design belongs to its context. We listen before we sketch.'
    },
    {
      title: 'Measured Speed',
      description: 'Our process is structured to move quickly without sacrificing quality.'
    }
  ]

  return (
    <section id="about" className="px-6 lg:px-12 py-32 lg:py-48 bg-paper relative transition-colors duration-500">
      <div className="max-w-4xl mx-auto text-center space-y-16">
        
        {/* Refined Headline Section */}
        <div className="space-y-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[0.65rem] tracking-[0.4em] uppercase text-gold font-mono"
          >
            01 — The Studio Archetype
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[1.1] tracking-tight text-ink"
          >
            Design that <em className="italic text-gold-dim">earns</em><br /> 
            unwavering attention.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-mist text-lg lg:text-xl font-light max-w-2xl mx-auto leading-relaxed"
          >
            Pixel & Grid is a boutique digital design studio. We don&apos;t just build interfaces; we craft the silent conversations between your brand and your users.
          </motion.p>
        </div>

        {/* Condensed Graphic Divider */}
        <div className="relative py-4 flex justify-center">
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className="h-[1px] w-full bg-gold/20 absolute top-1/2 left-0"
          />
          <motion.div 
            initial={{ rotate: 0, opacity: 0 }}
            whileInView={{ rotate: 45, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="w-8 h-8 border border-gold/60 bg-paper z-10 relative flex items-center justify-center transition-colors duration-500"
          >
             <div className="w-1 h-1 bg-gold rounded-full" />
          </motion.div>
        </div>

        {/* Clean Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10 text-left pt-6">
          {philosophies.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="space-y-4 group"
            >
              <div className="font-mono text-[0.6rem] text-gold/60 mb-2 tracking-widest uppercase">PHASE_0{index + 1}</div>
              <h3 className="font-display text-lg font-medium text-ink group-hover:text-gold transition-colors">
                {item.title}
              </h3>
              <p className="text-[0.75rem] text-mist leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About
