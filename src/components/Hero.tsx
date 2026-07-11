import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import poster from "../img/IMG_6458.jpeg";

const STATS = [
  { label: 'Age', value: '24 Years' },
  {label: 'DOB', value: '9th Jan 2002'},
  { label: 'Height', value: "5'9\" (175 cm)" },
  { label: 'Weight', value: '63 kg' },
  { label: 'Chest', value: '42 Inches' },
  { label: 'Waist', value: '30 Inches' },
  { label: 'Hair', value: 'Black' },
  { label: 'Eyes', value: 'Dark Black' },
  { label: 'Location', value: 'Jharsuguda, Odisha, India' },
  { label: 'Languages', value: 'Sambalpuri, Odia, English, Hindi' },
]

const QUICK = [
  { 
    label: 'Total Views', 
    value: '250M+' 
  },

  { 
    label: 'Total Likes', 
    value: '3M+' 
  },

  { 
    label: 'Music Videos', 
    value: '30+' 
  },

  { 
    label: 'Followers', 
    value: '147K+' 
  },
]
const MODEL_PHOTO = poster

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isHovered, setIsHovered] = useState(false)

  const springConfig = { damping: 18, stiffness: 110 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-16, 16]), springConfig)
  const scale = useSpring(1, { damping: 20, stiffness: 200 })
  const shimX = useTransform(mouseX, [-0.5, 0.5], [0, 100])
  const shimY = useTransform(mouseY, [-0.5, 0.5], [0, 100])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseEnter() { scale.set(1.04); setIsHovered(true) }
  function handleMouseLeave() { mouseX.set(0); mouseY.set(0); scale.set(1); setIsHovered(false) }

  return (
    <section style={{ background: 'var(--background)', position: 'relative', overflow: 'hidden', paddingBottom: 80 }}>
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: 0, left: '35%', width: '50%', height: '70%',
        background: 'radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, right: 0, width: '30%', height: '40%',
        background: 'radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        {/* Nav */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '28px 0 48px' }}
        >
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 26,
            color: 'var(--primary)', letterSpacing: '0.06em',
            border: '2px solid var(--primary)', padding: '5px 11px', lineHeight: 1,
          }}>HR</div>
          {/* <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            {['Contact'].map(n => (
              <motion.a key={n} href={`#${n.toLowerCase()}`}
                whileHover={{ color: 'var(--primary)' }}
                style={{ fontSize: 10, letterSpacing: '0.28em', color: 'var(--muted-foreground)', textDecoration: 'none', textTransform: 'uppercase', fontWeight: 600, transition: 'color 0.2s' }}
              >{n}</motion.a>
            ))}
          </div> */}
        </motion.nav>

        {/* Responsive hero grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '48px 40px',
          alignItems: 'start',
        }}>
          {/* Left: identity */}
          <div style={{ minWidth: 0 }}>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              style={{ fontFamily: 'var(--font-body)', fontSize: 13, letterSpacing: '0.22em', color: 'var(--muted-foreground)', textTransform: 'uppercase', marginBottom: 10 }}
            >Hi, I'm</motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: 'var(--font-display)', margin: '0 0 16px', lineHeight: 0.88, fontWeight: 900 }}
            >
              <span style={{ fontSize: 'clamp(56px, 9vw, 104px)', color: 'var(--foreground)', display: 'block', letterSpacing: '-0.02em' }}>HARRY</span>
              <span style={{
                fontSize: 'clamp(56px, 9vw, 104px)', display: 'block', letterSpacing: '-0.02em',
                background: 'linear-gradient(135deg, #C9A84C 0%, #F0D080 40%, #C9A84C 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 40px rgba(201,168,76,0.25))',
              }}></span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8 }}
            >
              {['MODEL', 'ACTOR', 'CREATOR'].map((t, i) => (
                <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.3em', color: 'var(--muted-foreground)', fontWeight: 600 }}>{t}</span>
                  {i < 2 && <span style={{ color: 'rgba(201,168,76,0.5)', fontSize: 12 }}>|</span>}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
              style={{ fontFamily: 'var(--font-accent)', fontSize: 13, color: 'var(--muted-foreground)', fontStyle: 'italic', letterSpacing: '0.08em', marginBottom: 36 }}
            >Confidence. Style. Impact.</motion.p>

            {/* Social row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}

              style={{
                display: 'flex',
                gap: 12,
                marginBottom: 44
              }}
            >

              {[
                {
                  label: 'IG',
                  title: 'Instagram',
                  url: 'https://www.instagram.com/haryy_official_/'
                },

                {
                  label: 'YT',
                  title: 'YouTube',
                  url: 'https://youtube.com/@qutharry3840'
                },

                {
                  label: 'FB',
                  title: 'Facebook',
                  url: 'https://www.facebook.com/qut.harry.7'
                },

                {
                  label: '✉',
                  title: 'Email',
                  url: 'mailto:Harishbhoi658@gmail.com'
                },

              ].map((s) => (

                <motion.a
                  key={s.label}
                  href={s.url}
                  title={s.title}

                  target={
                    s.title === "Email"
                      ? "_self"
                      : "_blank"
                  }

                  rel="noopener noreferrer"

                  whileHover={{
                    scale: 1.18,
                    borderColor: 'var(--primary)',
                    color: 'var(--primary)'
                  }}

                  whileTap={{
                    scale: 0.93
                  }}

                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: '50%',
                    border: '1px solid rgba(201,168,76,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--muted-foreground)',
                    fontSize: 11,
                    fontWeight: 700,
                    textDecoration: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-body)',
                    transition: 'all 0.2s',
                  }}
                >

                  {s.label}

                </motion.a>

              ))}

            </motion.div>

            {/* Quick stat cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.7 }}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, maxWidth: 320 }}
            >
              {QUICK.map((q, i) => (
                <motion.div
                  key={q.label}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(201,168,76,0.5)' }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.07 }}
                  style={{
                    background: 'rgba(201,168,76,0.05)',
                    border: '1px solid rgba(201,168,76,0.14)',
                    borderRadius: 5, padding: '16px 14px',
                    transition: 'all 0.22s',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 900, color: 'var(--primary)', lineHeight: 1 }}>{q.value}</div>
                  <div style={{ fontSize: 9, color: 'var(--muted-foreground)', letterSpacing: '0.14em', marginTop: 5, textTransform: 'uppercase', fontWeight: 600 }}>{q.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Center: 3D Hero Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', justifyContent: 'center', perspective: 1400 }}
          >
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
              style={{
                rotateX, rotateY, scale,
                transformStyle: 'preserve-3d',
                position: 'relative',
                willChange: 'transform',
              }}
            >
              {/* Gold border glow */}
              <div style={{
                position: 'absolute', inset: -2,
                background: `linear-gradient(135deg, #C9A84C, rgba(201,168,76,0.1) 50%, #C9A84C)`,
                borderRadius: 6, zIndex: -1,
                opacity: isHovered ? 0.9 : 0.45,
                transition: 'opacity 0.35s',
              }} />

              {/* Shimmer highlight */}
              {isHovered && (
                <div style={{
                  position: 'absolute', inset: 0, zIndex: 5, pointerEvents: 'none', borderRadius: 4, overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: `radial-gradient(circle at ${(mouseX.get() + 0.5) * 100}% ${(mouseY.get() + 0.5) * 100}%, rgba(255,255,255,0.1) 0%, transparent 60%)`,
                    mixBlendMode: 'overlay',
                  }} />
                </div>
              )}

              <img
                src={MODEL_PHOTO}
                alt="Harry – Model & Actor"
                style={{
                  width: 'clamp(260px, 30vw, 440px)',
                  height: 'clamp(380px, 56vw, 680px)',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  display: 'block',
                  borderRadius: 4,
                  filter: 'contrast(1.06) saturate(0.88) brightness(0.97)',
                }}
              />

              {/* Bottom fade */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
                background: 'linear-gradient(to top, rgba(8,8,8,0.9) 0%, transparent 100%)',
                borderRadius: '0 0 4px 4px',
              }} />

              {/* Floating label — depth element */}
              <motion.div
                style={{ position: 'absolute', bottom: 24, left: 20, zIndex: 10, transform: 'translateZ(28px)' }}
              >
                <div style={{ fontFamily: 'var(--font-accent)', fontSize: 18, color: 'var(--primary)', fontStyle: 'italic' }}>Harry</div>
                <div style={{ fontSize: 9, letterSpacing: '0.22em', color: 'rgba(201,168,76,0.6)', textTransform: 'uppercase', fontWeight: 600, marginTop: 3 }}>Model · Actor · Creator</div>
              </motion.div>

              {/* Corner decoration */}
              <div style={{ position: 'absolute', top: 16, right: 16, zIndex: 10 }}>
                <div style={{ fontSize: 9, letterSpacing: '0.24em', color: 'var(--primary)', textTransform: 'uppercase', fontWeight: 700, textAlign: 'right' }}>Odisha</div>
                <div style={{ fontSize: 9, letterSpacing: '0.18em', color: 'rgba(201,168,76,0.5)', textAlign: 'right' }}>India</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Personal stats panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            style={{
              background: 'rgba(14,14,14,0.96)',
              border: '1px solid rgba(201,168,76,0.14)',
              borderRadius: 6, padding: '22px 24px',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div style={{
              fontSize: 9, letterSpacing: '0.32em', color: 'var(--primary)',
              textTransform: 'uppercase', fontWeight: 700, marginBottom: 20,
              fontFamily: 'var(--font-body)',
              paddingBottom: 12, borderBottom: '1px solid rgba(201,168,76,0.1)',
            }}>Personal Stats</div>

            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.06 }}
                whileHover={{ background: 'rgba(201,168,76,0.04)', x: 2 }}
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  gap: 12, padding: '10px 8px', borderRadius: 3,
                  borderBottom: i < STATS.length - 1 ? '1px solid rgba(201,168,76,0.06)' : 'none',
                  transition: 'all 0.15s',
                }}
              >
                <span style={{ fontSize: 10, color: 'var(--muted-foreground)', fontWeight: 500, letterSpacing: '0.06em', flexShrink: 0 }}>{s.label}</span>
                <span style={{ fontSize: 11, color: 'var(--card-foreground)', fontWeight: 600, textAlign: 'right' }}>{s.value}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
