import React from 'react'
import style from "../styles/Who.module.css"
import Image from "next/image";

const Who = () => {
    return (
        <div className={style.Who}>
            <div className={style.sec1}>
                <div className={style.imgDiv}>
                    <Image src={'/W1.png'} width={400} height={400} alt="WeldX" className={style.img} />
                </div>
                <div className={style.textDiv}>
                    <h3 className={style.h}>Who We Are ?</h3>
                    <p className={style.p}>WeldX is a leading Data Analytics firm based in Bhubaneswar, India. The WeldX
                        focuses on AI based solutions based on quality data analysis, decision science
                        and machine learning. Focusing on the data analysis and digital transformation
                        solutions, we deeply work on global business demand and create next level
                        business platform and solutions.</p>
                </div>
            </div>
            <div className={style.sec2}>
                <div className={style.textDiv}>
                    <h3 className={style.h}>What We Do ?</h3>
                    <p className={style.p}>As a next generation business solutions provider, the WeldX work and
                        collaborate with global business organizations to analyze and transform their
                        business growth in sustainable way. Take your business into the next level with
                        AI based data analysis and effective solutions. We work and collaborate with
                        small, medium and enterprise level business to reach their business
                        requirements through quality data driven solution and machine learning
                        science.</p>
                </div>
                <div className={style.imgDiv}>
                    <Image src={'/W2.png'} width={400} height={400} alt="WeldX" className={style.img} />
                </div>
            </div>
            <div className={style.sec3}>
                <div className={style.imgDiv}>
                    <Image src={'/W3.png'} width={400} height={400} alt="WeldX" className={style.img} />
                </div>
                <div className={style.textDiv}>
                    <h3 className={style.h}>How We Do ?</h3>
                    <p className={style.p}>WeldX often believe in effective use of the quality Data Analytics by investing,
                        innovating and researching the business process deeply. Let your business
                        grow with the new range of data analysis and AI based data solution
                        technologies.</p>
                </div>
            </div>
        </div>
    )
}

export default Who
