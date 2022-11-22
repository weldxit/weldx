import Link from 'next/link'
import React from 'react'
import style from '../../styles/Navbar.module.css'
export default function Navbar() {
  return (
    <div className={style.navbar}>
        <Link href={'/'} className={style.navbutton}>Home</Link>
        <Link href={'/Services'} className={style.navbutton}>Services</Link>
        <Link href={'/Products'} className={style.navbutton}>Products</Link>
        <Link href={'/About'} className={style.navbutton}>About</Link>
        
    </div>
  )
}
