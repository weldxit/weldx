import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import style from "../styles/Client.module.css"

const Client = () => {
  return (
    <div className={style.Area}>
      <div className={style.Heading}>
        <h1 className={style.H}>Meet Our Clients</h1>
        <p className={style.P}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam dolores recusandae officiis expedita. Quasi labore quisquam nihil odit, nulla exercitationem animi? Ut expedita delectus numquam ipsa aspernatur, adipisci veniam praesentium.</p>
      </div>
      <div className={style.Cards}>
        <div className={style.Card}>
            <Image src={'/propick logo.png'} width={200} height={100} alt="" className={style.Image}/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, incidunt! <Link href="https://propick.in/"><u>see more</u></Link></p>
        </div>
        <div className={style.Card}>
            <Image src={'/chasicare logo.tif'} width={200} height={100} alt="" className={style.Image}/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, incidunt! <Link href="https://chasicare.com/"><u>see more</u></Link></p>
        </div>
        <div className={style.Card}>
            <Image src={'/the quiver logo.png'} width={200} height={100} alt="" className={style.Image}/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, incidunt! <Link href="https://www.thequiver.in/"><u>see more</u></Link></p>
        </div>
        <div className={style.Card}>
            <Image src={'/weldgroup logo.png'} width={200} height={100} alt="" className={style.Image}/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, incidunt! <Link href="https://weldgroup.in/"><u>see more</u></Link></p>
        </div>
      </div>
    </div>
  )
}

export default Client
