import React,{useState} from 'react';
import { Helmet } from 'react-helmet';
import {Header,Titulo,ContenedorHeader,ContenedorBotones} from './../elementos/Header';
import Boton from './../elementos/Boton';
import { Formulario,Input,ContenedorBoton} from './../elementos/ElementosDeFormulario';
import styled from 'styled-components';
import {ReactComponent as SvgLogin} from './../imagenes/login.svg';
import { useNavigate } from 'react-router-dom';
import Alerta from '../elementos/Alerta';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from './../firebase/firebaseConfig';


const Svg=styled(SvgLogin)`
    width: 100%;
    max-height: 4.5rem;
    margin-bottom: 1.25rem;
`;

const InicioSesion = () => {

    const [correo,establecerCorreo]=useState('');
    const [password,establecerPassword]=useState('');
    const navigate=useNavigate();
    const [estadoAlerta,cambiarEstadoAlerta]=useState(false); 
    const [alerta,cambiarAlerta]=useState({});

    const handleChange=(e)=>{
        if(e.target.name==="email"){
            establecerCorreo(e.target.value);
        }
        else if(e.target.name==="password"){
            establecerPassword(e.target.value);
        }
      
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        cambiarEstadoAlerta(false);
        cambiarAlerta({})
        const expresionRegular=/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

        if(!expresionRegular.test(correo)){
            cambiarEstadoAlerta(true);
            cambiarAlerta({tipo:'error',mensaje:'Correo invalido'});
            return;
        }
        if(correo==="" || password===""){
            cambiarEstadoAlerta(true);
            cambiarAlerta({tipo:'error',mensaje:'Por favor ingresa un correo'});
            return;
        }
        

            try{
                await signInWithEmailAndPassword(auth,correo,password);
                
                navigate('/');


            }
            catch(error){

                
                let mensaje='';
                console.log(error.code);

                switch(error.code){
                  
                    case'auth/too-many-requests':
                        mensaje='Contraseña incorrecta'
                        break;

                      case'auth/user-not-found	':  
                      mensaje="No existe el correo electrónico proporcionado"
                      break;


                     default:
                        mensaje="Error al iniciar sesión";
                        break;
                           
                }

                cambiarEstadoAlerta(true);
                cambiarAlerta({tipo:'error',mensaje:mensaje})

            }

    }


    return ( 
        <>
            <Helmet>
                <title>Iniciar sesión</title>
            </Helmet>

            <Header>
                <ContenedorHeader>
                    <Titulo>Iniciar Sesión</Titulo> 
                <Svg/>
                    <div>
                        <Boton to={'/crear-cuenta'}>Registro</Boton>
                    </div>
                </ContenedorHeader>
            </Header>

            <Formulario onSubmit={handleSubmit}>
                    <Input
                    type='email'
                    name='email'
                    placeholder='Correo Electrónico'
                    value={correo}
                    onChange={handleChange}
                    />

                    <Input
                    type='password'
                    name='password'
                    placeholder='Contraseña'
                    value={password}
                    onChange={handleChange}
                    />
                        <ContenedorBoton>
                    <Boton primario as="button" type='submit'>Iniciar Sesión</Boton>
                        </ContenedorBoton>

            </Formulario>
            <Alerta 
            tipo={alerta.tipo}
            mensaje={alerta.mensaje}
            estadoAlerta={estadoAlerta}
            cambiarEstadoAlerta={cambiarEstadoAlerta}
            />

        </>

     );
}
 
export default InicioSesion;