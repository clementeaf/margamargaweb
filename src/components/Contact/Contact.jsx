import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-container'>
        <h2 className='contact-title'>Contacto</h2>
        <div className='contact-box'>
          <input type="text" placeholder='Ingresa tu Email' className='input' />
          <div className='line'></div>
          <h4 className='get'>Obtener Notificaciones</h4>
        </div>
    </div>
  )
}

export default Contact