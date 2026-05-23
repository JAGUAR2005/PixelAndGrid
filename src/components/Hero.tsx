'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'

const Hero = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  }

  return (
    <section id="hero" className="min-h-screen grid grid-cols-1 lg:grid-cols-2 grid-rows-[1fr_auto] px-6 lg:px-12 pb-12 pt-28 gap-0 relative overflow-hidden">
      {/* Background Grid & Ambient Glow Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Radial Ambient Glows */}
        <div 
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[120px] opacity-60 dark:opacity-40" 
          style={{ backgroundImage: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-[10%] right-[-10%] w-[70%] h-[70%] rounded-full blur-[150px] opacity-40 dark:opacity-20" 
          style={{ backgroundImage: 'radial-gradient(circle, var(--gold-dim) 0%, transparent 70%)' }}
        />
        
        {/* Subtle Editorial Grid Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
        
        {/* Large elegant thin-line circular orbital border in the background */}
        <div className="absolute top-[15%] right-[5%] w-[500px] h-[500px] rounded-full border border-gold/15 pointer-events-none opacity-20 hidden lg:block">
          <div className="absolute inset-[30px] rounded-full border border-dashed border-gold/20 animate-[spin_180s_linear_infinite]" />
          <div className="absolute inset-[70px] rounded-full border border-gold/10" />
          <div className="absolute inset-[110px] rounded-full border border-dashed border-gold/5" />
        </div>
      </div>

      {/* Left Column */}
      <div className="flex flex-col justify-end pb-16 relative z-10">
        <motion.div 
          className="flex items-center gap-4 mb-8"
          initial="initial"
          animate="animate"
          variants={{
            animate: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.span 
            className="w-10 h-px bg-gold inline-block"
            variants={fadeUp}
          />
          <motion.span 
            className="text-[0.65rem] tracking-[0.18em] uppercase text-mist font-mono"
            variants={fadeUp}
          >
            New Delhi · India
          </motion.span>
        </motion.div>

        <motion.h1 
          className="font-display text-[clamp(3.5rem,8vw,8rem)] font-light leading-[0.9] tracking-tight mb-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          We craft<br />
          <em className="italic text-gold-dim">digital</em><br />
          presence
        </motion.h1>

        <motion.p 
          className="mt-10 max-w-[36ch] text-lg leading-relaxed text-mist"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          A boutique design studio building brands, products, and experiences that earn attention in a world already saturated with noise.
        </motion.p>

        <motion.div 
          className="mt-12 flex items-center gap-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        >
          <a 
            href="#contact" 
            className="relative bg-ink text-paper px-10 py-4 font-mono text-[0.65rem] tracking-[0.18em] uppercase inline-block overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(175,137,54,0.2)] hover:scale-[1.02] active:scale-[0.98] border border-ink group animate-none"
          >
            {/* Subtle background color slide-up effect */}
            <span className="absolute inset-0 bg-gold translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-paper">
              Start a project
            </span>
          </a>
          <a 
            href="#about" 
            className="relative text-[0.65rem] tracking-[0.14em] uppercase flex items-center gap-2.5 text-mist transition-colors hover:text-gold group py-2"
          >
            <span className="relative">
              Our Philosophy
              <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5 text-gold-dim" />
          </a>
        </motion.div>
      </div>

      {/* Right Column (Visual) */}
      <div className="hidden lg:flex items-end justify-end pb-16 relative z-10">
        <div className="w-[360px] h-[480px] relative">
          {/* Back Decorative Wireframe Frame (Blueprint reference) */}
          <div className="absolute -inset-4 border border-ink/5 dark:border-paper/5 pointer-events-none rounded-sm">
            {/* Crosshair accents on the corners of the blueprint frame */}
            <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-gold/40" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-gold/40" />
            <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-gold/40" />
            <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-gold/40" />
            
            {/* Coordinates */}
            <div className="absolute top-2 left-4 text-[0.45rem] font-mono text-mist/30 tracking-[0.2em]">LAT: 28.6139° N</div>
            <div className="absolute top-2 right-4 text-[0.45rem] font-mono text-mist/30 tracking-[0.2em]">LON: 77.2090° E</div>
          </div>

          {/* Secondary Background Layer for depth */}
          <motion.div 
            className="absolute w-[280px] h-[380px] top-6 right-6 bg-cream/40 dark:bg-cream/20 border border-ink/5 dark:border-paper/5 backdrop-blur-[2px] rounded-sm pointer-events-none"
            animate={{ y: [0, -8, 0], x: [0, -4, 0] }}
            transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, delay: 1 }}
          />

          {/* Featured Visual Element */}
          <motion.div 
            className="absolute w-[280px] h-[380px] top-0 right-0 bg-paper dark:bg-cream border border-ink/10 dark:border-paper/10 flex flex-col justify-between p-8 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.5)] transition-colors duration-500 rounded-sm"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
          >
            {/* Rich Premium Interactive Gradient/Glow inside the card */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/15 via-transparent to-gold-dim/5 opacity-80 pointer-events-none" />
            <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-gold/10 blur-[60px] pointer-events-none" />
            
            {/* Technical Grid/Blueprint sub-overlay inside the card */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none"
                 style={{ 
                   backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
                   backgroundSize: '20px 20px'
                 }} 
            />

            {/* Top Label & Coordinate elements */}
            <div className="relative z-10 flex justify-between items-start w-full">
              <div className="text-[0.55rem] tracking-[0.25em] uppercase text-gold font-mono font-semibold">The Archetype</div>
              <div className="text-[0.55rem] tracking-[0.1em] text-mist/40 font-mono">SYS-v1.09</div>
            </div>

            {/* Bottom Typography Block: Premium Editorial Look */}
            <div className="relative z-10 w-full">
              <div className="w-8 h-px bg-gold/30 mb-4" />
              <div className="font-display text-4xl font-light leading-[1.1] tracking-tight text-ink">
                Purity in<br />
                <span className="font-display italic text-gold-dim font-normal">Restraint.</span>
              </div>
              <div className="mt-4 text-[0.55rem] tracking-[0.15em] uppercase text-mist font-mono">
                Pixel &amp; Grid Studio
              </div>
            </div>
          </motion.div>

          {/* Abstract Gold Floating Orb/Element */}
          <motion.div 
            className="absolute w-28 h-28 bottom-20 -left-12 bg-paper/80 dark:bg-paper/30 backdrop-blur-md border border-gold/20 flex items-center justify-center rounded-full shadow-lg z-20"
            animate={{ y: [0, 12, 0], rotate: 360 }}
            transition={{ 
              y: { duration: 6, ease: "easeInOut", repeat: Infinity },
              rotate: { duration: 25, ease: "linear", repeat: Infinity }
            }}
            whileHover={{ scale: 1.1, borderColor: 'var(--gold)' }}
          >
            <Star className="w-6 h-6 text-gold animate-[pulse_3s_ease-in-out_infinite]" />
            {/* Decorative circular dashes around the floating star */}
            <svg className="absolute inset-[-4px] w-[calc(100%+8px)] h-[calc(100%+8px)] animate-[spin_40s_linear_infinite]" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="var(--gold)" strokeWidth="0.75" strokeDasharray="4 6" opacity="0.3" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        className="col-span-full border-t border-ink/10 dark:border-paper/10 pt-8 flex justify-between items-center relative z-10"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
      >
        <div className="flex gap-20">
          <div>
            <div className="font-display text-[1.8rem] font-light leading-none text-ink">Est.</div>
            <div className="text-[0.6rem] tracking-[0.14em] uppercase text-mist font-mono mt-2">MMXXIV</div>
          </div>
          <div>
            <div className="font-display text-[1.8rem] font-light leading-none italic text-gold">Digital</div>
            <div className="text-[0.6rem] tracking-[0.14em] uppercase text-mist font-mono mt-2">Design Collective</div>
          </div>
        </div>
        
        <div className="flex items-center gap-3 text-[0.6rem] tracking-[0.2em] uppercase text-mist font-mono group">
          <motion.div 
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gold"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </motion.div>
          Scroll to discover
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
