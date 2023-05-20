import './App.css';
import './hojas-de-estilo/boton.css';
import './hojas-de-estilo/contador.css';
import Boton from './components/Boton';
import freeCodeCampLogo from './images/FreeCodeCamp_logo.svg.png';
import Contador from './components/Contador';

function App() { 

  const manejarClic = () => {
    console.log('Clic');
  }

  const reiniciarContador = () => { 
    console.log('Reiniciar');
  }
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'> 
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'/> 
      </div> 
      <div className='contenedor-principal'> 
      <Contador numClics='5' />
      <Boton 
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}/> 
      <Boton 
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}/> 
        
      </div>
    </div>
  );
}

export default App;
