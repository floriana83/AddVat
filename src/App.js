import logo from './logo.svg';
import './App.css';
import { AddVat } from './AddVat.js';


function App() {
  const price =140;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          Prezzo {price} + IVA al 22% : <AddVat value= {price} vat = {22} />
        </p>
      </header>
    </div>
  );
}

export default App;
