import React from 'react';
import {Header,Titulo,ContenedorHeader,ContenedorBotones} from './elementos/Header';
import { Helmet } from 'react-helmet';
import Boton from './elementos/Boton';
import BotonCerrarSesion from './elementos/BotonCerrarSesion';
import FormularioGasto from './componentes/FormularioGasto';


const App = () => {
  return (

    
    <>
    <Helmet>
        <title>Agregar gasto</title>
    </Helmet>

    <Header>
      <ContenedorHeader>  
        <Titulo>Agregar gasto</Titulo>

          <ContenedorBotones>
            <Boton to={'/categorias'}>Categorías</Boton>
            <Boton to={'lista'}>Lista de gastos</Boton>
            <BotonCerrarSesion/>
            
          </ContenedorBotones>
      </ContenedorHeader>
    </Header>

    <FormularioGasto/>

    </>
    );
}
 
export default App;