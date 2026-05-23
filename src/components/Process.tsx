'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Map, Palette, Activity } from 'lucide-react'

const Process = () => {
  const steps = [
    {
      num: '01',
      name: 'Discovery & Research',
      desc: 'We audit your existing presence, interview your users, and map your competitive landscape. Every assumption is interrogated. We don\'t design in the dark.',
      duration: 'Week 1–2',
      icon: <BookOpen className="w-7 h-7 stroke-[1.2] text-gold" />
    },
    {
      num: '02',
      name: 'Structure & Flow',
      desc: 'Information architecture, user journey mapping, and low-fidelity wireframes. We establish how the experience flows before we establish how it looks.',
      duration: 'Week 2–3',
      icon: <Map className="w-7 h-7 stroke-[1.2] text-gold" />
    },
    {
      num: '03',
      name: 'Visual Design',
      desc: 'High-fidelity mockups, colour systems, typography scales, component libraries. This is where the craft happens — three rounds of iteration, client-led.',
      duration: 'Week 3–6',
      icon: <Palette className="w-7 h-7 stroke-[1.2] text-gold" />
    },
    {
      num: '04',
      name: 'Handoff & Support',
      desc: 'Developer-ready Figma files, annotated specs, asset exports, and a two-week support window post-launch. We don\'t disappear after delivery.',
      duration: 'Week 7+',
      icon: <Activity className="w-7 h-7 stroke-[1.2] text-gold" />
    }
  ]

  return (
    <section id="process" className="px-6 lg:px-12 py-24 lg:py-32 bg-ink text-paper transition-colors duration-500">
      <div className="mb-20">
        <div className="text-[0.6rem] tracking-[0.18em] uppercase text-mist font-mono opacity-50">03 / How we work</div>
        <h2 className="font-display text-[clamp(2.5rem,4vw,4rem)] font-light leading-tight mt-4 tracking-tight">
          Our <em className="italic text-gold">process</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-paper/10 mt-20">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="group bg-ink p-10 relative transition-colors hover:bg-zinc-900/50"
          >
            <div className="absolute top-8 right-8 font-display text-[5rem] font-light text-paper/5 leading-none transition-colors group-hover:text-paper/10">
              {step.num}
            </div>

            <div className="mb-8">
              {step.icon}
            </div>

            <h3 className="font-display text-[1.3rem] font-semibold mb-4 leading-tight">
              {step.name}
            </h3>

            <p className="text-[0.75rem] text-paper/50 leading-relaxed mb-8">
              {step.desc}
            </p>

            <div className="text-[0.6rem] tracking-[0.14em] uppercase text-gold font-mono">
              {step.duration}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Process
