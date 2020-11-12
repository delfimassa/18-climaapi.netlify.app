import React, {useState}from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Clima from './components/Clima';
import Formulario from './components/Formulario';

function App() {
  const [resultado, setResultado] = useState({})
  return (
    <div >
      <Header titulo="App del Clima"></Header>
      <section className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            {
              (Object.entries(resultado).length !== 0) ? <Clima resultado={resultado}></Clima> : null
            }
          </div>
          <div className="col-sm-12 col-md-6">
            <Formulario setResultado={setResultado}></Formulario>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
