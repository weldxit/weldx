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
        </div>
        <div className={style.linksDiv}>
          <div>
            <p><span style={{color: "#fff", fontWeight: "bold"}}>SERVICE</span><span style={{color: "#fe2d95", fontWeight: "bold"}}>S</span></p>
            <ul className={style.ul}>
            <li><Link href={'#'} className={style.li}><span>App Development</span></Link></li>
              <li><Link href={'#'} className={style.li}><span>Web Development</span></Link></li>
              <li><Link href={'#'} className={style.li}><span>Data Analysis</span></Link></li>
              <li><Link href={'#'} className={style.li}><span>Internet of Things</span></Link></li>
              <li><Link href={'#'} className={style.li}><span>Machine Learning</span></Link></li>
            </ul>
          </div>
          <div>
            <p><span style={{color: "#fff", fontWeight: "bold"}}>PRODUC</span><span style={{color: "#fe2d95", fontWeight: "bold"}}>T</span></p>
            <ul className={style.ul}>
              <li><Link href={'#'} className={style.li}><span>ERP</span></Link></li>
              <li><Link href={'#'} className={style.li}><span>School Management</span></Link></li>
              <li><Link href={'#'} className={style.li}><span>Security System</span></Link></li>
              <li><Link href={'#'} className={style.li}><span>Hospital Management</span></Link></li>
              <li><Link href={'#'} className={style.li}><span>Smart Clinic</span></Link></li>
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
          <Link href={'#'} className={style.li}><FontAwesomeIcon icon={faFacebook} className={style.icon} /></Link>
          <Link href={'#'} className={style.li}><FontAwesomeIcon icon={faTwitter} className={style.icon} /></Link>
          <Link href={'#'} className={style.li}><FontAwesomeIcon icon={faInstagram} className={style.icon} /></Link>
          <Link href={'#'} className={style.li}><FontAwesomeIcon icon={faLinkedin} className={style.icon} /></Link>
        </div>
      </div>
      <hr className={style.hr} />
      <p>© Copyright 2021, Weld Group. All rights reserved.</p>
    </div>
  )
}
