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

      <div>
        <Business />
      </div>

      <section className={style.section2}>
        <div className={style.sec2div}>
          <div className={style.sec2div2}>
            <div className={style.sec3div2div}>
              <h1 className={style.verticaltext}>Faster Developement</h1>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                expedita voluptatum distinctio possimus, nulla veritatis earum
                cumque dolores nihil fugiat eveniet, hic quia placeat, sequi
                deleniti tempore! Amet, eos aut. Earum exercitationem
              </p>
            </div>
          </div>

          <div className={style.sec2div2}>
            <div className={style.sec3div2div}>
              <h1 className={style.verticaltext}>Faster Developement</h1>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                expedita voluptatum distinctio possimus, nulla veritatis earum
                cumque dolores nihil fugiat eveniet, hic quia placeat, sequi
                deleniti tempore! Amet, eos aut. Earum exercitationem
              </p>
            </div>
          </div>

          <div className={style.sec2div2}>
            <div className={style.sec3div2div}>
              <h1 className={style.verticaltext}>Faster Developement</h1>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                expedita voluptatum distinctio possimus, nulla veritatis earum
                cumque dolores nihil fugiat eveniet, hic quia placeat, sequi
                deleniti tempore! Amet, eos aut. Earum exercitationem
              </p>
            </div>
          </div>

          <div className={style.sec2div2}>
            <div className={style.sec3div2div}>
              <h1 className={style.verticaltext}>Faster Developement</h1>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                expedita voluptatum distinctio possimus, nulla veritatis earum
                cumque dolores nihil fugiat eveniet, hic quia placeat, sequi
                deleniti tempore! Amet, eos aut. Earum exercitationem
              </p>
            </div>
          </div>

          <div className={style.sec2div2}>
            <div className={style.sec3div2div}>
              <h1 className={style.verticaltext}>Faster Developement</h1>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                expedita voluptatum distinctio possimus, nulla veritatis earum
                cumque dolores nihil fugiat eveniet, hic quia placeat, sequi
                deleniti tempore! Amet, eos aut. Earum exercitationem
              </p>
            </div>
          </div>
        </div>
      </section>

      <div>
        <Explore />
      </div>

      
    </div>
  );
}
