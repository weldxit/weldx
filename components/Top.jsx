import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';
import style from "../styles/Top.module.css"


const Top = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  

  return (
    <div>
      <FontAwesomeIcon icon={faArrowAltCircleUp} style={{display: visible ? 'inline' : 'none'}} onClick={scrollToTop} className={style.button}/>
    </div>
  )
}

export default Top