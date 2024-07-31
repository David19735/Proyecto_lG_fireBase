import React from 'react';
import {Header,Titulo,ContenedorHeader} from './../elementos/Header';
import { Helmet } from 'react-helmet';
import BtnRegresar from '../elementos/BtnRegresar';

const GastosPorCategoria = () => {
    return ( 
        <>
            <Helmet>
                <title>Gastos por categoría</title>
            </Helmet>

    <Header>
        <BtnRegresar/>
        <Titulo>Gastos por categoría</Titulo>
    </Header>
        </>
    );

}
 
export default GastosPorCategoria;