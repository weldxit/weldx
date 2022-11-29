import React from "react";
import Navbar from "./components/Navbar";
import style from "../styles/Product.module.css";
import Default from "./Default";
export default function Products() {
  return (
    <div className={style.root}>
      <Navbar />
      <section className={style.section1}>
        <div className={style.erp}>
          <h1 className={style.erp_heading}>Enterprise Resource Planning</h1>
          <div className={style.erp_products}>
            <div className={style.erp_card}>
              <h1 className={style.erp_name}>Educrush Smart School ERP</h1>
              <div className={style.erp_features}>
                <ul className={style.feature_list}>
                  <li>lorem ipsum dolar emet set mat mesu menatsu </li>
                  <li>lorem ipsum dolar emet set mat mesu menatsu</li>
                  <li>lorem ipsum dolar emet set mat mesu menatsu</li>
                  <li>lorem ipsum dolar emet set mat mesu menatsu</li>
                  <li>lorem ipsum dolar emet set mat mesu menatsu</li>
                  <li>lorem ipsum dolar emet set mat mesu menatsu</li>
                  <li>lorem ipsum dolar emet set mat mesu menatsu</li>
                  <li>lorem ipsum dolar emet set mat mesu menatsu</li>
                </ul>
              </div>
            </div>
            <div className={style.erp_card}>my card</div>
            <div className={style.erp_card}>my card</div>
            <div className={style.erp_card}>my card</div>
            <div className={style.erp_card}>my card</div>
          </div>
        </div>
      </section>
    </div>
  );
}
