'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Contact = () => {
  const contactDetails = [
    { label: 'Email', value: 'hello@pixelandgrid.studio', isLink: true },
    { label: 'Based in', value: 'New Delhi, India · Available globally' },
    { label: 'Response', value: 'Within 24 hours on business days' },
    { label: 'Availability', value: 'Taking projects from Q3 2025' }
  ]

  return (
    <section id="contact" className="px-6 lg:px-12 py-24 lg:py-32 bg-cream grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start transition-colors duration-500">
      {/* Left Column */}
      <div>
        <div className="text-[0.6rem] tracking-[0.18em] uppercase text-mist font-mono">05 / Get in touch</div>
        <h2 className="font-display text-[clamp(2.5rem,4vw,4rem)] font-light leading-tight mt-4 tracking-tight text-ink">
          Ready to<br />
          <em className="italic text-gold-dim">build</em><br />
          something?
        </h2>

        <div className="mt-16 space-y-0 border-t border-ink/10">
          {contactDetails.map((detail, index) => (
            <div key={index} className="flex gap-6 py-6 border-b border-ink/5">
              <span className="text-[0.6rem] tracking-[0.14em] uppercase text-mist font-mono w-24 flex-shrink-0 pt-1">
                {detail.label}
              </span>
              <span className="text-sm lg:text-base text-ink">
                {detail.isLink ? (
                  <a href={`mailto:${detail.value}`} className="hover:text-gold transition-colors">
                    {detail.value}
                  </a>
                ) : (
                  detail.value
                )}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column (Form) */}
      <div className="bg-paper/30 p-8 lg:p-12 border border-ink/5 shadow-sm">
        <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-2">
              <label htmlFor="contact-name" className="text-[0.6rem] tracking-[0.14em] uppercase text-mist font-mono">Your name</label>
              <input 
                id="contact-name"
                name="name"
                type="text" 
                placeholder="Full name" 
                className="w-full bg-transparent border-b border-ink/20 py-3 outline-none focus:border-gold transition-colors cursor-none text-ink placeholder:text-mist/40"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-company" className="text-[0.6rem] tracking-[0.14em] uppercase text-mist font-mono">Company</label>
              <input 
                id="contact-company"
                name="company"
                type="text" 
                placeholder="Company name" 
                className="w-full bg-transparent border-b border-ink/20 py-3 outline-none focus:border-gold transition-colors cursor-none text-ink placeholder:text-mist/40"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-2">
              <label htmlFor="contact-email" className="text-[0.6rem] tracking-[0.14em] uppercase text-mist font-mono">Email</label>
              <input 
                id="contact-email"
                name="email"
                type="email" 
                placeholder="your@email.com" 
                className="w-full bg-transparent border-b border-ink/20 py-3 outline-none focus:border-gold transition-colors cursor-none text-ink placeholder:text-mist/40"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-budget" className="text-[0.6rem] tracking-[0.14em] uppercase text-mist font-mono">Budget range</label>
              <select id="contact-budget" name="budget" defaultValue="" className="w-full bg-transparent border-b border-ink/20 py-3 outline-none focus:border-gold transition-colors cursor-none appearance-none text-ink">
                <option value="" disabled className="bg-paper text-ink">Select range</option>
                <option className="bg-paper text-ink">₹1L – ₹3L</option>
                <option className="bg-paper text-ink">₹3L – ₹8L</option>
                <option className="bg-paper text-ink">₹8L – ₹20L</option>
                <option className="bg-paper text-ink">₹20L+</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="contact-service" className="text-[0.6rem] tracking-[0.14em] uppercase text-mist font-mono">Service needed</label>
            <select id="contact-service" name="service" defaultValue="" className="w-full bg-transparent border-b border-ink/20 py-3 outline-none focus:border-gold transition-colors cursor-none appearance-none text-ink">
              <option value="" disabled className="bg-paper text-ink">What are you building?</option>
              <option className="bg-paper text-ink">UI / UX Design</option>
              <option className="bg-paper text-ink">Web Experience</option>
              <option className="bg-paper text-ink">Brand Identity</option>
              <option className="bg-paper text-ink">Design System</option>
              <option className="bg-paper text-ink">Multiple / Not sure</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="contact-message" className="text-[0.6rem] tracking-[0.14em] uppercase text-mist font-mono">Tell us about your project</label>
            <textarea 
              id="contact-message"
              name="message"
              placeholder="What's the context? What does success look like for you?" 
              className="w-full bg-transparent border-b border-ink/20 py-3 outline-none focus:border-gold transition-colors cursor-none min-h-[120px] resize-none text-ink placeholder:text-mist/40"
            />
          </div>

          <button 
            type="submit" 
            className="bg-ink text-paper px-12 py-4 font-mono text-[0.65rem] tracking-[0.18em] uppercase transition-all hover:bg-gold hover:text-ink flex items-center gap-3"
          >
            Send enquiry
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
