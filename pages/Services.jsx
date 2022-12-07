import React from "react";
import Navbar from "../components/Navbar";

import style from "../styles/Service.module.css";
import Footer from "../components/Footer";
import Image from "next/image";
import Client from "../components/Client";
import TheNav from "../components/TheNav";

export default function Services() {
  return (
    <div className={style.section}>
      <TheNav />
      <section className={style.services}>
        <section>
          <div className={style.each_service}>
            <div className={style.service_text}>
              <h1 className={style.each_service_name}>Web Developement</h1>
              <p className={style.each_service_para}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus recusandae at error magni assumenda nulla accusantium
                fugit quam dolorum minus illum sequi beatae, delectus rem
                quisquam, nisi cupiditate eaque explicabo.
              </p>
            </div>

            <div className={style.service_img}>
              <Image src={"/trust-love.PNG"} fill={true} alt="img" />
            </div>
          </div>
        </section>

        <div className={style.each_service}>
          <div className={style.service_text}>
            <h1 className={style.each_service_name}>Web Developement</h1>
            <p className={style.each_service_para}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus recusandae at error magni assumenda nulla accusantium
              fugit quam dolorum minus illum sequi beatae, delectus rem
              quisquam, nisi cupiditate eaque explicabo.
            </p>
          </div>

          <div className={style.service_img}>
            <Image src={"/trust-love.PNG"} fill={true} alt="img" />
          </div>
        </div>

        <div className={style.each_service}>
          <div className={style.service_text}>
            <h1 className={style.each_service_name}>Web Developement</h1>
            <p className={style.each_service_para}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus recusandae at error magni assumenda nulla accusantium
              fugit quam dolorum minus illum sequi beatae, delectus rem
              quisquam, nisi cupiditate eaque explicabo.
            </p>
          </div>

          <div className={style.service_img}>
            <Image src={"/trust-love.PNG"} fill={true} alt="img" />
          </div>
        </div>

        <div className={style.each_service}>
          <div className={style.service_text}>
            <h1 className={style.each_service_name}>Web Developement</h1>
            <p className={style.each_service_para}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus recusandae at error magni assumenda nulla accusantium
              fugit quam dolorum minus illum sequi beatae, delectus rem
              quisquam, nisi cupiditate eaque explicabo.
            </p>
          </div>

          <div className={style.service_img}>
            <Image src={"/trust-love.PNG"} fill={true} alt="img" />
          </div>
        </div>

        <div className={style.each_service}>
          <div className={style.service_text}>
            <h1 className={style.each_service_name}>Web Developement</h1>
            <p className={style.each_service_para}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus recusandae at error magni assumenda nulla accusantium
              fugit quam dolorum minus illum sequi beatae, delectus rem
              quisquam, nisi cupiditate eaque explicabo.
            </p>
          </div>

          <div className={style.service_img}>
            <Image src={"/trust-love.PNG"} fill={true} alt="img" />
          </div>
        </div>
      </section>
      <div>
        <Client />
      </div>
      <Footer />
    </div>
  );
}
