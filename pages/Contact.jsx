import React from 'react'
import style from "../styles/Contact.module.css";
import TheNav from '../components/TheNav'
import Footer from '../components/Footer'
import Image from 'next/image';
import Link from 'next/link';
import ContactUs from '../components/ContactUs';

const Contact = () => {
    return (
        <div>
            <TheNav />
            <div>
                <div className={style.contact}>
                    <div  className={style.contactUs}>
                    <div>
                        <Image src={'/contactUs.gif'} width={500} height={350} alt="WeldX" className={style.Img}/>
                    </div>
                    <div className={style.texts}>
                        <h1 className={style.texts_h1}>Contact Us</h1>
                        <p className={style.texts_p}>
                            Reach out to WeldX expert with a simple Phone Call or fill out the Form below
                            for a quick consultation. At WeldX, we are committed provide 24 X 7 Customer
                            Support &amp; Services for all our clients. Your Business Solution is Just a Click Away!
                        </p>
                    </div>
                    </div>
                    <div className={style.address}>
                        <div className={style.address_add}>
                            <Image src={'/direction.png'} width={50} height={50} alt="WeldX" />
                            <div><b>Plot No:</b> 309/1801P, Niladri Vihar,<br />Bhubaneswar, Odisha&nbsp;<b>Pin:</b> 751021</div>
                        </div>
                        <span className={style.span}></span>
                        <div className={style.address_add}>
                            <Image src={'/contact.png'} width={50} height={50} alt="WeldX" />
                            <div style={{ marginLeft: "1ch" }}>
                                <span><b>Phone:&nbsp;&nbsp;</b></span>
                                <Link href={'tel: +91 9937054201'}>+91 9937054201</Link><br />
                                <span><b>Email:&nbsp;&nbsp;</b></span>
                                <Link href={'mailto:weldx.it@gmail.com'}>weldx.it@gmail.com</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <ContactUs />
            </div>
            <Footer />
        </div>
    )
}

export default Contact
