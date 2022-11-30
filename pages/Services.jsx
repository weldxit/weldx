import React from 'react'
import Navbar from './components/Navbar'
import style from '../styles/Service.module.css'
import Default from './Default'
import Footer from './components/Footer'

export default function Services() {
  return (
    <div className={style.section}>
        <Navbar/>
        <section className={style.services} >
            <div className={style.service_providing}>
                
            </div>
        </section>
        <Footer/>
    </div>
  )
}
