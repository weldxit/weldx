import Image from "next/image";
import React from "react";
import style from "../styles/Default.module.css";
export default function Default() {
  return (
    <div className={style.section}>
      <section className={style.rootcontainer}>
        <div className={style.container}>
          <div className={style.welcometext}>
            <h1 className={style.text}>Welcome to WeldX</h1>
            <h3 className={style.text}>
              <span className={style.idea}>Ideas</span>
              <p className={style.innovation}>Innovation</p>
              <span className={style.execution}>Execution</span>
            </h3>
          </div>
          <div className={style.teamwork}>
            <Image src={"/team.png"} width={400} height={400} alt="logo" />
          </div>
        </div>
      </section>

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

      <section className={style.section3}>
        <div>
          <div className={style.product}>
            <Image
            src={'/'}
            fill={true}
            alt="im am image"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
