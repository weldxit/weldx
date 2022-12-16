import Image from "next/image";
import React from "react";
import style from "../styles/Default.module.css";
import Navbar from "../components/Navbar";
import Explore from "../components/Explore";
import Business from "../components/Business";
import ContactForm from "../components/ContactForm";
import Display from "../components/Display";
import ContactUs from "../components/ContactUs";
import Client from "../components/Client";
import Top from "../components/Top";
export default function Default() {
  return (
    <div className={style.section}>
      {/* <section className={style.rootcontainer}>
        <div className={style.container}>
          <div className={style.welcometext}>
            <h1 className={style.text}>Welcome to&nbsp;<span style={{ color: "#0097db" }}>Weld</span><span style={{ color: "#fe2d95" }}>X</span></h1>
            <h3 className={style.text}>
              <span className={style.idea}>Ideas</span>
              <p className={style.innovation}>Innovation</p>
              <span className={style.execution}>Execution</span>
            </h3>
          </div>
          <div className={style.teamwork}>
            <div className={style.cf}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section> */}
      <div className={style.intro}>
        <div className={style.tdiv}>
          <h2 className={style.h1}>Welcome to&nbsp;<span style={{ color: "#0097db" }}>Weld</span><span style={{ color: "#fe2d95" }}>X</span><br />Leading Software Hub in Bhubaneswar</h2>
          <p className={style.p1}>Ideas&nbsp;&nbsp;|&nbsp;&nbsp;Innovation&nbsp;&nbsp;|&nbsp;&nbsp;Execution</p>
        </div>
        <div className={style.mdiv}>
          <Image src={'/team.png'} width={500} height={500} className={style.DisImg} alt="WeldX" />
        </div>
      </div>

      <div className={style.paragraph}>
        <p></p>
      </div>

      <div>
        <Business />
      </div>
      <div>
        <Display />
      </div>
      <div style={{ padding: "20px" }}>
        <h1 className={style.H}>This is How We Operate</h1>
        <p className={style.P}></p>
        <div style={{ width: "100%", textAlign: "center" }}>
          <Image src={'/saurav.png'} width={1000} height={500} className={style.saurav} />
        </div>
      </div>
      <div>
        <Client />
      </div>
      <div>
        <Display />
      </div>
      <div>
        <Explore />
      </div>
      <div>
        <ContactUs />
      </div>
      <Top />
    </div>
  );
}
