import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--muted)',
      borderTop: '1px solid rgba(201,168,76,0.1)',
      padding: '36px 0',
    }}>
      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 20,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 20,
            color: 'var(--primary)',
            border: '2px solid var(--primary)',
            padding: '4px 9px',
            lineHeight: 1,
            letterSpacing: '0.06em',
          }}>HR</div>
          <div>
            <div style={{ fontSize: 13, color: 'var(--foreground)', fontWeight: 600 }}>Harish Bhoi</div>
            <div style={{ fontSize: 10, color: 'var(--muted-foreground)', letterSpacing: '0.12em' }}>Model · Actor · Creator</div>
          </div>
        </div>

        <div style={{ fontSize: 11, color: 'var(--muted-foreground)', letterSpacing: '0.06em', textAlign: 'center' }}>
          © 2026 Harish Bhoi. All Rights Reserved.
        </div>

        <div style={{ display: 'flex', gap: 24 }}>

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
            },

            // {
            //   name: "Email",
            //   url: "mailto:Harishbhoi658@gmail.com"
            // }

          ].map((s) => (

            <motion.a
              key={s.name}
              href={s.url}
              target={s.name === "Email" ? "_self" : "_blank"}
              rel="noopener noreferrer"

              whileHover={{
                color: 'var(--primary)'
              }}

              style={{
                fontSize: 10,
                color: 'var(--muted-foreground)',
                textDecoration: 'none',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                fontWeight: 700,
                transition: 'color 0.2s',
              }}
            >

              {s.name}

            </motion.a>

          ))}

        </div>
      </div>
    </footer>
  )
}
