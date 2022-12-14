import React from 'react'
import style from "../styles/ContactUs.module.css"

const ContactUs = () => {
  return (
    <div>
      <form className={style.form}>
        <h3 className={style.h}>Contact Us</h3>
        <div className={style.div}>
          <div className={style.div1}>
            <input type="text" placeholder='Enter Name' className={style.input} />
            <input type="email" placeholder='Enter Email Address' className={style.input} />
            <input type="number" placeholder='Enter Phone' className={style.input} />
            <input type="text" placeholder='Enter Subject' className={style.input} />
          </div>
          <div className={style.div2}>
            <textarea placeholder='Write Your Message Here...' className={style.textarea}></textarea>
          </div>
        </div>
        <button type='submit' className={style.button}>Contact Us</button>
      </form>
    </div>
  )
}

export default ContactUs