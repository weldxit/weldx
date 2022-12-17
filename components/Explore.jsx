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
                                <Image src={'/PS1.png'} width={326} height={250} alt="Data Innovation Partner" className={style.Img} />
                                <h3 className={style.h}>Rhitwij Mukherjee</h3>
                                <p>Brand Manager, Chasicare</p>
                            </div>
                            <div className={style.Caption}>
                                <p className={style.Pdes}>Have abundant knowledge and expertise in web technologies and build my business website and
                                    App with custom features. Highly recommending the WeldX for their global IT solutions.</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={style.Card}>
                            <div className={style.face}>
                                <Image src={'/PS2.png'} width={326} height={250} alt="Data Innovation Partner" className={style.Img} />
                                <h3 className={style.h}>Priyanka Nanda</h3>
                                <p>BDM, Sx4</p>
                            </div>
                            <div className={style.Caption}>
                                <p className={style.Pdes}>The professional team from WeldX build my website and it works fine for my business. From mobile
                                    responsive to adding the new features they perfectly integrated my business ideas.</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={style.Card}>
                            <div className={style.face}>
                                <Image src={'/PS3.png'} width={326} height={250} alt="Data Innovation Partner" className={style.Img} />
                                <h3 className={style.h}>Subhranshu Khandi</h3>
                                <p>CTO, ITsolN</p>
                            </div>
                            <div className={style.Caption}>
                                <p className={style.Pdes}>Developed my website with stunning design and custom features that my audience love to explore.
                                    Many thanks to WeldX team for their world class IT products and solutions</p>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Explore
