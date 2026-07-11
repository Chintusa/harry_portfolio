import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionDivider from './SectionDivider'

const VIDEOS = [
  {
    id: 1,
    thumb: "https://img.youtube.com/vi/tIy15zOWT6o/maxresdefault.jpg",
    duration: "03:56",
    title: "Alta Makhi",
    desc: "Official Sambalpuri music video starring Harry & Lavanya Das. Sung by Pankaj Tandi, Pratham Kumbhar & Kiran Dash. Music composed by Bijay Anand Sahu.",
    platform: "YouTube",
    date: "18 Jun 2023",
    views: "166.3M",
    likes: "990K",
    embedUrl: "https://www.youtube.com/embed/tIy15zOWT6o",
  },

 {
  id: 2,
  thumb: "https://img.youtube.com/vi/9BidVrzJMWM/hqdefault.jpg",
  duration: "03:10",
  title: "Mor Bela 2.0",
  desc: "Official Sambalpuri music video starring Harry & Nilakhi Patra. Sung by Pratham Kumbhar with music by Bijay Anand Sahu.",
  platform: "YouTube",
  date: "23 Jul 2023",
  views: "83.6M",
  likes: "530K",
  embedUrl: "https://www.youtube.com/embed/9BidVrzJMWM",
},
{
  id: 3,
  thumb: "https://img.youtube.com/vi/GiEgT6QJjAE/maxresdefault.jpg",
  duration: "6:40",
  title: "Kulfirani Chocobar",
  desc: "Official Sambalpuri music video starring Harry & Simran Dash. Sung by Ira Mohanty & Ruku Suna with music by Malaya Mishra.",
  platform: "YouTube",
  date: "24 Mar 2024",
  views: "83M",
  likes: "430K",
  embedUrl: "https://www.youtube.com/embed/GiEgT6QJjAE",
},

{
  id: 4,
  thumb: "https://img.youtube.com/vi/7GkWA7nLY0Y/maxresdefault.jpg",
  duration: "4:02",
  title: "Chameli Hai Hai 2.0",
  desc: "Official Sambalpuri music video starring Harry & Lavanya. Sung by Pratham Kumbhar & Kiran Dash with music by Wetno.",
  platform: "YouTube",
  date: "6 Aug 2024",
  views: "62.1M",
  likes: "280K",
  embedUrl: "https://www.youtube.com/embed/7GkWA7nLY0Y",
},

 {
  id: 5,
  thumb: "https://img.youtube.com/vi/aIhTc8HpjQc/maxresdefault.jpg",
  duration: "3:50",
  title: "Rang Rasia",
  desc: "Official Sambalpuri music video starring Harry & Kalpita Singh. Sung by Bijay Anand Sahu & Monika Sahu with music composed by Bijay Anand Sahu.",
  platform: "YouTube",
  date: "7 Jan 2024",
  views: "26.4M",
  likes: "190K",
  embedUrl: "https://www.youtube.com/embed/aIhTc8HpjQc",
},

 {
  id: 6,
  thumb: "https://img.youtube.com/vi/kWtI7aPF95g/maxresdefault.jpg",
  duration: "5:34",
  title: "Chinnama",
  desc: "Official Sambalpuri dance music video starring Harry & Dipa Mishra. Sung by Pratham Kumbhar & Archana Padhi with music by Priyan Priyadarshan.",
  platform: "YouTube",
  date: "10 Nov 2024",
  views: "15.8M",
  likes: "140K",
  embedUrl: "https://www.youtube.com/embed/kWtI7aPF95g",
}
];
const PLATFORM_COLORS: Record<string, string> = {
  YouTube: '#FF0000',
  Instagram: '#E1306C',
  Vimeo: '#1AB7EA',
}

