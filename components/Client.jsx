import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import style from "../styles/Client.module.css"

const Client = () => {
  return (
    <div className={style.Area}>
      <div className={style.Heading}>
        <h1 className={style.H}>Our Portfolio</h1>
      </div>
      <div className={style.Cards}>
        <div className={style.Card}>
            <Image src={'/propick logo.png'} width={200} height={100} alt="" className={style.Image}/>
        </div>
        <div className={style.Card}>
            <Image src={'/chasicare logo.tif'} width={200} height={100} alt="" className={style.Image}/>
        </div>
        <div className={style.Card}>
            <Image src={'/the quiver logo.png'} width={200} height={100} alt="" className={style.Image}/>
        </div>
        <div className={style.Card}>
            <Image src={'/weldgroup logo.png'} width={200} height={100} alt="" className={style.Image}/>
        </div>
      </div>
    </div>
  )
}

export default Client
