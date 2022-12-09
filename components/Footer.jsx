import React from 'react'
import Image from "next/image";
import Link from "next/link";
import style from "../styles/Footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


export default function () {
  return (
    <div className={style.Footer}>
      <div className={style.footerSec}>
        <div className={style.brandDiv}>
        <Image src={'/weld x png.png'} width={80} height={40} />
        </div>
        <div className={style.linksDiv}>
          <div>
            <p><span style={{color: "#fff", fontWeight: "bold"}}>PRODUC</span><span style={{color: "#fe2d95", fontWeight: "bold"}}>T</span></p>
            <ul className={style.ul}>
              <li><Link href={'#'} className={style.li}><span>Features</span></Link></li>
              <li><Link href={'#'} className={style.li}><span>Integrations</span></Link></li>
              <li><Link href={'#'} className={style.li}><span>Pricing</span></Link></li>
              <li><Link href={'#'} className={style.li}><span>FAQ</span></Link></li>
            </ul>
          </div>
          <div>
            <p><span style={{color: "#fff", fontWeight: "bold"}}>COMPAN</span><span style={{color: "#fe2d95", fontWeight: "bold"}}>Y</span></p>
            <ul className={style.ul}>
              <li><Link href={'#'} className={style.li}><span>Privacy</span></Link></li>
              <li><Link href={'#'} className={style.li}><span>Teams of Service</span></Link></li>
            </ul>
          </div>
          <div>
            <p><span style={{color: "#fff", fontWeight: "bold"}}>DEVELOPER</span><span style={{color: "#fe2d95", fontWeight: "bold"}}>S</span></p>
            <ul className={style.ul}>
              <li><Link href={'#'} className={style.li}><span>Public API</span></Link></li>
              <li><Link href={'#'} className={style.li}><span>Documentation</span></Link></li>
              <li><Link href={'#'} className={style.li}><span>Guides</span></Link></li>
            </ul>
          </div>
        </div>
        <div className={style.mediaDiv}>
          <p><span style={{color: "#fff", fontWeight: "bold"}}>SOCIAL MEDI</span><span style={{color: "#fe2d95", fontWeight: "bold"}}>A</span></p>
          <Link href={'#'} className={style.li}><FontAwesomeIcon icon={faFacebook} className={style.icon} /></Link>
          <Link href={'#'} className={style.li}><FontAwesomeIcon icon={faTwitter} className={style.icon} /></Link>
          <Link href={'#'} className={style.li}><FontAwesomeIcon icon={faInstagram} className={style.icon} /></Link>
        </div>
      </div>
      <hr className={style.hr} />
      <p>© Copyright 2021, Weld Group. All rights reserved.</p>
    </div>
  )
}
