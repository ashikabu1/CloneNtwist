import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Navbar, Container, Nav,  NavDropdown } from "react-bootstrap"
import ntwistlight from '../assets/ntwistlight.png'
import ntwist from '../assets/ntwist.png'
import './Css.css'


const Header = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [navbarColor, setNavbarColor] = useState("transparent"); 
  const [logo, setLogo] = useState(ntwistlight); 

  useEffect(() => {
      const onScroll = () => {
          if (window.scrollY > 50) {
              setScrolled(true);
              setNavbarColor("#ffffff"); 
              setLogo(ntwist); 
          } else {
              setScrolled(false);
              setNavbarColor("transparent"); 
              setLogo(ntwistlight); 
          }
      };

      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
      setActiveLink(value);
  };

  return (
    <div>
         <Navbar expand="lg" className={scrolled ? "scrolled" : ""} style={{ backgroundColor: navbarColor }}>
    <Container>
      <Navbar.Brand href="#home">
        <img src={logo} alt="Logo" style={{width:"11rem",height:"3rem"}}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
          <NavDropdown  title="Industries"  className= 'Industries' >
                                <NavDropdown.Item href="https://ntwist.com/project/sustainability-assistant">Sustainability</NavDropdown.Item>
                                <NavDropdown.Item href="https://ntwist.com/metal-mining">Mineral Processing</NavDropdown.Item>
                                <NavDropdown.Item href="https://ntwist.com/mine-to-mill-to-mine-optimization">Mine-To-Mill-To-Mine Optimization</NavDropdown.Item>
                                <NavDropdown.Item href="https://ntwist.com/oil-gas">Oil & Gas</NavDropdown.Item>
                            </NavDropdown>
          <Nav.Link href="https://ntwist.com/ai-software" className={activeLink === 'AI Software' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('AI Software')}>AI Software</Nav.Link>
          <Nav.Link href="https://ntwist.com/blog" className={activeLink === 'Blog' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Blog')}>Blog</Nav.Link>
          <Nav.Link href="https://ntwist.com/contact-us" className={activeLink === 'Contact Us' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Contact Us')}>Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}

export default Header