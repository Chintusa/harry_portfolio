import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Photos from './components/Photos'
import Videos from './components/Videos'
// import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Photos', href: '#photos' },
  { label: 'Videos', href: '#videos' },
  // { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

function StickyNav() {
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 420)

      // Highlight active section
      const sections = ['about', 'photos', 'videos',  'contact']
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            background: 'rgba(8,8,8,0.94)',
            backdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(201,168,76,0.12)',
            padding: '0 24px',
          }}
        >
          <div style={{
            maxWidth: 1280,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 56,
          }}>
            <a
              href="#"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: 18,
                color: 'var(--primary)',
                border: '1.5px solid var(--primary)',
                padding: '3px 8px',
                lineHeight: 1,
                textDecoration: 'none',
                letterSpacing: '0.06em',
              }}
            >
              HR
            </a>

            <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
              {NAV_LINKS.map(n => {
                const id = n.href.slice(1)
                const isActive = active === id
                return (
                  <motion.a
                    key={n.label}
                    href={n.href}
                    whileHover={{ color: 'var(--primary)' }}
                    style={{
                      fontSize: 9,
                      letterSpacing: '0.28em',
                      color: isActive ? 'var(--primary)' : 'var(--muted-foreground)',
                      textDecoration: 'none',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      transition: 'color 0.2s',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {n.label}
                  </motion.a>
                )
              })}
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ background: 'var(--primary)', color: '#000' }}
              style={{
                padding: '8px 20px',
                border: '1px solid var(--primary)',
                borderRadius: 2,
                fontSize: 9,
                letterSpacing: '0.24em',
                color: 'var(--primary)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                fontWeight: 700,
                transition: 'all 0.2s',
                fontFamily: 'var(--font-body)',
              }}
            >
              Book Now
            </motion.a>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <div style={{ background: 'var(--background)', color: 'var(--foreground)', fontFamily: 'var(--font-body)' }}>
      <StickyNav />
      <Hero />
      <About />
      <Photos />
      <Videos />
      {/* <Achievements /> */}
      <Contact />
      <Footer />
    </div>
  )
}
