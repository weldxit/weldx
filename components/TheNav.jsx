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
            <Nav.Link href="/"><span style={{color: "#fff", fontWeight: "bold"}}>Hom</span><span style={{color: "#fe2d95", fontWeight: "bold"}}>e</span></Nav.Link>&nbsp;
            <Nav.Link href="/Services"><span style={{color: "#fff", fontWeight: "bold"}}>Service</span><span style={{color: "#fe2d95", fontWeight: "bold"}}>s</span></Nav.Link>&nbsp;
            <Nav.Link href="/Products"><span style={{color: "#fff", fontWeight: "bold"}}>Product</span><span style={{color: "#fe2d95", fontWeight: "bold"}}>s</span></Nav.Link>&nbsp;
            <Nav.Link href="/About"><span style={{color: "#fff", fontWeight: "bold"}}>Abou</span><span style={{color: "#fe2d95", fontWeight: "bold"}}>t</span></Nav.Link>&nbsp;
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default TheNav
