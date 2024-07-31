import React from 'react';
import ReactDOM from 'react-dom/client';
import WebFont from 'webfontloader';
import './index.css';
import App from './App';
import Contenedor from './elementos/Contenedor';
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
import EditarGasto from './componentes/EditarGasto.js';
import GastosPorCategoria from './componentes/GastosPorCategoria.js';
import InicioSesion from './componentes/InicioSesion.js';
import ListaDeGastos from './componentes/ListaDeGastos.js';
import RegistroUsuarios from './componentes/RegistroUsuarios.js';
import {Helmet} from "react-helmet";
import favicon from './imagenes/logo.png';
import Fondo from './elementos/Fondo.js';
import {AuthProvider,AuthContext} from './contextos/AuthContext.js';
import RutaProtegida from './componentes/RutaPrivada.js';

WebFont.load({
  google: {
    families: ['Work Sans:400,500,700', 'sans-serif']
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 <>

  <Helmet>
    <Link rel="shortcut" href={favicon} type="image/x-icon"/>
    <title>Inicio</title>
  </Helmet>

  <AuthProvider>
    <BrowserRouter>
    <Contenedor>

      <Routes>
        <Route path='/iniciar-sesion' element={<InicioSesion/>} />
        <Route path='/crear-cuenta' element={<RegistroUsuarios/>} />

        <Route path='/categorias' element={
          <RutaProtegida>
            <GastosPorCategoria/>
          </RutaProtegida>
        }/>

        <Route path='/lista' element={
          <RutaProtegida>
            <ListaDeGastos/>
          </RutaProtegida>
        }/>

        <Route path='/editar/:id' element={
          <RutaProtegida>
            <EditarGasto/>
          </RutaProtegida>
        }/>

        <Route path='/' element={
          <RutaProtegida>
            <App/>
          </RutaProtegida>
        }/>

        
      
      </Routes>

    </Contenedor>
    </BrowserRouter>
    </AuthProvider>

  <Fondo/>  
 </> 
);

