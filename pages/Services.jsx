import React from "react";
import style from "../styles/Service.module.css";
import Footer from "../components/Footer";
import Image from "next/image";
import Client from "../components/Client";
import TheNav from "../components/TheNav";
import Display from "../components/Display";
import Explore from "../components/Explore";
import ContactUs from "../components/ContactUs";
import Top from "../components/Top";

export default function Services() {
  return (
    <div className={style.section}>
      <TheNav />
      <div className={style.intro}>
        <div className={style.tdiv}>
          <h2 className={style.h1}>Information Technology Solutions in India</h2>
          <p className={style.p1}>Accelerate your business with our services</p>
        </div>
        <div className={style.mdiv}>
          <Image src={'/service.png'} width={500} height={370} className={style.DisImg} alt="WeldX" />
        </div>
      </div>
      <div>
        <div className={style.Who}>
          <div className={style.sec1} id="app">
            <div className={style.imgDiv}>
              <Image src={'/S1.png'} width={400} height={400} alt="WeldX" className={style.img} />
            </div>
            <div className={style.textDiv}>
              <h3 className={style.h}>App Development</h3>
              <p className={style.p}>Custom built App development services for your business with all advanced features. With our full stack solution App development services, you’ll enjoy an App customized built to your business specification! Let’s work together to build and develop your App that runs fine in iOs and Android.</p>
            </div>
          </div>
          <div className={style.sec2} id="web">
            <div className={style.textDiv}>
              <h3 className={style.h}>Web Development</h3>
              <p className={style.p}>Responsive website design and web development services for your business with all customised features. The WeldX provides web development services for the small, medium and enterprise level business that meet both local and global standards. Strengthen your brand recognition with stunning web design & development services.</p>
            </div>
            <div className={style.imgDiv}>
              <Image src={'/S2.png'} width={400} height={400} alt="WeldX" className={style.img} />
            </div>
          </div>
          <div className={style.sec1} id="pro">
            <div className={style.imgDiv}>
              <Image src={'/S3.png'} width={400} height={400} alt="WeldX" className={style.img} />
            </div>
            <div className={style.textDiv}>
              <h3 className={style.h}>Product Design</h3>
              <p className={style.p}>WeldX designs amazing software products with innovation to propel your business and give unique products prospects competitive advantage. Take your business into the new heights with our stunning products design services and expand your business brand, response and reputations. Let's work together and win together.</p>
            </div>
          </div>
          <div className={style.sec2} id="da">
            <div className={style.textDiv}>
              <h3 className={style.h}>Data Analysis</h3>
              <p className={style.p}>Track and analyze your business with an array of data driven platforms! Transform your business locally and globally with a new range of Data Analysis services from WeldX. We use (Data as a Service) DaaS for helping our global clients analyze their business data with business intelligence and take effective actions for better ROI.</p>
            </div>
            <div className={style.imgDiv}>
              <Image src={'/S4.png'} width={400} height={400} alt="WeldX" className={style.img} />
            </div>
          </div>
          <div className={style.sec1} id="iot">
            <div className={style.imgDiv}>
              <Image src={'/S5.png'} width={400} height={400} alt="WeldX" className={style.img} />
            </div>
            <div className={style.textDiv}>
              <h3 className={style.h}>Internet of Things</h3>
              <p className={style.p}>Explore unique IoT (Internet of Things) platform for businesses and organizations with advanced features. Accelerate your business brand identity with IoT (Internet of Things) and advance digital transformation services. Visualize your IoT Data for the business and implement it with effective strategy to ream more business markets.</p>
            </div>
          </div>
          <div className={style.sec2} id="ml">
            <div className={style.textDiv}>
              <h3 className={style.h}>Machine Learning</h3>
              <p className={style.p}>Grow your business at the pace of technology giants with WeldX. We bring a new range of digital transformation solutions through data and machine learning services for your business and help to expand the global presence! At WeldX, we develop end-to-end machine learning solutions for your particular business needs.</p>
            </div>
            <div className={style.imgDiv}>
              <Image src={'/S6.png'} width={400} height={400} alt="WeldX" className={style.img} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Display />
      </div>
      <div>
        <Client />
      </div>
      <div>
        <Explore />
      </div>
      <div>
        <ContactUs />
      </div>
      <Top />
      <Footer />
    </div>
  );
}
