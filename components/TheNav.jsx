import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from "next/image";
import style from '../styles/Navbar.module.css'

const TheNav = () => {
  return (
    <div className={style.navbar}>
      <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/">
            <Image src={'/weld x png.png'} width={80} height={40} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            <Nav.Link href="/" className={style.navButton}><span style={{color: "#fff"}}>Hom</span><span style={{color: "#fe2d95"}}>e</span></Nav.Link>&nbsp;
            <Nav.Link href="/Services" className={style.navButton}><span style={{color: "#fff"}}>Service</span><span style={{color: "#fe2d95"}}>s</span></Nav.Link>&nbsp;
            <Nav.Link href="/Products" className={style.navButton}><span style={{color: "#fff"}}>Product</span><span style={{color: "#fe2d95"}}>s</span></Nav.Link>&nbsp;
            <Nav.Link href="/About" className={style.navButton}><span style={{color: "#fff"}}>About&nbsp;U</span><span style={{color: "#fe2d95"}}>s</span></Nav.Link>&nbsp;
            <Nav.Link href="/Contact" className={style.navButton}><span style={{color: "#fff"}}>Contac</span><span style={{color: "#fe2d95"}}>t</span></Nav.Link>&nbsp;
            <Nav.Link href="/FAQ" className={style.navButton}><span style={{color: "#fff"}}>FA</span><span style={{color: "#fe2d95"}}>Q</span></Nav.Link>&nbsp;
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default TheNav
