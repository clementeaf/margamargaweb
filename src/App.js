import React from 'react';
import Home from './Routes/Home';
import About from './Routes/About';
import Registros from './Routes/Registros';
import Ecommerce from './Routes/Ecommerce';
import Contacto from './Routes/Contacto';
import Usuarios from './Routes/Usuarios';
import { Routes, Route } from 'react-router-dom';



function App () {

  return (
      <Routes>  
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/ecommerce' element={<Ecommerce />}/>
          <Route path='/contact' element={<Contacto />}/>
          <Route path='/usuario' element={<Usuarios />}/>
          <Route path='/resgistros' element={<Registros />}/>
      </Routes>
  );
}

export default App;
