import { motion } from 'framer-motion'
import SectionDivider from './SectionDivider'
import editorial from '../img/IMG_6470.jpeg'
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
}

const INFO_ROWS = [
  {
    label: 'Experience',
    value: '6+ Years'
  },

  {
    label: 'Category',
    value: 'Actor / Dancer / Fitness Model / Content Creator'
  },

  {
    label: "Hobbies",
    value:
      "Fitness, Acting, Dancing, Calisthenics, Travelling, Content Creation, Video Editing, Learning New Physical Skills"
  },

  {
    label: "Speciality",
    value:
      "Acting, Dance Performance, Fitness Challenges, Camera Confidence, Video Editing & VFX"
  },

  {
    label: 'Availability',
    value: 'Music Videos, Brand Shoots, Modelling Projects, Events & Collaborations'
  },

  {
    label: 'Work Base',
    value: 'Jharsuguda, Odisha, India'
  },
]


const STATS = [
  { value: '250M+', label: 'Total Views', sub: 'Across all platforms' },
  { value: '3M+', label: 'Total Likes', sub: 'Combined engagement' },
  { value: '30+', label: 'Music Videos', sub: 'Published content' },
  { value: '147K+', label: 'Followers', sub: 'Social media' },
]

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--background)', padding: '88px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <SectionDivider label="About Me" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '64px 64px',
        }}>
          {/* Left: Bio + info table */}
          <div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                lineHeight: 1.95,
                color: 'var(--secondary-foreground)',
                marginBottom: 28,
                maxWidth: 500,
              }}
            >
              A dedicated performer and creator bringing stories to life through acting, dance, fitness, and visual creativity.
              With a strong connection to Sambalpuri culture and a passion for entertainment, 
              I strive to create impactful performances while constantly exploring new skills, challenges, and artistic possibilities.
            </motion.p>


            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{
                fontFamily: 'var(--font-accent)',
                fontSize: 28,
                color: 'var(--primary)',
                fontStyle: 'italic',
                marginBottom: 36,
                letterSpacing: '0.02em',
              }}
            >
              Harry
            </motion.div>

            {INFO_ROWS.map((r, i) => (
              <motion.div
                key={r.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.4}
                variants={fadeUp}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '130px 1fr',
                  padding: '11px 0',
                  gap: 16,
                  borderBottom: '1px solid rgba(201,168,76,0.07)',
                }}
              >
                <span style={{ fontSize: 10, color: 'var(--primary)', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700 }}>
                  {r.label}
                </span>
                <span style={{ fontSize: 13, color: 'var(--foreground)', lineHeight: 1.6 }}>
                  {r.value}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Right: Quick facts + editorial image */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ fontSize: 9, letterSpacing: '0.34em', color: 'var(--primary)', textTransform: 'uppercase', fontWeight: 700, marginBottom: 24 }}
            >
              Quick Facts
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 36 }}>
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.25}
                  variants={fadeUp}
                  whileHover={{ scale: 1.04, borderColor: 'rgba(201,168,76,0.5)' }}
                  style={{
                    background: 'rgba(201,168,76,0.04)',
                    border: '1px solid rgba(201,168,76,0.12)',
                    borderRadius: 5,
                    padding: '22px 18px',
                    transition: 'all 0.25s',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 38, fontWeight: 900, color: 'var(--primary)', lineHeight: 1 }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--foreground)', fontWeight: 700, marginTop: 10 }}>
                    {s.label}
                  </div>
                  <div style={{ fontSize: 10, color: 'var(--muted-foreground)', marginTop: 4 }}>
                    {s.sub}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Editorial photo strip */}
            {/* Editorial photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}

              style={{
                position: 'relative',
                borderRadius: 5,
                overflow: 'hidden',
                height: 430,
                width: '100%',
              }}
            >

              <img
                src={editorial}
                alt="Harry editorial"

                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  filter: 'saturate(0.85) contrast(1.08)'
                }}
              />


              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(135deg, rgba(8,8,8,0.45) 0%, transparent 55%)',
                }}
              />


              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  border: '1px solid rgba(201,168,76,0.2)',
                  borderRadius: 5,
                  pointerEvents: 'none'
                }}
              />


              <div
                style={{
                  position: 'absolute',
                  bottom: 16,
                  left: 18
                }}
              >

                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.22em',
                    color: 'var(--primary)',
                    textTransform: 'uppercase',
                    fontWeight: 700
                  }}
                >
                  EDITORIAL
                </div>

              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
