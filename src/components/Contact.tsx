import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'

import SectionDivider from './SectionDivider'

const CONTACT_ITEMS = [
  { icon: '📞', label: '+91-93374 86633', note: 'WhatsApp Available' },
  { icon: '✉', label: 'Harishbhoi658@gmail.com', note: 'Email' },
  { icon: '📷', label: '@haryy_official_', note: 'Instagram' },
  { icon: '📍', label: 'Jharsuguda, Odisha, India', note: 'Location' },
]

export default function Contact() {
  const [focused, setFocused] = useState<string | null>(null)
  const [state, handleSubmit] = useForm("xlgyqzry")
  // const [submitted, setSubmitted] = useState(false)

  //  function handleSubmit() {
  //   setSubmitted(true)

  //   setTimeout(() => {
  //     setSubmitted(false)
  //   }, 3000)
  // }

  const inputStyle = (id: string): React.CSSProperties => ({
    width: '100%',
    padding: '12px 16px',
    background: 'rgba(201,168,76,0.04)',
    border: `1px solid ${focused === id ? 'var(--primary)' : 'rgba(201,168,76,0.18)'}`,
    borderRadius: 2,
    color: 'var(--foreground)',
    fontSize: 13,
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'border-color 0.22s',
  })

  return (
    <section id="contact" style={{ background: 'var(--background)', padding: '88px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <SectionDivider label="Contact & Representation" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '48px 64px',
        }}>
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div style={{
              fontSize: 9,
              letterSpacing: '0.34em',
              color: 'var(--primary)',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: 32,
            }}>
              Get In Touch
            </div>

            {CONTACT_ITEMS.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 5 }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 16,
                  padding: '14px 0',
                  borderBottom: '1px solid rgba(201,168,76,0.07)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                <span style={{ fontSize: 20, width: 30, textAlign: 'center', flexShrink: 0, marginTop: 1 }}>
                  {c.icon}
                </span>
                <div>
                  <div style={{ fontSize: 13, color: 'var(--foreground)', fontWeight: 500 }}>{c.label}</div>
                  <div style={{ fontSize: 10, color: 'var(--muted-foreground)', marginTop: 3, letterSpacing: '0.1em' }}>{c.note}</div>
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            {/* Social links */}
            <div style={{ marginTop: 36 }}>

              <div
                style={{
                  fontSize: 9,
                  letterSpacing: '0.3em',
                  color: 'var(--primary)',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginBottom: 18
                }}
              >
                Follow
              </div>


              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>

                {[
                  {
                    name: "Instagram",
                    url: "https://www.instagram.com/haryy_official_/"
                  },

                  {
                    name: "YouTube",
                    url: "https://youtube.com/@qutharry3840"
                  },

                  {
                    name: "Facebook",
                    url: "https://www.facebook.com/qut.harry.7"
                  }

                ].map((s) => (


                  <motion.a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"

                    whileHover={{
                      borderColor: 'var(--primary)',
                      color: 'var(--primary)'
                    }}

                    style={{
                      padding: '7px 14px',
                      border: '1px solid rgba(201,168,76,0.22)',
                      borderRadius: 2,
                      fontSize: 10,
                      color: 'var(--muted-foreground)',
                      textDecoration: 'none',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      transition: 'all 0.2s',
                    }}
                  >

                    {s.name}

                  </motion.a>


                ))}

              </div>

            </div>
          </motion.div>

          {/* Right: contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div style={{
              fontSize: 9,
              letterSpacing: '0.34em',
              color: 'var(--primary)',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: 32,
            }}>
              Send a Message
            </div>
            <form
              onSubmit={handleSubmit}

              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 18
              }}
            >

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 14
                }}
              >

                {[
                  {
                    id: 'name',
                    label: 'Your Name',
                    type: 'text',
                    placeholder: 'Your Name'
                  },

                  {
                    id: 'email',
                    label: 'Email',
                    type: 'email',
                    placeholder: 'your@gmail.com'
                  },

                ].map(f => (

                  <div key={f.id}>

                    <label
                      style={{
                        display: 'block',
                        fontSize: 9,
                        letterSpacing: '0.2em',
                        color: 'var(--muted-foreground)',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        marginBottom: 8
                      }}
                    >
                      {f.label}
                    </label>


                    <input
                      name={f.id}
                      type={f.type}
                      placeholder={f.placeholder}
                      required

                      style={inputStyle(f.id)}

                      onFocus={() => setFocused(f.id)}
                      onBlur={() => setFocused(null)}
                    />

                  </div>

                ))}

              </div>



              {/* Subject */}

              <div>

                <label
                  style={{
                    display: 'block',
                    fontSize: 9,
                    letterSpacing: '0.2em',
                    color: 'var(--muted-foreground)',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    marginBottom: 8
                  }}
                >
                  Subject
                </label>


                <input

                  name="subject"

                  type="text"

                  placeholder="Booking Inquiry / Collaboration"

                  required

                  style={inputStyle('subject')}

                  onFocus={() => setFocused('subject')}

                  onBlur={() => setFocused(null)}

                />

              </div>



              {/* Message */}

              <div>

                <label
                  style={{
                    display: 'block',
                    fontSize: 9,
                    letterSpacing: '0.2em',
                    color: 'var(--muted-foreground)',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    marginBottom: 8
                  }}
                >

                  Message

                </label>


                <textarea

                  name="message"

                  rows={5}

                  required

                  placeholder="Tell me about the project, dates, and requirements..."

                  style={{
                    ...inputStyle('message'),
                    resize: 'vertical'
                  }}

                  onFocus={() => setFocused('message')}

                  onBlur={() => setFocused(null)}

                />


                <ValidationError

                  prefix="Message"

                  field="message"

                  errors={state.errors}

                />

              </div>




              <motion.button

                type="submit"

                disabled={state.submitting}


                whileHover={{
                  scale: 1.03,
                  background: 'var(--primary)',
                  color: '#000'
                }}


                whileTap={{
                  scale: 0.97
                }}


                animate={
                  state.succeeded
                    ? {
                      background: 'var(--primary)',
                      color: '#000'
                    }
                    : {}
                }


                style={{

                  padding: '14px 36px',

                  background: 'transparent',

                  border: '1px solid var(--primary)',

                  color: 'var(--primary)',

                  fontFamily: 'var(--font-body)',

                  fontSize: 10,

                  letterSpacing: '0.3em',

                  textTransform: 'uppercase',

                  fontWeight: 700,

                  cursor: 'pointer',

                  borderRadius: 2,

                  transition: 'all 0.25s',

                  alignSelf: 'flex-start'

                }}

              >

                {
                  state.submitting
                    ? "Sending..."
                    : state.succeeded
                      ? "✓ Sent!"
                      : "Send Message"
                }


              </motion.button>


            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
