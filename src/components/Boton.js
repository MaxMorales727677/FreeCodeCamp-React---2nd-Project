import React from 'react'; 

function Boton(props) { 
    return ( 
        <button> 
            {props.texto} //Sintaxis de desestructuracion 
        </button>
    );
}