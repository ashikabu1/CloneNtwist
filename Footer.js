import React from 'react'
import './Css.css'
import ntwistlight from '../assets/ntwistlight.png'
import { FaTwitter, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='footer'>
        
        <div className='footimg'>
        <img src={ntwistlight} alt="Logo" style={{width:"180px",height:"58px"}}/>
        </div>

        <div className='footnav'>
            <h5>Home</h5>
            <h5>About Us </h5>
            <h5>Contact Us </h5>
            <h5>Privacy Policy </h5>
            <h5>Sitemap</h5>
        </div>

        <div className='footnav1'>
            <p className='address'>
            9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada
            </p>
        </div>

        <div className='footicon'>
            <div className='sp1'><FaTwitter/></div>
            <div className='sp2'><FaLinkedin/></div>
        
        </div>

        <div className='footnav1'>
            <p className='address'>
            © 2022. Ntwist Inc.
            </p>
        </div>

    </div>
  )
}

export default Footer