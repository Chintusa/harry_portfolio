import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionDivider from './SectionDivider';
import img1 from "../img/12.jpeg";
import img2 from "../img/123.jpeg";
import img3 from "../img/DSCF1300.jpeg";

import img5 from "../img/IMG_2947.jpeg";
import img6 from "../img/IMG_5054.jpeg";
import img7 from "../img/IMG_6457.jpeg";
import img8 from "../img/IMG_6458.jpeg";
import img9 from "../img/IMG_6459.jpeg";
import img10 from "../img/IMG_6460.jpeg";
import img11 from "../img/IMG_6461.jpeg";
import img12 from "../img/IMG_6809.jpeg";
import img13 from "../img/IMG_7086.jpeg";
import img14 from "../img/IMG_8749.jpeg";

import img15 from "../img/j.jpeg";
import img16 from "../img/JES07205.jpeg";
import img17 from "../img/JES07393.jpg.jpeg";
import img18 from "../img/JES07422.jpg.jpeg";
import img19 from "../img/JES07425.jpg.jpeg";
import img20 from "../img/JES07456.jpg.jpeg";
import img21 from "../img/JES07548.jpg.jpeg";
import img22 from "../img/JES07560.jpg.jpeg";

const CATEGORIES = [
  'All',
  // 'Headshots',
  // 'Full Body',
  'Fashion',
  'Fitness',
  'Lifestyle',
  'Expressions',
  'Performance',
  'Calisthenics'
]
const PHOTOS = [

  {
    id: 1,
    url: img1,
    cat: "Fashion",
    label: "Smile Portrait"
  },

  {
    id: 2,
    url: img2,
    cat: "Fashion",
    label: "Red Bandana Editorial"
  },

  {
    id: 3,
    url: img3,
    cat: "Lifestyle",
    label: "Nature Lifestyle Shoot"
  },

  {
    id: 5,
    url: img5,
    cat: "Performance",
    label: "Stage Guitar Performance"
  },

  {
    id: 6,
    url: img6,
    cat: "Fashion",
    label: "Urban Fashion Look"
  },

  {
    id: 7,
    url: img7,
    cat: "Expressions",
    label: "Intense Character Look"
  },

  {
    id: 8,
    url: img8,
    cat: "Fashion",
    label: "Creative Fashion Pose"
  },

  {
    id: 9,
    url: img9,
    cat: "Fashion",
    label: "Cinematic Portrait"
  },

  {
    id: 10,
    url: img10,
    cat: "Fitness",
    label: "Athletic Body Shoot"
  },

  {
    id: 11,
    url: img11,
    cat: "Fitness",
    label: "Mirror Physique Shot"
  },

  {
    id: 12,
    url: img12,
    cat: "Performance",
    label: "Stage Appearance"
  },

  {
    id: 13,
    url: img13,
    cat: "Performance",
    label: "Event Moment"
  },

  {
    id: 14,
    url: img14,
    cat: "Performance",
    label: "Live Singing Performance"
  },

  {
    id: 15,
    url: img15,
    cat: "Calisthenics",
    label: "Muscle Definition"
  },

  {
    id: 16,
    url: img16,
    cat: "Fitness",
    label: "Fitness Model Shoot"
  },

  {
    id: 17,
    url: img17,
    cat: "Calisthenics",
    label: "Back Muscle Pose"
  },

  {
    id: 18,
    url: img18,
    cat: "Calisthenics",
    label: "Professional Physique"
  },

  {
    id: 19,
    url: img19,
    cat: "Calisthenics",
    label: "Artistic Body Pose"
  },

  {
    id: 20,
    url: img20,
    cat: "Fitness",
    label: "Strength Pose"
  },

  {
    id: 21,
    url: img21,
    cat: "Expressions",
    label: "Dynamic Action Pose"
  },

  {
    id: 22,
    url: img22,
    cat: "Calisthenics",
    label: "Athletic Movement"
  }

];


