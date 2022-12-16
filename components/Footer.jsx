import React from 'react'
import Image from "next/image";
import Link from "next/link";
import style from "../styles/Footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


export default function () {
  return (
    <div className={style.Footer}>
      <div className={style.footerSec}>
        <div className={style.brandDiv}>
        <Image src={'/weld x png.png'} width={80} height={40} /> 
        <div style={{textAlign: "justify"}}>
          <br/>
        WeldX brings you smart digital solution and transformation with global standard IT products. Lets work together and reach your business goal.
        </div>
        </div>
        <div className={style.linksDiv}>
          <div>
            <p><span style={{color: "#fff", fontWeight: "bold"}}>SERVICE</span><span style={{color: "#fe2d95", fontWeight: "bold"}}>S</span></p>
            <ul className={style.ul}>
            <li><Link href={'/Services/#app'} className={style.li}><span>App Development</span></Link></li>
              <li><Link href={'/Services/#web'} className={style.li}><span>Web Development</span></Link></li>
              <li><Link href={'/Services/#pro'} className={style.li}><span>Product Design</span></Link></li>
              <li><Link href={'/Services/#da'} className={style.li}><span>Data Analysis</span></Link></li>
              <li><Link href={'/Services/#iot'} className={style.li}><span>Internet of Things</span></Link></li>
              <li><Link href={'/Services/#ml'} className={style.li}><span>Machine Learning</span></Link></li>
            </ul>
          </div>
          <div>
            <p><span style={{color: "#fff", fontWeight: "bold"}}>Weld</span><span style={{color: "#fe2d95", fontWeight: "bold"}}>X</span></p>
            <ul className={style.ul}>
              <li><Link href={'/About'} className={style.li}><span>About Us</span></Link></li>
              <li><Link href={'/Product'} className={style.li}><span>Praduct</span></Link></li>
              <li><Link href={'/Contact'} className={style.li}><span>Contact Us</span></Link></li>
              <li><Link href={'/FAQ'} className={style.li}><span>FAQ</span></Link></li>
              <li><Link href={'#'} className={style.li}><span>Blog</span></Link></li>
            </ul>
          </div>
          <div>
            <p><span style={{color: "#fff", fontWeight: "bold"}}>OUR ADDRES</span><span style={{color: "#fe2d95", fontWeight: "bold"}}>S</span></p>
            <ul className={style.ul}>
              <li># 309/1801P, Niladri Vihar</li>
              <li>BBSR, Odisha - 751021</li>
              <li>Phone - 9937054201</li>
            </ul>
          </div>
        </div>
        <div className={style.mediaDiv}>
          <p><span style={{color: "#fff", fontWeight: "bold"}}>SOCIAL MEDI</span><span style={{color: "#fe2d95", fontWeight: "bold"}}>A</span></p>
          <Link href={'https://www.facebook.com/weldgroup'} target="_blank" className={style.li}><FontAwesomeIcon icon={faFacebook} className={style.icon} /></Link>
          <Link href={'https://twitter.com/WeldgroupIndia'} target="_blank" className={style.li}><FontAwesomeIcon icon={faTwitter} className={style.icon} /></Link>
          <Link href={'https://www.instagram.com/weldgroupindia/'} target="_blank" className={style.li}><FontAwesomeIcon icon={faInstagram} className={style.icon} /></Link>
          <Link href={'https://www.linkedin.com/company/weldgroupindia/'} target="_blank" className={style.li}><FontAwesomeIcon icon={faLinkedin} className={style.icon} /></Link>
        </div>
      </div>
      <hr className={style.hr} />
      <p>© Copyright 2023, Weld Group. All rights reserved.</p>
    </div>
  )
}
