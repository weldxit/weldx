import React from 'react'
import Image from 'next/image';
import style from '../styles/Explore.module.css'

const Explore = () => {
    return (
        <div className={style.ExploreArea}>
            <div className={style.heading}>
                <h1 className={style.h1}>Brainstorming Business Ideas and Strategies That Works!</h1>
                <p className={style.p}>Do you have the talents, processes or platforms to keep up with the data deluge? At WeldX, we do! Lets work together and grow!</p>
            </div>
            <div className={style.Cards}>
                <div className={style.Card}>
                    <Image src={'/1.jpg'} width={326} height={250} alt="Data Innovation Partner"  className={style.Img}/>
                    <h3 className={style.h}>Data Innovation Partner</h3>
                    <p className={style.Pdes}>WeldX brings in it's creative minds and proprietary algorithms to become the best buddy in it's segment and unlock it's real potential to give it's partners a competitive edge.</p>
                </div>
                <div className={style.Card}>
                    <Image src={'/2.jpg'} width={326} height={250} alt="Data Innovation Partner"  className={style.Img}/>
                    <h3 className={style.h}>Culture Change Consultant</h3>
                    <p className={style.Pdes}>WeldX has designed some of the most unique programs to develop the culture of data literacy and help them in innovation their workplace of organizations. BI-driven decision intelligence and analytics platform.</p>
                </div>
                <div className={style.Card}>
                    <Image src={'/3.jpg'} width={326} height={250} alt="Data Innovation Partner"  className={style.Img}/>
                    <h3 className={style.h}>Knowledge Partner</h3>
                    <p className={style.Pdes}>WeldX have different training programs with various customized modules within them which can take care of the learning aspiration of the respective audience.</p>
                </div>
            </div>
        </div>
    )
}

export default Explore