export default function Photos() {
  const [active, setActive] = useState('All');
  const [hovered, setHovered] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<(typeof PHOTOS)[0] | null>(null);
  const [showAll, setShowAll] = useState(false);
  const photosRef = useRef<HTMLDivElement | null>(null);

  // Set default CSS variables for the standalone component preview
  useEffect(() => {
    document.documentElement.style.setProperty('--primary', '#c9a84c');
    document.documentElement.style.setProperty('--muted', '#121212');
    document.documentElement.style.setProperty('--muted-foreground', '#a1a1aa');
    document.body.style.margin = '0';
    document.body.style.backgroundColor = '#121212';
    document.body.style.color = '#fff';
    document.body.style.fontFamily = 'system-ui, -apple-system, sans-serif';
  }, []);

  const handleTogglePhotos = () => {
    if (showAll) {
      setShowAll(false);
      // Wait for layout animation duration (0.45s) to complete before scrolling
      setTimeout(() => {
        photosRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start" // Better UX: scrolls to the top of the gallery rather than the end
        });
      }, 200); // 0.45s + small buffer for smoother experience
    } else {
      setShowAll(true);
    }
  };

  const filtered = active === 'All' 
    ? PHOTOS 
    : PHOTOS.filter(p => p.cat === active);

  const visible = showAll ? filtered : filtered.slice(0, 8);

  return (
    <section id="photos" style={{ background: 'var(--muted)', padding: '88px 0', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <SectionDivider label="Photos" />

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 44, justifyContent: 'center' }}>
          {CATEGORIES.map(cat => {
            const isActive = active === cat;
            return (
              <motion.button
                key={cat}
                onClick={() => {
                  setActive(cat);
                  setShowAll(false);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  padding: '8px 20px',
                  borderRadius: 2,
                  border: `1px solid ${isActive ? 'var(--primary)' : 'rgba(201,168,76,0.2)'}`,
                  background: isActive ? 'var(--primary)' : 'transparent',
                  color: isActive ? '#000' : 'var(--muted-foreground)',
                  fontSize: 10,
                  letterSpacing: '0.16em',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'background 0.22s, color 0.22s, border 0.22s',
                }}
              >
                {cat}
              </motion.button>
            );
          })}
        </div>

        {/* Photo grid */}
        <div ref={photosRef} style={{ scrollMarginTop: '100px' }}>
          <motion.div
            layout
            transition={{
              layout: { duration: 0.40, ease: "easeInOut" }
            }}
            style={{
              display: 'grid',
              // Use min() to prevent layout breaking on very small screens < 240px
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))',
              gap: 14,
            }}
          >
            {/* Removed mode="popLayout" which causes absolute positioning and breaks CSS grid on resize */}
            <AnimatePresence mode="sync">
              {visible.map((photo) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    opacity: { duration: 0.2 },
                    layout: { duration: 0.40, ease: "easeInOut" }
                  }}
                  onMouseEnter={() => setHovered(photo.id)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setLightbox(photo)}
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 4,
                    cursor: 'pointer',
                    aspectRatio: '3/4',
                    border: hovered === photo.id ? '1px solid rgba(201,168,76,0.4)' : '1px solid transparent',
                    transition: 'border-color 0.25s',
                  }}
                >
                  <motion.img
                    src={photo.url}
                    alt={photo.label}
                    animate={{ scale: hovered === photo.id ? 1.09 : 1 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />

                  {/* Hover overlay */}
                  <motion.div
                    animate={{ opacity: hovered === photo.id ? 1 : 0 }}
                    transition={{ duration: 0.28 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: 18,
                    }}
                  >
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 4 }}>
                      {photo.label}
                    </div>
                    <div style={{ fontSize: 9, color: 'var(--primary)', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>
                      {photo.cat}
                    </div>
                  </motion.div>

                  {/* Zoom icon */}
                  <motion.div
                    animate={{ opacity: hovered === photo.id ? 1 : 0, scale: hovered === photo.id ? 1 : 0.6 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      position: 'absolute',
                      top: 14,
                      right: 14,
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: 'rgba(201,168,76,0.92)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 14,
                      color: '#000',
                      fontWeight: 900,
                    }}
                  >
                    ⊕
                  </motion.div>

                  {/* Category badge */}
                  <div style={{
                    position: 'absolute',
                    top: 12,
                    left: 12,
                    background: 'rgba(0,0,0,0.65)',
                    backdropFilter: 'blur(6px)',
                    padding: '3px 10px',
                    borderRadius: 2,
                    fontSize: 8,
                    letterSpacing: '0.2em',
                    color: 'var(--primary)',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    border: '1px solid rgba(201,168,76,0.25)',
                  }}>
                    {photo.cat}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* View all Button */}
        {filtered.length > 8 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginTop: 48 }}
          >
            <motion.button
              onClick={handleTogglePhotos}
              whileHover={{
                scale: 1.04,
                borderColor: 'var(--primary)',
                color: 'var(--primary)'
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '13px 52px',
                border: '1px solid rgba(201,168,76,0.35)',
                background: 'transparent',
                color: 'var(--muted-foreground)',
                fontSize: 10,
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                fontWeight: 700,
                cursor: 'pointer',
                borderRadius: 2,
                transition: 'all 0.25s',
              }}
            >
              {showAll ? "SHOW LESS" : `VIEW ALL ${filtered.length} PHOTOS`}
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.92)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 24,
              backdropFilter: 'blur(8px)',
            }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
              style={{ position: 'relative', maxHeight: '90vh', borderRadius: 6, overflow: 'hidden', border: '1px solid rgba(201,168,76,0.3)' }}
            >
              <img
                src={lightbox.url}
                alt={lightbox.label}
                style={{ maxHeight: '88vh', maxWidth: '85vw', objectFit: 'contain', display: 'block' }}
              />
              <button
                onClick={() => setLightbox(null)}
                style={{
                  position: 'absolute', top: 14, right: 16,
                  background: 'rgba(201,168,76,0.9)', border: 'none',
                  borderRadius: '50%', width: 32, height: 32,
                  cursor: 'pointer', fontSize: 16, color: '#000', fontWeight: 900,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >×</button>
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
                padding: '24px 20px 16px',
              }}>
                <div style={{ fontSize: 18, fontWeight: 700, color: '#fff' }}>{lightbox.label}</div>
                <div style={{ fontSize: 10, color: 'var(--primary)', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 4 }}>{lightbox.cat}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}