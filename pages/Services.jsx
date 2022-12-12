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
                
              </p>
            </div>

            <div className={style.service_img}>
              <Image src={"https://cdn.pixabay.com/photo/2016/10/16/16/33/dual-screen-1745705_1280.png"} fill={true} alt="img" />
            </div>
          </div>
        </section>

        <div className={style.each_service}>
          <div className={style.service_text}>
            <h1 className={style.each_service_name}>Android Developement</h1>
            <p className={style.each_service_para}>
            
            </p>
          </div>

          <div className={style.service_img}>
            <Image src={"https://cdn.pixabay.com/photo/2016/09/01/04/34/android-1635206_1280.png"} fill={true} alt="img" />
          </div>
        </div>

        <div className={style.each_service}>
          <div className={style.service_text}>
            <h1 className={style.each_service_name}>Machine Learning</h1>
            <p className={style.each_service_para}>
         
            </p>
          </div>

          <div className={style.service_img}>
            <Image src={"https://www.analyticsinsight.net/wp-content/uploads/2020/02/ML.jpg"} fill={true} alt="img" />
          </div>
        </div>

        <div className={style.each_service}>
          <div className={style.service_text}>
            <h1 className={style.each_service_name}>Digital Transformation (IOT)</h1>
            <p className={style.each_service_para}>
            
            </p>
          </div>

          <div className={style.service_img}>
            <Image src={"https://svitla.com/uploads/0/2327-iot.jpg?1562227999"} fill={true} alt="img" />
          </div>
        </div>

        <div className={style.each_service}>
          <div className={style.service_text}>
            <h1 className={style.each_service_name}>Analytics</h1>
            <p className={style.each_service_para}>
          
            </p>
          </div>

          <div className={style.service_img}>
            <Image src={"https://static.vecteezy.com/system/resources/previews/000/408/086/original/illustration-of-data-analysis-graph-vector.jpg"} fill={true} alt="img" />
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
