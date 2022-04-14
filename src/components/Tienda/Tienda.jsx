import './Ecommerce.css'
import React, {useState, useEffect} from 'react';
import martillo from '../../assets/martillo.png';
import axios from 'axios';
import { BsCartPlus } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsShareFill } from 'react-icons/bs';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';



const Ecommerce = () => {


  /*                                                    SECCION USESTATE                                                  */
  const [getData, setGetData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0)
  const [familia, setFamilia] = React.useState([])
  const [selectfamilia, setSelectFamilia] = React.useState('')
  const [selectCodigo, setSelectCodigo] = React.useState('')
  const [selectDescripcion, setSelectDescripcion] = React.useState('')
  const [selectCriterio, setSelectCriterio] = React.useState('')
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const [open, setOpen] = useState(false)
  const [searchTerm, setSearchTerm ] = useState('')
  const [{ basket }, dispatch] = useStateValue();
  const [getInfo, setGetInfo] =useState([])
  const hClick = () => setOpen(!open)


  //Consumo API especifica por parametro de busqueda
  const [errorAPI, setErrorAPI] = useState(null);
  const [loading, setLoading] = useState(false);
  const [respuestaAPI, setRespuestaAPI] = useState([]);
  const [accesoAPI, setAccesoAPI] = useState([]);
  const [datos, setDatos] = useState([]);

  /*                                               FIN SECCION USESTATE                                                  */








/*                                                    SECCION SET VARIABLES                                                          */

  // Instancias
  const SET_GETDATA = (event) => {
    const {
      target: { value },
    } = event;
    setGetData(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const SET_FAMILIA = (e) => {
    const {
      target: { value },
    } = e;
    setSelectFamilia(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const SET_CODIGO = (e) => {
    const {
      target: { value },
    } = e;
    setSelectCodigo(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const SET_DESCRIPCION = (e) => {
    const {
      target: { value },
    } = e;
    setSelectDescripcion(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const SET_CRITERIO = (e) => {
    const {
      target: { value },
    } = e;
    setSelectCriterio(
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  
  //add product per buy
  const addToBasket = dat => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: dat._id,
        precio: dat.familia_de_producto,
      }
    })
  }

/*                                               FIN SECCION SET VARIABLES                                                          */

  


















/*                                                        SECCION USE EFFECT                                                       */

  // Api Especifica segun parámetro de busqueda
  useEffect(() => {
    const consultaAPI = async () => {
      setErrorAPI(null);
      setLoading(true);
      try {
        const consulta = await axios({ method: accesoAPI.tipo, url: accesoAPI.url, data: datos });
        setRespuestaAPI(consulta.data[0]);
      } 
      catch (error){
        setErrorAPI(error.response);
      }
      setLoading(false);
    };
    consultaAPI();
  }, [accesoAPI.tipo, accesoAPI.url, datos]);



  // Api Familias-Data
  useEffect(() => {
    async function fetchFam() {
      const URL = 'http://201.239.17.218:8000/api/familias_data';
      try {
        const ans = await axios.get(URL);
        setFamilia(ans.data[0]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchFam();
  }, []);  

 // Api Productos
 useEffect(() => {
  async function fetchData() {
    const URL = 'http://201.239.17.218:8000/api/listado_prod/';
    try {
      const res = await axios.get(URL);
      setGetData(res.data[0]);
    } catch (error) {
      console.log(error);
    } 
  };
  fetchData();
}, []);
// fILTRO PARA MOSTRAR 6 ELEMENTOS POR PAGINA EN EL DISPLAY DEL ECOMMERCE
const dat = getData.slice(currentPage, currentPage + 6)

/*                                                    FIN SECCION USE EFFECT                                                       */

















/*                                                    SECCION HANDLE                                                              */

  // Función display de criterio de búsqueda básica según selección
  const handleChange = change => {
    
    if (change === 'nombre'){
        document.getElementById('barra-nombre').style.display = 'flex'
        document.getElementById('barra-codigo').style.display = 'none'
        document.getElementById('familia-opciones').style.display = 'none'  
      

    } if (change === 'codigo') {
      document.getElementById('barra-codigo').style.display = 'flex'
      document.getElementById('barra-nombre').style.display = 'none'
      document.getElementById('familia-opciones').style.display = 'none'
      

    } else if (change === 'familia') {
      document.getElementById('familia-opciones').style.display = 'flex'
      document.getElementById('barra-nombre').style.display = 'none'
      document.getElementById('barra-codigo').style.display = 'none'
    } 
  }

  // Consumo de API específico según criterio seleccionado
  const handleSearch = boton => {

    if (boton === 'funcion_buscar') {


         if (selectCriterio[0] === 'familia') {
          setAccesoAPI({tipo: 'GET', url: "http://201.239.17.218:8000/api/busqueda/"+selectCriterio[0]+"/"+selectfamilia[0] });
          setDatos([]);
         }
         
         
         else if (selectCriterio[0] === 'codigo') {
          setAccesoAPI({tipo: 'GET', url: "http://201.239.17.218:8000/api/busqueda/"+ selectCriterio[0]+'/'+selectCodigo });
          setDatos([]);
         }

         else if (selectCriterio[0] === 'nombre') {
          setAccesoAPI({tipo: 'GET', url: "http://201.239.17.218:8000/api/busqueda/"+ selectCriterio[0] + '/' + selectDescripcion });
          setDatos([]);
         }
  }
}

  const handlePrev =() => {
    setCurrentPage(currentPage - 5)
  }
  const handleNext = () => {
  setCurrentPage(currentPage + 5)
  }

/*                                                FIN SECCION HANDLE                                                              */

function ar (respuestaAPI){
  if(respuestaAPI === 0){
    return dat
  }
  else{
    return respuestaAPI
  }
}



//SECTION PRODUCT CARD
let trajeta_produccion =  ar(respuestaAPI).map((dato, i) => {
  return(
          <div id={dat._id} className='Card'>
              <div className='Card-up'>
                <h3 className='Card-title' onClick={handleClick}>TITULO</h3>
                <div className='option-icons'>
                    <div className='share'>
                      <BsShareFill />
                    </div>
                    <div id='1' onClick={(e) => addToBasket(dato)} className='buy'>
                      <BsCartPlus/>
                    </div>
                </div>
              </div>
              <div className='Card-Line'></div>
                  <img className='Card-img' src={martillo} alt="#" />
                    <div className='Card-Line'></div>
                    <div className='description-container'>
                        <h4 className='descripción'>Nombre : {dato.descripcion} </h4>
                        <h4 className='descripción'>Tamaño : {dato.proveedor} </h4>s
                        <h4 className='descripción'>Peso : {dato.familia_de_producto} </h4>
                        <h4 className='descripción'>Marca :  {dato.codigo} </h4>
                        <h4 className='descripción'>Precio : {dato.precio_base_pesos}</h4>
                </div>
          </div>
  )})
//END SECTION PRODUCT CARD 







  return (
    <> 
    <div className='tienda-container'>
        <div className='tienda-content'>
          <div className='tienda-content-up'>
              <div className='busqueda-box'>


                <div className='criterios-box'>
                    <h5 className='criterio-busqueda'>Criterio Búsqueda</h5>
                      <select 
                          id="criterios"
                          name="criterios"  
                          onChange={(e) => {handleChange(e.target.value); SET_CRITERIO(e)}} 
                      >
                        <option value="nombre">Nombre</option>
                        <option value="codigo">Código</option>
                        <option value="familia">Familia</option>
                      </select>
                </div>


                  <div className='criterio-seleccionado' id='criterio-select'>

                      <input type="text"
                          id='barra-nombre' 
                          placeholder='Busqueda por Nombre ...' 
                          className='barra-busqueda'  
                          onChange={(e) => {setSearchTerm(e); SET_DESCRIPCION(e)}}
                      />

                      <input
                          id='barra-codigo' 
                          type="text" 
                          placeholder='Busqueda por Código ...' 
                          className='barra-busqueda'  
                          onChange={(e) => {SET_CODIGO(e)}}
                      />


                        <select 
                            id="familia-opciones"
                            name="familia"  
                            className='familias' 
                            onChange={(e) => {SET_FAMILIA(e)}} 
                        > 
                        {familia.map((e) => (
                            <option value={e._id}>{e.descripcion}</option>
                        ))}
                        </select>
                  </div> 

                  <button 
                      id="buscar" 
                      onClick={() => handleSearch('funcion_buscar')}>
                         <BiSearch/>
                  </button>


              </div>
                  <div className='btns'>
                    <button className='btn' onClick={handlePrev}>Anterior</button>
                    <button className='btn' onClick={handleNext}>Siguiente</button>
                  </div>
                  <div className='estado-compra'>
                    <AiOutlineShoppingCart onClick= { hClick }/>
                    <span className='basket-length'>{basket?.length}</span>
                  </div>
          </div>

            <div className='tienda-line'>
            </div>
              <div className='card-container'>
                <div className='busqueda-detallada'>
                  <button className='busqueda-avanzadada'>Busqueda avanzada</button>
                      <h5 id='busqueda-detallada-nombre'>Nombre</h5>
                          <input className='input-detalle' type="text" onChange={event => setSearchTerm(event.target.value)}  />
                      <h5 id='busqueda-detallada-marca'>Marca</h5>
                          <select name="" id="">
                            <option value=""></option>
                          </select>
                      <h5 id='busqueda-detallada-codigo'>Código</h5>
                          <input 
                          className='input-detalle'
                          type="text" />
                      
                </div>


                <div className='cards-display'>
                    {trajeta_produccion}
                </div>


                  <div className={click ? 'detail-card-bg detail-active' : 'detail-card-bg'}> 
                      <div className='detail-card'>
                        <div className='up-content'>
                          <h1 className='up-title'>TITLE</h1>
                          <p className='up-cerrar'
                            onClick= { handleClick }
                          >Cerrar</p>
                        </div>
                        <div className='detail-line'></div>
                        <div className='middle-content'>
                          <div className='middle-texts'>
                            <div className='texts-block'>
                              <h4 className='marca-detail'>Marca</h4>
                                <p className='marca-text'>Lorem ipsum </p>
                            </div>

                            <div className='texts-block'>
                              <h4 className='marca-detail'>Categoría</h4>
                                <p className='marca-text'>Lorem ipsum dolor sit</p>
                            </div>

                            <div className='texts-block'>
                              <h4 className='marca-detail'>Peso</h4>
                                <p className='marca-text'>24Kg</p>
                            </div>

                            <div className='texts-block'>
                              <h4 className='marca-detail'>Precio Unitario</h4>
                                <p className='marca-text'>$20.000</p>
                            </div>
                          </div>
                          <img className='middle-img' src={martillo} alt="#" />
                        </div>                        
                      </div>
                  </div>

                  <div className={open ? 'carro-de-compras-bg carro-active' : 'carro-de-compras-bg'}>
                      <div className='carro-de-compras'>
                        <div className='carro-compras-info'>
                        {basket.map(item => (
                            <div>

                                <h1>Nombre</h1>
                                <p>{item.id}</p>
                                <h3>Precio</h3>
                                <p>{item.precio}</p>
                                
                                <h3>Subtotal ({basket.length} items):</h3>
                                <p>${getBasketTotal(basket)}</p>
                            </div>
                            ))}
               
                        </div>
                        <div className='imagen-elem-seleccionado'>
                          <button className='carro-cerrar' onClick= { hClick }>Close</button>
                          <img className='carro-compras-img' src={martillo} alt="" /> 
                        </div>
                      </div>
                  </div>
              </div>
        </div>
    </div>
    </>
  )
}

export default Ecommerce