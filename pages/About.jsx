import React from 'react'
import style from '../styles/About.module.css'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Default from './Default'
import FAQ from '../components/FAQ'
export default function About() {
  return (
    <div className={style.section}>
      <Navbar />
      <section className={style.about}>

        <div className={style.ab_image}>

          <Image src={'/teamwork.png'} fill={true} alt="team work" />
        </div>
        <div className={style.ab_text}>

          <h1 className={style.ab_text_h1}>A Group of Innovative and Risk Taking Minds</h1>
          <p className={style.ab_text_p}>
            Global business is undergoing a new range of digital transformation due to the data explosion, and business owners are now adopting an effective data analysis technology, AI and machine learning solutions to expand their business from all aspects.
          </p>
          <p className={style.ab_text_p}>
            Only the raw data does not generate quality information to drive real business growth. At WeldX, we expertise in data driven analysis and AI based solutions that help your business to grow and meet global clients demand.
          </p>
        </div>

      </section>

      <section className={style.expert}>

        <div className={style.expert_text}>
          <h1 className={style.expert_text_h1}> Expertise in Diverse Business Verticals</h1>
          <h2 className={style.expert_text_h2}>Flawless Incorporation</h2>
          <h2 className={style.expert_text_h2}>Seamless Management</h2>
        </div>

        <div style={{ display: "flex" }}>
          <div className={style.expert_vision}>

            <div className={style.expert_vision_img}>
              <Image src={'/teamwork.png'} fill={true} alt="vision" />

            </div>
            <h2 className={style.expert_vision_h2}>Our Vision</h2>
            <p className={style.expert_vision_p}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ducimus delectus nisi dolores eveniet enim totam obcaecati culpa, dignissimos saepe est alias numquam et earum ipsa dolorem eligendi error nemo!
            </p>
          </div>

          <div className={style.expert_vision}>

            <div className={style.expert_vision_img}>
              <Image src={'/teamwork.png'} fill={true} alt="vision" />

            </div>
            <h2 className={style.expert_vision_h2}>Our Aim</h2>
            <p className={style.expert_vision_p}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ducimus delectus nisi dolores eveniet enim totam obcaecati culpa, dignissimos saepe est alias numquam et earum ipsa dolorem eligendi error nemo!
            </p>
          </div>

        </div>
      </section>
      <div>
        <FAQ />
      </div>
    </div>
  )
}