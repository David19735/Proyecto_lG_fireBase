import React from 'react';
import BtnRegresar from '../elementos/BtnRegresar';
import { Helmet } from 'react-helmet';
import { Header,Titulo } from '../elementos/Header';
import { useAuth } from '../contextos/AuthContext';

const ListaDeGastos = () => {
    
    
    return (  
        <>
           <Helmet>
                <title>Lista de gastos</title>
            </Helmet>

    <Header>
        <BtnRegresar/>
        <Titulo>Lista de gastos</Titulo>
    </Header>
    </>
    );
}
 
export default ListaDeGastos;