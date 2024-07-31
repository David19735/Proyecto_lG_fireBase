import React,{useState} from 'react';
import { Helmet } from 'react-helmet';
import {Header,Titulo,ContenedorHeader,ContenedorBotones} from './../elementos/Header';
import Boton from './../elementos/Boton';
import { Formulario,Input,ContenedorBoton} from './../elementos/ElementosDeFormulario';
import styled from 'styled-components';
import {ReactComponent as SvgLogin} from './../imagenes/registro.svg';
import {auth} from './../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Alerta from '../elementos/Alerta';


const Svg=styled(SvgLogin)`
    width: 100%;
    max-height: 6.25rem;
    margin-bottom: 1.25rem;
`;

const RegistroUsuarios = () => {

    const [correo,establecerCorreo]=useState('');
    const [password,establecerPassword]=useState('');
    const [password2,establecerPassword2]=useState('');
    const navigate=useNavigate();
    const [estadoAlerta,cambiarEstadoAlerta]=useState(false); 
    const [alerta,cambiarAlerta]=useState({});



    //Cambio de estado en inputs
    const handleChange=(e)=>{
        if(e.target.name==="email"){
            establecerCorreo(e.target.value);
        }
        else if(e.target.name==="password"){
            establecerPassword(e.target.value);
        }
        else if(e.target.name==="password2"){
            establecerPassword2(e.target.value);
        }

    }


    const handleSubmit= async(e)=>{
        e.preventDefault();
        cambiarEstadoAlerta(false);
        cambiarAlerta({})
        const expresionRegular=/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

        if(!expresionRegular.test(correo)){
            cambiarEstadoAlerta(true);
            cambiarAlerta({tipo:'error',mensaje:'Correo invalido'});
            return;
        }
        if(correo==="" || password==="" || password2===""){
            cambiarEstadoAlerta(true);
            cambiarAlerta({tipo:'error',mensaje:'Por favor ingresa un correo'});
            return;
        }
        if(password!==password2){
            cambiarEstadoAlerta(true);
            cambiarAlerta({tipo:'error',mensaje:'Las contraseñas no coinciden'});
            return;
        }

            try{
                await createUserWithEmailAndPassword(auth,correo,password);
                
                navigate('/');


            }
            catch(error){

                let mensaje='';

                switch(error.code){
                    case 'auth/weak-password':
                        mensaje="La contraseña debe tener mínimo 6 carácteres";
                        break;
                    case 'auth/email-already-in-use':
                        mensaje="El correo ya tiene una cuenta registrada";
                        break;    

                     default:
                        mensaje="Error al intentar registrarse";
                        break;
                           
                }

                cambiarEstadoAlerta(true);
                cambiarAlerta({tipo:'error',mensaje:mensaje})

            }

    }

    return ( 
        <>
            <Helmet>
                <title>Crear cuenta</title>
            </Helmet>

            <Header>
                <ContenedorHeader>
                    <Titulo>Crear cuenta</Titulo> 
                <Svg/>
                    <div>
                        <Boton to={'/iniciar-sesion'}>Iniciar Sesión</Boton>
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

                     <Input
                    type='password'
                    name='password2'
                    placeholder='Repetir Contraseña'
                    value={password2}
                    onChange={handleChange}
                    />
                        <ContenedorBoton>
                    <Boton primario as="button" type='submit'>Crear Cuenta</Boton>
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
 
export default RegistroUsuarios;