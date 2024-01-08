import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './componentes/Banner';

import Formulario from './componentes/Formulario';



function App() {

const [colaboradores, setColaboradores] = useState([])
const aoNovoColaboradorAdicionado = (colaborador) => {
  console.log(colaborador)
  setColaboradores(...colaboradores, colaborador)

}

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)} />


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
