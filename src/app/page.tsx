import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import About from '@/components/About'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SectionReveal from '@/components/SectionReveal'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Marquee />
      <SectionReveal>
        <About />
      </SectionReveal>
      <SectionReveal>
        <Services />
      </SectionReveal>
      <SectionReveal>
        <Process />
      </SectionReveal>
      <SectionReveal>
        <Contact />
      </SectionReveal>
      <Footer />
    </div>
  )
}
