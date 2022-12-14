import React from 'react'
import Image from 'next/image';
import style from '../styles/Explore.module.css'
import Carousel from 'react-bootstrap/Carousel';

const Explore = () => {
    return (
        <div className={style.ExploreArea}>
            <div className={style.heading}>
                <h1 className={style.h1}>Testimonials</h1>
                <p className={style.p}>Story of people inspired by WeldX to Change their live throuhgh our Business Ideas.</p>
            </div>
            <div className={style.Cards}>
                <Carousel>
                    <Carousel.Item>
                        <div className={style.Card}>
                            <div className={style.face}>
                                <Image src={'/SP.jfif'} width={326} height={250} alt="Data Innovation Partner" className={style.Img} />
                                <h3 className={style.h}>Sundar Pichai</h3>
                                <p>CEO, Google</p>
                            </div>
                            <div className={style.Caption}>
                                <p className={style.Pdes}>WeldX brings in it's creative minds and proprietary algorithms to become the best buddy in it's segment and unlock it's real potential to give it's partners a competitive edge.</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={style.Card}>
                            <div className={style.face}>
                                <Image src={'/SP.jfif'} width={326} height={250} alt="Data Innovation Partner" className={style.Img} />
                                <h3 className={style.h}>Sundar Pichai</h3>
                                <p>CEO, Google</p>
                            </div>
                            <div className={style.Caption}>
                                <p className={style.Pdes}>WeldX brings in it's creative minds and proprietary algorithms to become the best buddy in it's segment and unlock it's real potential to give it's partners a competitive edge.</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={style.Card}>
                            <div className={style.face}>
                                <Image src={'/SP.jfif'} width={326} height={250} alt="Data Innovation Partner" className={style.Img} />
                                <h3 className={style.h}>Sundar Pichai</h3>
                                <p>CEO, Google</p>
                            </div>
                            <div className={style.Caption}>
                                <p className={style.Pdes}>WeldX brings in it's creative minds and proprietary algorithms to become the best buddy in it's segment and unlock it's real potential to give it's partners a competitive edge.</p>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Explore
