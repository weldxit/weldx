import React from 'react'
import style from '../styles/About.module.css'
import Navbar from '../components/Navbar'
import Default from './Default'
export default function About() {
  return (
    <div className={style.section}>
    <Navbar/>
    <section >
        <div>
    <Default/>
        </div>
    </section>
</div>
  )
}
