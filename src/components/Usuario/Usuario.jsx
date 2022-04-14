import React, { useState } from 'react'
import './Usuario.css'
import DataTable from 'react-data-table-component';
import SortIcon from "@mui/icons-material/ArrowDownward";
import Checkbox from "@mui/material/Checkbox";
import Facturas from '../../sub-components/Facturas/Facturas'
import Carro from '../../sub-components/Carro/Carro'
import { style } from '@mui/system';


// Declaración de Variables para DataTable
const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
const isIndeterminate = (indeterminate) => indeterminate;
const selectableRowsComponentProps = { indeterminate: isIndeterminate };

const columns = [
  {
      name: 'Id',
      selector: row => row.title,
  },
  {
      name: 'Fecha Compra',
      selector: row => row.year,
  },
  {
    name: 'Fecha Facturacion',
    selector: row => row.title,
  },
  {
  name: 'Fecha Despacho',
  selector: row => row.title,
  },
  {
    name: 'Id-Paquete',
    selector: row => row.title,
  },
  {
    name: 'Status',
    selector: row => row.title,
  },
];

const data = [
  {
      id: 1,
      title: '45',
      year: '1988',
  },
  {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
  },
]

const Usuario = () => {
  // UseStates
  const [hide, setHide] = useState(false)
  const handDisp = () => setHide(!hide)



  const handleClick = change => {
    if (change === 'datos'){
      document.getElementById('user-info').style.display = 'flex'
      document.getElementById('info-historial').style.display = 'none'
      document.getElementById('info-facturas').style.display = 'none'
    } else if (change === 'historial') {
      document.getElementById('info-historial').style.display = 'flex'
      document.getElementById('user-info').style.display = 'none'
      document.getElementById('info-facturas').style.display = 'none'
    } else if (change === 'facturas'){
      document.getElementById('info-facturas').style.display = 'flex'
      document.getElementById('info-historial').style.display = 'none'
      document.getElementById('user-info').style.display = 'none'
    } else if (change === 'carro'){
      document.getElementById('info-carro').style.display = 'flex'
      document.getElementById('user-info').style.display = 'none'
      document.getElementById('info-historial').style.display = 'none'
      document.getElementById('info-facturas').style.display = 'none'}
  }




  return (
    <div className='usuario-container'>
      {/* Formulario Ingreso */}

        <div className='validación-identidad'>
            <div className='cuadro-ingreso-usuarios'>
                <h1 className='LOGO-ECOSA'>ECOSA</h1>
                    <div className='tipo-usuario'>
                      <button className='tipo-usuario-btn'>Cliente</button>
                      <button className='tipo-usuario-btn'>Vendedor</button>
                    </div>
                <div className='ingreso-datos-usuarios'>
                  <form action="" className='form'>
                    <h3 className='text-area'>Usuario</h3>
                      <input className='ingreso-info' type="text" />
                    <h3 className='text-area'>Contraseña</h3>
                      {/* <input className='ingreso-info' type="password" />  */}
                    <button onClick={ handDisp } className='ingresar'>Ingresar</button>
                    </form>
                </div>    
            </div>
        </div>

        {/* Fin Formulario Ingreso */}

        <div className='dashboard-container' id='dashb-cont'>
          {/* Seccion superior dashborad -> Información usuario */}
            <div className='dashboard-cliente-info'>
                <h3>Franco Cumplido</h3>
                <h4>Nro cliente :</h4>
                <h4>Empresa</h4>
            </div>
          {/* Fin Seccion superior dashborad -> Información usuario */}

            
          {/* Seccion media dashborad -> Botones secciones */}
            <div className='dashboard-secciones'>
                <p id='datos' onClick={(e) => {handleClick(e.target.id)}}>Datos</p>
                <p id='historial' onClick={(e) => {handleClick(e.target.id)}}>Historial Compras</p>
                <p id='facturas' onClick={(e) => {handleClick(e.target.id)}}>Facturas-Boletas-Notas de crédito</p>
                <p id='carro' onClick={(e) => {handleClick(e.target.id)}}>Carro de compras</p>
            </div>

            {/* Seccion media dashborad -> Display secciones - Datos comprador*/}
              <div className='display-secciones'>
                      <form action="" className='display-content' id='user-info'>
                          <div className='info-columna'>
                              <label htmlFor="">Usuario</label>
                                <input type="text" />
                              <label htmlFor="">Empresa</label>
                                <input type="text" />
                              <label htmlFor="">Razón Social</label>
                                <input type="text" />
                              <label htmlFor="">Rut-Empresa</label>
                                <input type="text" />
                              <label htmlFor="">País</label>
                                <input type="text" /> 
                          </div>

                          <div className='info-columna'>
                              <label htmlFor="">Ciudad</label>
                                <input type="text" />   
                              <label htmlFor="">Comuna</label>
                                <input type="text" /> 
                              <label htmlFor="">Calle-Avenida</label>
                                <input type="text" />   
                              <label htmlFor="">Numero</label>
                                <input type="text" />
                              {/* Info-btn */}
                               
                          </div>
                      </form>
                  {/* Seccion media dashborad -> Display secciones - Historial de compras*/}

                      <div 
                          className='display-historia-compras' id='info-historial'>
                              <DataTable
                                columns={columns}
                                data={data}
                                selectableRows
                                expandableRows
                                expandableRowsComponent={ExpandedComponent}
                                defaultSortField="title"
                                sortIcon={<SortIcon />}
                                pagination
                                selectableRowsComponent={Checkbox}
                                selectableRowsComponentProps={selectableRowsComponentProps}
                              />
                      </div>
                      
                      <div className='facturas-display' id='info-facturas'>
                          <Facturas />
                      </div>

                      <div className='carro-display' id='info-carro'>
                          <Carro />
                      </div>

              </div>

            

          {/*  FinSeccion media dashborad  */}

          
        </div>

    </div>
  )
}

export default Usuario