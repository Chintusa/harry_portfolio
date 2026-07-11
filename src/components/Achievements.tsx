import { motion } from 'framer-motion'
import SectionDivider from './SectionDivider'

const ACHIEVEMENTS = [
  { icon: '🏆', value: '10+', label: 'Fashion Shows', sub: 'National & International' },
  { icon: '📸', value: '20+', label: 'Brand Shoots', sub: 'Luxury to Lifestyle' },
  { icon: '🎬', value: '5+', label: 'Short Films', sub: 'Award Screened' },
  { icon: '📱', value: '2.4M+', label: 'Social Reach', sub: 'Combined Platforms' },
  { icon: '📰', value: '8+', label: 'Featured In', sub: 'Magazines' },
]

const AVAILABILITY = [
  'MTV Shows',
  'Modeling',
  'Acting Projects',
  'Brand Collaborations',
  'International Projects',
  'Events & Appearances',
]

export default function Achievements() {
  return (
    <section id="achievements" style={{ background: 'var(--muted)', padding: '88px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <SectionDivider label="Achievements & Experience" />

        {/* Achievement cards */}
        <div style={{
          display: 'flex',
          gap: 14,
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: 64,
        }}>
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 32, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, borderColor: 'rgba(201,168,76,0.55)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}
              style={{
                background: 'rgba(201,168,76,0.04)',
                border: '1px solid rgba(201,168,76,0.13)',
                borderRadius: 6,
                padding: '32px 24px',
                textAlign: 'center',
                minWidth: 150,
                flex: '1 1 150px',
                maxWidth: 210,
                transition: 'all 0.32s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              <div style={{ fontSize: 34, marginBottom: 14 }}>{a.icon}</div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 42,
                fontWeight: 900,
                color: 'var(--primary)',
                lineHeight: 1,
              }}>
                {a.value}
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--foreground)', marginTop: 10 }}>
                {a.label}
              </div>
              <div style={{ fontSize: 10, color: 'var(--muted-foreground)', marginTop: 5, letterSpacing: '0.06em' }}>
                {a.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Horizontal gold rule */}
        <div style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.25), transparent)', marginBottom: 52 }} />

        {/* Available For section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <div style={{
            fontSize: 9,
            letterSpacing: '0.38em',
            color: 'var(--primary)',
            textTransform: 'uppercase',
            fontWeight: 700,
            marginBottom: 24,
          }}>
            Available For
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            {AVAILABILITY.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ background: 'var(--primary)', color: '#000', scale: 1.06, borderColor: 'var(--primary)' }}
                style={{
                  padding: '8px 18px',
                  border: '1px solid rgba(201,168,76,0.28)',
                  borderRadius: 2,
                  fontSize: 11,
                  color: 'var(--secondary-foreground)',
                  fontFamily: 'var(--font-body)',
                  letterSpacing: '0.1em',
                  cursor: 'default',
                  transition: 'all 0.22s',
                  fontWeight: 500,
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
