import React from "react";
import style from "../styles/Service.module.css";
import Footer from "../components/Footer";
import Image from "next/image";
import Client from "../components/Client";
import TheNav from "../components/TheNav";
import Display from "../components/Display";
import Explore from "../components/Explore";
import ContactUs from "../components/ContactUs";

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
        <Client />
      </div>
      <div>
        <Display />
      </div>
      <div>
        <div className={style.Who}>
          <div className={style.sec1}>
            <div className={style.imgDiv}>
              <Image src={'/S1.png'} width={400} height={400} alt="WeldX" className={style.img} />
            </div>
            <div className={style.textDiv}>
              <h3 className={style.h}>App Development</h3>
              <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam asperiores eum provident omnis aliquid voluptatem quia distinctio explicabo repellat labore accusamus nam debitis pariatur esse accusantium, in, delectus veritatis consequatur nobis odio repellendus. Placeat veniam recusandae ducimus totam dolorem eius explicabo beatae autem, odit tempora expedita vitae nisi molestias.</p>
            </div>
          </div>
          <div className={style.sec2}>
            <div className={style.textDiv}>
              <h3 className={style.h}>Web Development</h3>
              <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam asperiores eum provident omnis aliquid voluptatem quia distinctio explicabo repellat labore accusamus nam debitis pariatur esse accusantium, in, delectus veritatis consequatur nobis odio repellendus. Placeat veniam recusandae ducimus totam dolorem eius explicabo beatae autem, odit tempora expedita vitae nisi molestias.</p>
            </div>
            <div className={style.imgDiv}>
              <Image src={'/S2.png'} width={400} height={400} alt="WeldX" className={style.img} />
            </div>
          </div>
          <div className={style.sec1}>
            <div className={style.imgDiv}>
              <Image src={'/S3.png'} width={400} height={400} alt="WeldX" className={style.img} />
            </div>
            <div className={style.textDiv}>
              <h3 className={style.h}>Product Design</h3>
              <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam asperiores eum provident omnis aliquid voluptatem quia distinctio explicabo repellat labore accusamus nam debitis pariatur esse accusantium, in, delectus veritatis consequatur nobis odio repellendus. Placeat veniam recusandae ducimus totam dolorem eius explicabo beatae autem, odit tempora expedita vitae nisi molestias.</p>
            </div>
          </div>
          <div className={style.sec2}>
            <div className={style.textDiv}>
              <h3 className={style.h}>Data Analysis</h3>
              <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam asperiores eum provident omnis aliquid voluptatem quia distinctio explicabo repellat labore accusamus nam debitis pariatur esse accusantium, in, delectus veritatis consequatur nobis odio repellendus. Placeat veniam recusandae ducimus totam dolorem eius explicabo beatae autem, odit tempora expedita vitae nisi molestias.</p>
            </div>
            <div className={style.imgDiv}>
              <Image src={'/S4.png'} width={400} height={400} alt="WeldX" className={style.img} />
            </div>
          </div>
          <div className={style.sec1}>
            <div className={style.imgDiv}>
              <Image src={'/S5.png'} width={400} height={400} alt="WeldX" className={style.img} />
            </div>
            <div className={style.textDiv}>
              <h3 className={style.h}>Internet of Things</h3>
              <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam asperiores eum provident omnis aliquid voluptatem quia distinctio explicabo repellat labore accusamus nam debitis pariatur esse accusantium, in, delectus veritatis consequatur nobis odio repellendus. Placeat veniam recusandae ducimus totam dolorem eius explicabo beatae autem, odit tempora expedita vitae nisi molestias.</p>
            </div>
          </div>
          <div className={style.sec2}>
            <div className={style.textDiv}>
              <h3 className={style.h}>Machine Learning</h3>
              <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam asperiores eum provident omnis aliquid voluptatem quia distinctio explicabo repellat labore accusamus nam debitis pariatur esse accusantium, in, delectus veritatis consequatur nobis odio repellendus. Placeat veniam recusandae ducimus totam dolorem eius explicabo beatae autem, odit tempora expedita vitae nisi molestias.</p>
            </div>
            <div className={style.imgDiv}>
              <Image src={'/S6.png'} width={400} height={400} alt="WeldX" className={style.img} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Explore />
      </div>
      <div>
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}