export default function Videos() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [playing, setPlaying] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const visibleVideos = showAll 
    ? VIDEOS 
    : VIDEOS.slice(0,4)

  return (
    <section id="videos" style={{ background: 'var(--background)', padding: '88px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <SectionDivider label="Videos" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 20,
        }}>
          {visibleVideos.map((v, i) => (
            <motion.article
              key={v.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHovered(v.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: 'var(--card)',
                border: `1px solid ${hovered === v.id ? 'rgba(201,168,76,0.4)' : 'rgba(201,168,76,0.1)'}`,
                borderRadius: 6,
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'border-color 0.25s, box-shadow 0.25s',
                boxShadow: hovered === v.id ? '0 16px 48px rgba(0,0,0,0.5)' : '0 4px 20px rgba(0,0,0,0.3)',
              }}
            >
              {/* Thumbnail / YouTube Player */}
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '16/9',
                  overflow: 'hidden'
                }}
                onClick={() => setPlaying(playing === v.id ? null : v.id)}
              >

                {playing === v.id ? (
                  <iframe
                    src={v.embedUrl}
                    title={v.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none'
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <motion.img
                      src={v.thumb}
                      alt={v.title}
                      animate={{
                        scale: hovered === v.id ? 1.07 : 1
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        filter: 'brightness(0.78)'
                      }}
                    />


                    {/* Dark overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(0,0,0,0.3)'
                      }}
                    />


                    {/* Play button */}
                    <motion.div
                      animate={{
                        scale: hovered === v.id ? 1.12 : 1
                      }}
                      transition={{
                        duration: 0.3
                      }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >

                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        style={{
                          width: 52,
                          height: 52,
                          borderRadius: '50%',
                          background:
                            hovered === v.id
                              ? 'var(--primary)'
                              : 'rgba(201,168,76,0.8)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow:
                            hovered === v.id
                              ? '0 0 32px rgba(201,168,76,0.6)'
                              : 'none',
                        }}
                      >

                        <div
                          style={{
                            fontSize: 18,
                            marginLeft: 4,
                            color: '#000'
                          }}
                        >
                          ▶
                        </div>

                      </motion.div>
                    </motion.div>


                    {/* Duration */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 8,
                        right: 10,
                        background: 'rgba(0,0,0,0.82)',
                        color: '#ddd',
                        fontSize: 10,
                        padding: '3px 8px',
                        borderRadius: 2,
                        fontFamily: 'monospace',
                      }}
                    >
                      {v.duration}
                    </div>


                    {/* Platform */}
                    <div
                      style={{
                        position: 'absolute',
                        top: 10,
                        left: 10,
                        background: 'rgba(0,0,0,0.7)',
                        padding: '3px 10px',
                        borderRadius: 2,
                        fontSize: 9,
                        color:
                          PLATFORM_COLORS[v.platform] || '#fff',
                        fontWeight: 800,
                      }}
                    >
                      {v.platform}
                    </div>

                  </>
                )}

              </div>
              {/* Video meta */}
              <div style={{ padding: '16px 18px 18px' }}>
                <div style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: 'var(--foreground)',
                  marginBottom: 6,
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '0.01em',
                }}>
                  {v.title}
                </div>
                <div style={{ fontSize: 12, color: 'var(--muted-foreground)', lineHeight: 1.65, marginBottom: 14 }}>
                  {v.desc}
                </div>

                {/* Stats row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: 16 }}>
                    <span style={{ fontSize: 11, color: 'var(--primary)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 5 }}>
                      <span>👁</span> {v.views}
                    </span>
                    <span style={{ fontSize: 11, color: 'var(--muted-foreground)', display: 'flex', alignItems: 'center', gap: 5 }}>
                      <span>♥</span> {v.likes}
                    </span>
                  </div>
                  <div style={{ fontSize: 10, color: 'var(--muted-foreground)', textAlign: 'right' }}>
                    <div style={{ fontWeight: 600, color: 'var(--secondary-foreground)' }}>{v.platform}</div>
                    <div style={{ marginTop: 2 }}>{v.date}</div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all */}
        {/* View all videos */}
        {VIDEOS.length > 4 && (

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}

            style={{
              textAlign: 'center',
              marginTop: 48
            }}
          >

            <motion.button

              onClick={() => {
                setShowAll(!showAll)
                setPlaying(null)
              }}

              whileHover={{
                scale: 1.04,
                borderColor: 'var(--primary)',
                color: 'var(--primary)'
              }}

              whileTap={{
                scale: 0.97
              }}


              style={{
                padding: '13px 52px',
                border: '1px solid rgba(201,168,76,0.35)',
                background: 'transparent',
                color: 'var(--muted-foreground)',
                fontFamily: 'var(--font-body)',
                fontSize: 10,
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                fontWeight: 700,
                cursor: 'pointer',
                borderRadius: 2,
                transition: 'all 0.25s',
              }}

            >

              {
                showAll
                  ? "SHOW LESS"
                  : `VIEW ALL ${VIDEOS.length} VIDEOS`
              }

            </motion.button>

          </motion.div>

        )}      </div>
    </section>
  )
}
