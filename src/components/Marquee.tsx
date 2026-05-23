'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Marquee = () => {
  const services = [
    'UI / UX Design',
    'Brand Identity',
    'Web Experience',
    'Design Systems',
    'Product Strategy',
    'Motion & Interaction',
  ]

  // Double the array to ensure seamless looping
  const doubledServices = [...services, ...services]

  return (
    <div className="bg-ink text-paper py-4 overflow-hidden border-y border-white/10">
      <div className="flex whitespace-nowrap">
        <motion.div 
          className="flex"
          animate={{ x: '-50%' }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {doubledServices.map((service, index) => (
            <React.Fragment key={index}>
              <span className="font-display text-xl italic tracking-wide px-8">
                {service}
              </span>
              <span className="text-gold font-display text-xl">·</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Marquee
