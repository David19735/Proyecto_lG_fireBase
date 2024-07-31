import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Puntos} from './../imagenes/puntos.svg';


const Svg = styled.svg`
    height: 50vh;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 0;
    path {
        fill: rgba(135,182,194, .15);
    }
`;
 
const PuntosArriba = styled(Puntos)`
    position: fixed;
    z-index: 1;
    top: 1rem; /* 40px */
    left: 1rem; /* 40px */
    width: 150px;
`;
 
const PuntosAbajo = styled(Puntos)`
    position: fixed;
    z-index: 1;
    bottom: 1rem; /* 40px */
    right: 1rem; /* 40px */
    width: 150px;
`;


const Fondo = () => {
    return (
        <>
            <PuntosArriba/>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio='none'>
            <path fill="#0099ff"
             fillOpacity="1"
              d="M0,32L30,74.7C60,117,120,203,180,229.3C240,256,300,224,360,202.7C420,181,480,171,540,138.7C600,107,660,53,720,37.3C780,21,840,43,900,96C960,149,1020,235,1080,261.3C1140,288,1200,256,1260,213.3C1320,171,1380,117,1410,90.7L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
            </Svg>
            <PuntosAbajo/>
        </>
      );
}
 
export default Fondo;