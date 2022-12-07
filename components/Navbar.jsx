import Link from 'next/link'
import React from 'react'
import style from '../styles/Navbar.module.css'
export default function Navbar() {
  return (
    <div className={style.navbar}>
        <Link href={'/'} className={style.navbutton}><span style={{color: "#0097db"}}>Hom</span><span style={{color: "#fe2d95"}}>e</span></Link>
        <Link href={'/Services'} className={style.navbutton}><span style={{color: "#0097db"}}>Service</span><span style={{color: "#fe2d95"}}>s</span></Link>
        <Link href={'/Products'} className={style.navbutton}><span style={{color: "#0097db"}}>Product</span><span style={{color: "#fe2d95"}}>s</span></Link>
        <Link href={'/About'} className={style.navbutton}><span style={{color: "#0097db"}}>Abou</span><span style={{color: "#fe2d95"}}>t</span></Link>
        
    </div>
  )
}
