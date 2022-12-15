import React from 'react'
import Image from 'next/image';
import style from "../styles/Business.module.css"

const Business = () => {
    return (
        <div className={style.Business}>
            <div className={style.Heading}>
                <h1 className={style.H}>Choose What Matters to Your Business and Your Targeted Customers</h1>
                <p className={style.P}>At WeldX, we create and develop high quality android app and provide better web solutions that are used and loved by global clients!</p>
            </div>
            <div className={style.prods}>
                <div className={style.Prod}>
                    <Image className={style.pImg} src={'/icon1.png'} width={100} height={100} alt=""/>
                    <h2 className={style.name}>App Development</h2>
                    <p className={style.des}>Custom built App development services for your business with all advanced features. With our full stack solution App development services, you’ll enjoy an App customized built to your business specification! Let’s work together to build and develop your App that runs fine in iOs and Android.</p>
                    {/* <Image className={style.pImg} src={'/plus.png'} width={200} height={200} alt=""/> */}
                </div>
                <div className={style.Prod}>
                    <Image className={style.pImg} src={'/icon2.png'} width={100} height={100} alt=""/>
                    <h2 className={style.name}>Web Development</h2>
                    <p className={style.des}>Responsive website design and web development services for your business with all customised features. The WeldX provides web development services for the small, medium and enterprise level business that meet both local and global standards. Strengthen your brand recognition with stunning web design & development services.</p>
                    {/* <Image className={style.pImg} src={'/plus.png'} width={200} height={200} alt=""/> */}
                </div>
                <div className={style.Prod}>
                    <Image className={style.pImg} src={'/icon3.png'} width={100} height={100} alt=""/>
                    <h2 className={style.name}>Product Design</h2>
                    <p className={style.des}>WeldX designs amazing software products with innovation to propel your business and give unique products prospects competitive advantage. Take your business into the new heights with our stunning products design services and expand your business brand, response and reputations. Let's work together and win together. </p>
                    {/* <Image className={style.pImg} src={'/plus.png'} width={200} height={200} alt=""/> */}
                </div>
                <div className={style.Prod}>
                    <Image className={style.pImg} src={'/icon4.png'} width={100} height={100} alt=""/>
                    <h2 className={style.name}>Data Analysis</h2>
                    <p className={style.des}>Track and analyze your business with an array of data driven platforms! Transform your business locally and globally with a new range of Data Analysis services from WeldX. We use (Data as a Service) DaaS for helping our global clients analyze their business data with business intelligence and take effective actions for better ROI.</p>
                    {/* <Image className={style.pImg} src={'/plus.png'} width={200} height={200} alt=""/> */}
                </div>
                <div className={style.Prod}>
                    <Image className={style.pImg} src={'/icon5.png'} width={100} height={100} alt=""/>
                    <h2 className={style.name}>Internet of Things</h2>
                    <p className={style.des}>Explore unique IoT (Internet of Things) platform for businesses and organizations with advanced features. Accelerate your business brand identity with IoT (Internet of Things) and advance digital transformation services. Visualize your IoT Data for the business and implement it with effective strategy to ream more business markets.</p>
                    {/* <Image className={style.pImg} src={'/plus.png'} width={200} height={200} alt=""/> */}
                </div>
                <div className={style.Prod}>
                    <Image className={style.pImg} src={'/icon6.png'} width={100} height={100} alt=""/>
                    <h2 className={style.name}>Machine Learning</h2>
                    <p className={style.des}>Grow your business at the pace of technology giants with WeldX. We bring a new range of digital transformation solutions through data and machine learning services for your business and help to expand the global presence! At WeldX, we develop end-to-end machine learning solutions for your particular business needs.</p>
                    {/* <Image className={style.pImg} src={'/plus.png'} width={200} height={200} alt=""/> */}
                </div>
            </div>
        </div>
    )
}

export default Business
