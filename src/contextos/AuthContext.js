import React, { useContext,useState,useEffect } from 'react';
import { auth } from '../firebase/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

//Creamos el contexto
const AuthContext=React.createContext();

//hook para acceder al contexto

const useAuth=()=>{

    return useContext(AuthContext);

}

const AuthProvider = ({children}) => {

    const [usuario,cambiarUsuario]=useState();
    const [cargando, cambiarCargando]=useState(true);

    useEffect(()=>{
        //Comprobamos si existe un usuario que se ha logueado
        const cancelarSuscripcion=onAuthStateChanged(auth,(usuario)=>{
            cambiarUsuario(usuario);
            cambiarCargando(false);
        })  
       
    },[])

    return (  
        <AuthContext.Provider value={{usuario:usuario}}>
            {!cargando && children}
        </AuthContext.Provider>
    );  
}
 
export  {AuthProvider,AuthContext,useAuth};