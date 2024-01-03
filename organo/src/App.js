import logo from './logo.svg';
import './App.css';
import Banner from './componentes/Banner';
import CampoTexto from './componentes/CampoTexto';



function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" placeholder="Digite o seu nome"/>
      <CampoTexto label="Cargo" placeholder="Digite o seu cargo"/>
      <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>

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
