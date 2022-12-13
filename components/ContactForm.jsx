import React from 'react'
import style from "../styles/ContactForm.module.css"

const ContactForm = () => {
    return (
        <div>
            <form className={style.form}>
                <input type="text" placeholder="Name" className={style.input} />
                <input type="email" placeholder="Email" className={style.input} />
                <input type="number" placeholder="Phone" className={style.input} />
                <button type="submit"className={style.button} >Request a Callback</button>
            </form>
        </div>
    )
}

export default ContactForm