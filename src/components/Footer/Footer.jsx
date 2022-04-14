import React from 'react'
import './Footer.css'
import Logo from '../../assets/logo.png'


const Footer = () => {
  return (
    <div className='footer-container'>
      <div>
         <img className='logo2' src={Logo} alt="" />
      </div>
      <div className='footer-box'>
        <div className='box-columns'>
          <div className='soluciones-column'>
            <h3>Soluciones</h3>
            <p>Soluciones</p>
            <p>More</p>
          </div>
            <p>Privacy Police</p>
        </div>
        <div className='box-columns'>
          <div className='soluciones-column'>
            <h3>Company</h3>
            <p>About ECO S.A.</p>
            <p>Careers</p>
            </div>
          <p>Terms of Use</p>
        </div>
        <div className='box-columns'>
          <div className='soluciones-column'>
            <h3>Socials</h3>
            <p>LinkedIn</p>
            <p>Instagram</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer