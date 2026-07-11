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
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
useEffect(() => {

  function onResize(){
    const mobile = window.innerWidth <= 768

    setIsMobile(mobile)

    if(!mobile){
      setOpen(false)
    }
  }


  function onScroll() {

    setVisible(window.scrollY > 420)

    const sections = [
      'about',
      'photos',
      'videos',
      'contact'
    ]

    for (let i = sections.length - 1; i >= 0; i--) {

      const el = document.getElementById(sections[i])

      if (el && window.scrollY >= el.offsetTop - 120) {

        setActive(sections[i])

        break
      }
    }

  }


  onResize()

  window.addEventListener(
    'resize',
    onResize
  )

  window.addEventListener(
    'scroll',
    onScroll,
    { passive:true }
  )


  return () => {

    window.removeEventListener(
      'resize',
      onResize
    )

    window.removeEventListener(
      'scroll',
      onScroll
    )

  }


},[])


  return (
    <AnimatePresence>

      {visible && (

        <motion.nav

          initial={{ y: -60, opacity: 0 }}

          animate={{ y: 0, opacity: 1 }}

          exit={{ y: -60, opacity: 0 }}

          transition={{ duration: 0.4 }}

          style={{

            position:'fixed',

            top:0,

            left:0,

            right:0,

            zIndex:100,
            overflowX:'hidden',

            background:'rgba(8,8,8,0.95)',

            backdropFilter:'blur(16px)',

            borderBottom:'1px solid rgba(201,168,76,0.12)',

          }}

        >


          <div

            style={{

              maxWidth:1280,

              margin:'0 auto',

              minHeight:56,

              padding:'0 clamp(16px,4vw,32px)',
              boxSizing: 'border-box',

              display:'flex',

              alignItems:'center',

              justifyContent:'space-between'

            }}

          >


            {/* LOGO */}

            <a

              href="#"

              style={{

                fontFamily:'var(--font-display)',

                fontWeight:900,

                fontSize:18,

                color:'var(--primary)',

                border:'1.5px solid var(--primary)',

                padding:'3px 8px',

                textDecoration:'none'

              }}

            >

              HR

            </a>



            {/* DESKTOP MENU */}

            <div

              className="desktop-menu"

              style={{

                display:'flex',

                gap:28,

                alignItems:'center'

              }}

            >


              {NAV_LINKS.map(n=>(

                <a

                  key={n.label}

                  href={n.href}

                  style={{

                    fontSize:9,

                    letterSpacing:'0.25em',

                    color:
                    active === n.href.slice(1)
                    ? 'var(--primary)'
                    :'var(--muted-foreground)',

                    textDecoration:'none',

                    textTransform:'uppercase',

                    fontWeight:700

                  }}

                >

                  {n.label}

                </a>

              ))}


              <a

                href="#contact"

                style={{

                  padding:'8px 18px',

                  border:'1px solid var(--primary)',

                  color:'var(--primary)',

                  textDecoration:'none',

                  fontSize:9,

                  letterSpacing:'0.2em'

                }}

              >

                BOOK

              </a>


            </div>



            {/* MOBILE BUTTON */}

            <button

              className="mobile-btn"

              onClick={()=>setOpen(!open)}

              style={{

                display:'none',

                background:'none',

                border:0,

                color:'var(--primary)',

                fontSize:26,

                cursor:'pointer'

              }}

            >

              ☰

            </button>



          </div>




          {/* MOBILE DROPDOWN */}

          {isMobile && open && (

            <motion.div

              initial={{height:0}}

              animate={{height:'auto'}}

              style={{

                padding:'18px',

                display:'flex',

                flexDirection:'column',

                gap:18,

                textAlign:'center'

              }}

            >


              {NAV_LINKS.map(n=>(

                <a

                  onClick={()=>setOpen(false)}

                  key={n.label}

                  href={n.href}

                  style={{

                    color:'var(--primary)',

                    textDecoration:'none',

                    letterSpacing:'0.2em',

                    fontSize:11,

                    fontWeight:700

                  }}

                >

                  {n.label}

                </a>

              ))}


            </motion.div>

          )}



          <style>

            {`

            @media(max-width:768px){

              .desktop-menu{

                display:none !important;

              }


              .mobile-btn{

                display:block !important;

              }

            }

            `}

          </style>



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
