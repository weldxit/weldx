import React from 'react'
import Image from 'next/image';
import style from "../styles/Business.module.css"

const Business = () => {
    return (
        <div className={style.Business}>
            <div className={style.Heading}>
                <h1 className={style.H}>Choose What Matters to Your Business and Your Targeted Customers</h1>
                <p className={style.P}>At WeldX, we create and develop high quality analytics products and provide better analytics solutions that are used and loved by global clients!</p>
            </div>
            <div className={style.prods}>
                <div className={style.Prod}>
                    <Image className={style.pImg} src={'/icon1.png'} width={100} height={100} alt=""/>
                    <h2 className={style.name}>Art of Problem Solving</h2>
                    <p className={style.des}>At WeldX, we make the change where traditional methods can’t keep up with today’s pace of business change.</p>
                    {/* <Image className={style.pImg} src={'/plus.png'} width={200} height={200} alt=""/> */}
                </div>
                <div className={style.Prod}>
                    <Image className={style.pImg} src={'/icon2.png'} width={100} height={100} alt=""/>
                    <h2 className={style.name}>Data as a Service</h2>
                    <p className={style.des}>We use DaaS (Data as a Services) for helping our clients analyzing data with business intelligence.</p>
                    {/* <Image className={style.pImg} src={'/plus.png'} width={200} height={200} alt=""/> */}
                </div>
                <div className={style.Prod}>
                    <Image className={style.pImg} src={'/icon3.png'} width={100} height={100} alt=""/>
                    <h2 className={style.name}>Man-Machine Ecosystem</h2>
                    <p className={style.des}>We bring decision scientists and apply them to a cross industry client base.</p>
                    {/* <Image className={style.pImg} src={'/plus.png'} width={200} height={200} alt=""/> */}
                </div>
                <div className={style.Prod}>
                    <Image className={style.pImg} src={'/icon4.png'} width={100} height={100} alt=""/>
                    <h2 className={style.name}>Machine Learning</h2>
                    <p className={style.des}>We use next level algorithms that can improve automatically by the use of data and experience.</p>
                    {/* <Image className={style.pImg} src={'/plus.png'} width={200} height={200} alt=""/> */}
                </div>
                <div className={style.Prod}>
                    <Image className={style.pImg} src={'/icon5.png'} width={100} height={100} alt=""/>
                    <h2 className={style.name}>Innovation Lab</h2>
                    <p className={style.des}>Our Innovation Lab researches, prototypes, and helps deploy the next generation BI Services.</p>
                    {/* <Image className={style.pImg} src={'/plus.png'} width={200} height={200} alt=""/> */}
                </div>
                <div className={style.Prod}>
                    <Image className={style.pImg} src={'/icon6.png'} width={100} height={100} alt=""/>
                    <h2 className={style.name}>Customer Support</h2>
                    <p className={style.des}>At WeldX, we assist in making cost effective and correct use solutions we provide.</p>
                    {/* <Image className={style.pImg} src={'/plus.png'} width={200} height={200} alt=""/> */}
                </div>
            </div>
        </div>
    )
}

export default Business
