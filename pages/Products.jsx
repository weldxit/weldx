import React from 'react'
import Navbar from './components/Navbar'
import style from '../styles/Product.module.css'
import Default from './Default'
export default function Products() {
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
