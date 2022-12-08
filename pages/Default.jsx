import Image from "next/image";
import React from "react";
import style from "../styles/Default.module.css";
import Navbar from "../components/Navbar";
import Explore from "../components/Explore";
import Business from "../components/Business";
export default function Default() {
  return (
    <div className={style.section}>
      <section className={style.rootcontainer}>
        <div className={style.container}>
          <div className={style.welcometext}>
            <h1 className={style.text}>Welcome to&nbsp;<span style={{color: "#0097db"}}>Weld</span><span style={{color: "#fe2d95"}}>X</span></h1>
            <h3 className={style.text}>
              <span className={style.idea}>Ideas</span>
              <p className={style.innovation}>Innovation</p>
              <span className={style.execution}>Execution</span>
            </h3>
          </div>
          <div className={style.teamwork}>
            <Image src={"/team.png"} width={400} height={400} alt="logo" className={style.displayImage}/>
          </div>
        </div>
      </section>

      <div className={style.paragraph}>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, dolore optio? Nemo quibusdam explicabo eius rem neque error, dignissimos, beatae iure animi dolor asperiores hic recusandae debitis nesciunt accusantium a? Saepe sunt, adipisci recusandae quos sit eum dicta, mollitia alias ex veritatis veniam consequatur? Magni dolorum repellendus corporis repellat nesciunt!</p>
      </div>

      <div>
        <Business />
      </div>
      <div style={{padding: "20px"}}>
      <h1 className={style.H}>This is How We Operate</h1>
      <p className={style.P}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem alias quae tenetur quod cumque vitae doloribus temporibus odit placeat amet quo minima at nam consequuntur suscipit corrupti, nemo ut iusto?</p>
      <div style={{width: "100%", textAlign: "center"}}>
      <Image src={'/saurav.png'} width={1000} height={500} className={style.saurav}/>
      </div>
      </div>
      <div>
        <Explore />
      </div>

      
    </div>
  );
}
