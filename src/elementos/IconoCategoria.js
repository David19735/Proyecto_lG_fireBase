import React from 'react';
import {ReactComponent as IconoComida} from './../imagenes/cat_comida.svg';
import {ReactComponent as IconoCompras} from './../imagenes/cat_compras.svg';
import {ReactComponent as IconoCuentasYPagos} from './../imagenes/cat_cuentas-y-pagos.svg';
import {ReactComponent as IconoDiversion} from './../imagenes/cat_diversion.svg';
import {ReactComponent as IconoHogar} from './../imagenes/cat_hogar.svg';
import {ReactComponent as IconoRopa} from './../imagenes/cat_ropa.svg';
import {ReactComponent as IconoSaludEHigiene} from './../imagenes/cat_salud-e-higiene.svg';
import {ReactComponent as IconoTransporte} from './../imagenes/cat_transporte.svg';

const IconoCategoria = ({id}) => {
     
        switch(id){
            case 'comida':
                return <IconoComida/>
                break;
            case 'compras':
                return <IconoCompras/>
                break;
            case 'cuentas y pagos':
                return <IconoCuentasYPagos/>
                break;          
                case 'diversion':
                return <IconoDiversion/>
                break;
                case 'hogar':
                return <IconoHogar/>
                break;
                case 'ropa':
                return <IconoRopa/>
                break;
                case 'salud e higiene':
                return <IconoSaludEHigiene/>
                break;
                case 'transporte':
                return <IconoTransporte/>
                break;
            default: break;
        }
        
    
}
 
export default IconoCategoria;