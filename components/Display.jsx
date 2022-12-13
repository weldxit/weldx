import React from 'react'
import style from "../styles/Display.module.css"

const Display = () => {
    return (
        <div className={style.display}>
            <form className={style.form}>
                <h3>Have a Project on Your Mind ?</h3>
                <div className={style.inputs}>
                    <input type="text" placeholder="Name" className={style.input} />
                    <input type="email" placeholder="Email" className={style.input} />
                    <input type="number" placeholder="Phone" className={style.input} />
                </div>
                <div>
                    <button type="submit" className={style.button} >Request a Callback</button>
                </div>
            </form>
        </div>
    )
}

export default Display