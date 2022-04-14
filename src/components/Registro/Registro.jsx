import React from 'react';
import { userSchema } from '../../Validaciones/UserValidations';
import './Registro.css'


const Registro = () => {

    const createUser = async (event) => {
        event.preventDefault()
        let formData = {
            nombre: event.target[0].value,
            apellidoPaterno: event.target[1].value,
            apellidoMaterno: event.target[2].value,
            email: event.target[3].value,
            fono: event.target[4].value,
            rut: event.target[5].value,
            password: event.target[6].value,
        };
        const isValid = await userSchema.isValid(formData);
        console.log(isValid);
    }


  return (
    <div className='registro-container'>
        <div className='registro-bg'>
             <div className='registro-box'>
                 <h3>Registro Usuarios</h3>
                     <span className='span'>Los campos con * son requeridos</span>
                        <form onSubmit={createUser} className='pilares'>
                            <div className='pilar'>
                                <p>Nombre *</p>
                                    <input name='nombre' type="text"/>
                                    
                                <p>Apellido Paterno *</p>
                                    <input name='apellidoP'type="text"/>
                                    
                                <p>Apellido Materno *</p>
                                    <input name='apellidoM' type="text"/>
                                
                                <p>Email *</p>
                                    <input name='email'  type="text"/>
                                    
                            </div>
                                <div className='pilar'>     
                                <p>Fono *</p>
                                    <input name='fono' type="number"/> 
                                        <p>Ej: 95665544</p>
                                    
                                <p>Rut *</p>
                                    <input placeholder='sin puntos y con guion' name='rut' type="text"/>
                                    
                                <p>Password *</p>
                                    <input name='password' type="password"/>
                                        <p className='pass-conditions'>Debe tener un mínimo de 10 caracteres y maximo 20</p>
                                        <p className='pass-conditions'>Debe contener caracteres alfanuméricos y caracterres especiales</p>
                                    
                                <input type='submit' className='submit-btn' />  
                            </div>
                        </form>   
                    
             </div>
        </div>
    </div>
  )
}

export default Registro