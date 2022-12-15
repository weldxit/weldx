import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "../styles/404.module.css";
import TheNav from '../components/TheNav'
import Footer from '../components/Footer'

const Custom404 = () => {
  return (
    <div>
      <TheNav />
      <div className={style.Whole}>
        <Image
          src={"/not.png"}
          width={550}
          height={350}
          alt="WeldX"
          className={style.image}
        />
        <p>404 | Not Found</p>
        Click Here to Go to <Link href={"/"}>WeldX</Link>
      </div>
      <Footer />
    </div>
  );
};

export default Custom404;
