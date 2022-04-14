import React, { useState, useEffect } from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import  { GiHamburgerMenu }  from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { GrHomeRounded } from 'react-icons/gr';

const NavBar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)

  return (
    <div className='Nav'>
        <div>
          <Link to='/'><h1 className='logo'>Marga Marga</h1></Link>
            </div>
                <ul className='Nav-list'>
                  <li className='Links'><Link to='/'>Inicio</Link></li>
                  <li className='Links'><Link to='/about'>Sobre Nosotros</Link></li>
                  {/* <li className='Links'><Link to='/ecommerce'>Ecommerce</Link></li> */}
                  <li className='Links'><Link to='/contact'>Contacto</Link></li>
                </ul>
                <div className='Nav-buttons'>
                  {/* <Link to='/usuario'><button className='nav-btn'>Ingresar</button></Link> */}
                  {/* <Link to='/resgistros'><button className='nav-btn'>Registrarse</button></Link> */}
                </div>

            <div className='burger'>
              <GiHamburgerMenu onClick= { handleClick } />
              {click => (<AiOutlineClose />) }
            </div>

            <div className={click ? 'display-menu active' : 'display-menu'}>
                  <ul className='display-menu-list'>
                          <div className='burger-close' onClick= { handleClick }>
                              <AiOutlineClose />
                          </div>
                      <li className='Links-display'><Link to='/'>Inicio</Link></li>
                      <li className='Links-display'><Link to='/about'>Sobre Nosotros</Link></li>
                      <li className='Links-display'><Link to='/ecommerce'>Ecommerce</Link></li>
                      <li className='Links-display'><Link to='/contact'>Contacto</Link></li>
                  </ul> 
            </div> 
    </div>
  )
}

export default NavBar