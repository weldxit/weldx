import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
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
    <>
      <Head>
        <title>WeldX – Best Software Development Company in Bhubaneswar, India</title>
        <meta name="description" content="WeldX is the best software development company in Bhubaneswar, India providing high quality software and IT products! Call: 09937 054 201." />
        <link rel="canonical" href="https://weldx.io/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="WeldX – Best Software Development Company in Bhubaneswar, India" />
        <meta property="og:description" content="WeldX is the best software development company in Bhubaneswar, India providing high quality software and IT products! Call: 09937 054 201." />
        <meta property="og:url" content="https://weldx.io/" />
        <meta property="og:site_name" content="WeldX" />
        <meta property="article:modified_time" content="2022-08-02T11:56:57+00:00" />
        <meta property="og:image" content="https://weldx.io/wp-content/uploads/2020/12/shape3.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="12 minutes" />
        <meta name="google-site-verification" content="fEaWI32o3_cnv6qX0rcKltw_7xIiUTVjShx7yEzv2RU" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-THX1D0CNW5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GG-THX1D0CNW5');
        `}
        </Script>
      </Head>
      <div className={style.section}>
        <div className={style.intro}>
          <div className={style.tdiv}>
            <h2 className={style.h1}>Welcome to&nbsp;<span style={{ color: "#0097db" }}>Weld</span><span style={{ color: "#fe2d95" }}>X</span><br />Leading Software Hub in Bhubaneswar</h2>
            <p className={style.p1}>Ideas&nbsp;&nbsp;|&nbsp;&nbsp;Innovation&nbsp;&nbsp;|&nbsp;&nbsp;Execution</p>
          </div>
          <div className={style.mdiv}>
            <Image src={'/team.png'} width={500} height={500} className={style.DisImg} alt="WeldX" />
          </div>
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
    </>
  );
}
