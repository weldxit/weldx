import React from "react";
import Navbar from "../components/Navbar";
import style from "../styles/Product.module.css";
import Default from "./Default";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import TheNav from "../components/TheNav";
import ContactUs from "../components/ContactUs";
import Display from "../components/Display";
import Explore from "../components/Explore";
import Top from "../components/Top";
export default function Products() {
  return (
    <div className={style.root}>
      <TheNav />
      <div className={style.intro}>
        <div className={style.tdiv}>
          <h2 className={style.h1}>Exhibition of all Your Digital Need</h2>
          <p className={style.p1}>Accelerate your business with our Digital Product</p>
        </div>
        <div className={style.mdiv}>
          <Image src={'/product.png'} width={500} height={370} className={style.DisImg} alt="WeldX" />
        </div>
      </div>
      <div className={style.Business}>
        <div className={style.Heading}>
          <h1 className={style.H}>Fulfill your Need with our modern Products</h1>
        </div>
        <div className={style.prods}>
          <div className={style.Prod}>
            <Link href={'/Products/#ERP'}><Image className={style.pImg} src={'/Picon1.png'} width={100} height={100} alt="" /></Link>
            <h2 className={style.name}>Enterprise Resource Planning</h2>
          </div>
          <div className={style.Prod}>
            <Link href={'/Products/#SSM'}><Image className={style.pImg} src={'/Picon2.png'} width={100} height={100} alt="" /></Link>
            <h2 className={style.name}>Smart School Management</h2>
          </div>
          <div className={style.Prod}>
            <Link href={'/Products/#SHM'}><Image className={style.pImg} src={'/Picon3.png'} width={100} height={100} alt="" /></Link>
            <h2 className={style.name}>Smart Hospital Management</h2>
          </div>
          <div className={style.Prod}>
            <Link href={'/Products/#SSSS'}><Image className={style.pImg} src={'/Picon4.png'} width={100} height={100} alt="" /></Link>
            <h2 className={style.name}>Smart Security & Survelliance System</h2>
          </div>
          <div className={style.Prod}>
            <Link href={'/Products/#SCM'}><Image className={style.pImg} src={'/Picon5.png'} width={100} height={100} alt="" /></Link>
            <h2 className={style.name}>Smart Clinic Management</h2>
          </div>
          <div className={style.Prod}>
            <Link href={'/Products/#ECM'}><Image className={style.pImg} src={'/Picon6.png'} width={100} height={100} alt="" /></Link>
            <h2 className={style.name}>e-Commerce</h2>
          </div>
        </div>
      </div>
      <div>
        <Display />
      </div>
      <div className={style.Who}>
        <div className={style.sec1} id="ERP">
          <div className={style.imgDiv}>
            <Image src={'/Pr1.png'} width={400} height={400} alt="WeldX" className={style.img} />
          </div>
          <div className={style.textDiv}>
            <h3 className={style.h}>Enterprise Resource Planning</h3>
            <ul className={style.p}>
              <li>Automation</li>
              <li>Data analysis</li>
              <li>Inventory management</li>
              <li>Accounting</li>
              <li>Financial management</li>
              <li>Tracking and visibility</li>
              <li>Sales and marketing</li>
              <li>Customer relationship management</li>
              <li>Supply chain management</li>
              <li>Manufacturing</li>
            </ul>
          </div>
        </div>
        <div className={style.sec2} id="SSM">
          <div className={style.textDiv}>
            <h3 className={style.h}>Smart School Management</h3>
            <ul className={style.p}>
              <li>Student Information</li>
              <li>Teacher Information</li>
              <li>Attendance Management</li>
              <li>Online Assignments and Assessments</li>
              <li>Report Card Generation</li>
              <li>Fee Management System</li>
              <li>Admission Management</li>
              <li>Transport Management</li>
              <li>Library Management</li>
              <li>Parent Communication</li>
            </ul>
          </div>
          <div className={style.imgDiv}>
            <Image src={'/Pr2.png'} width={400} height={400} alt="WeldX" className={style.img} />
          </div>
        </div>
        <div className={style.sec1} id="SHM">
          <div className={style.imgDiv}>
            <Image src={'/Pr3.png'} width={400} height={400} alt="WeldX" className={style.img} />
          </div>
          <div className={style.textDiv}>
            <h3 className={style.h}>Smart Hospital Management</h3>
            <ul className={style.p}>
              <li>Appointment Scheduling And Patient Registration</li>
              <li>Inpatient Registration, Boarding And Billing</li>
              <li>Consultation Management</li>
              <li>Digital Imaging And Diagnostics Management</li>
              <li>Intuitive And Useful Patient Portal</li>
              <li>Staff Interaction And Collaboration</li>
              <li>Workforce Management</li>
              <li>Lab Management</li>
              <li>Pharmacy And Store Management</li>
              <li>Prescription Renewals And Cancellations</li>
            </ul>
          </div>
        </div>
        <div className={style.sec2} id="SSSS">
          <div className={style.textDiv}>
            <h3 className={style.h}>Smart Security & Surveillance System</h3>
            <ul className={style.p}>
              <li>Fire detection</li>
              <li>Smoke detection</li>
              <li>Person detection</li>
              <li>Surveillance camera</li>
              <li>One tap live footage</li>
              <li>One tap fire station calling</li>
              <li>One tap notification</li>
              <li>Video storage</li>
            </ul>
          </div>
          <div className={style.imgDiv}>
            <Image src={'/Pr4.png'} width={400} height={400} alt="WeldX" className={style.img} />
          </div>
        </div>
        <div className={style.sec1} id="SCM">
          <div className={style.imgDiv}>
            <Image src={'/Pr5.jpg'} width={400} height={400} alt="WeldX" className={style.img} />
          </div>
          <div className={style.textDiv}>
            <h3 className={style.h}>Smart Clinic Management</h3>
            <ul className={style.p}>
              <li>Electronic Medical Records</li>
              <li>Appointment Scheduling</li>
              <li>Patient Registration</li>
              <li>Appointments Booking Mobile App</li>
              <li>Sample Management</li>
              <li>Visit Management</li>
              <li>Lab Management</li>
              <li>Prescription Renewals And Cancellations</li>
              <li>Insurance</li>
            </ul>
          </div>
        </div>
        <div className={style.sec2} id="ECM">
          <div className={style.textDiv}>
            <h3 className={style.h}>e-Commerce</h3>
            <ul className={style.p}>
              <li>Seller registration</li>
              <li>Buyer registration</li>
              <li>Payment interface</li>
              <li>Delivery and Logistics</li>
              <li>Gaint market</li>
              <li>Global reachness</li>
              <li>No middleman</li>
              <li>Advertisement</li>
            </ul>
          </div>
          <div className={style.imgDiv}>
            <Image src={'/Pr6.png'} width={400} height={400} alt="WeldX" className={style.img} />
          </div>
        </div>
      </div>
      <iv>
        <Explore />
      </iv>
      <div>
        <ContactUs />
      </div>
      <Top />
      <Footer />
    </div>
  );
}
