import React from 'react'
import style from "../styles/Display.module.css"

const Display = () => {
    return (
        <div className={style.display}>
            <form className={style.form}>
                <div style={{textAlign: "center"}}>
                <h3 className={style.h}>Have a Project on Your Mind ?</h3>
                <h3 className={style.h}>We will find the best solution for your project.</h3>
                </div>
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