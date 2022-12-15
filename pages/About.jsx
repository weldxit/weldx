import React from 'react'
import style from '../styles/About.module.css'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Default from './Default'
import FAQ from '../components/FAQ'
import TheNav from '../components/TheNav'
import Who from '../components/Who'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className={style.section}>
      <TheNav />
      <section className={style.about}>

        <div className={style.ab_image}>

          <Image src={'/idea.gif'} fill={true} alt="team work" />
        </div>
        <div className={style.ab_text}>

          <h1 className={style.ab_text_h1}>A Group of Professional and Innovative Minds</h1>
          <p className={style.ab_text_p}>
            The local and global business are undergoing a new range of digital
            transformation due to the data explosion, and global business are now
            adopting effective data analysis technology and AI solution to expand their
            business. As the digital transformation continues, business experts are
            converging more on quality data analysis and utilizing the data driven AI
            solution to leverage their business and meet their global client’s new and
            ongoing demands.
          </p>
          <p className={style.ab_text_p}>
            Only the raw data does not generate quality information to drive real business
            growth, rather it required AI based data analysis solution and digital
            transformation process. At WeldX, we expertise in data driven analysis and
            solutions that help your business from all aspects.
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
              <Image src={'/vision.png'} fill={true} alt="vision" />

            </div>
            <h2 className={style.expert_vision_h2}>Our Vision</h2>
            <p className={style.expert_vision_p}>
              WeldX committed to help business owners with new range of data analysis
              platform and expand their business with digital transformation. We aim to
              accelerate the transition from data to data driven business decisions.
            </p>
          </div>

          <div className={style.expert_vision}>

            <div className={style.expert_vision_img}>
              <Image src={'/aim.png'} fill={true} alt="vision" />

            </div>
            <h2 className={style.expert_vision_h2}>Our Aim</h2>
            <p className={style.expert_vision_p}>
              At WeldX, we assist local and global business organizations to solve their
              problems by adopting quality data analysis and AI based data driven solutions.
            </p>
          </div>

        </div>
      </section>
      <div>
        <Who />
      </div>
      <div>
        <ContactUs />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}