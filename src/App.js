import logo from './logo.svg';
import './App.css';
import CIcomponente from './component/CIcomponente';
import CIIcontador from './component/CIIcontador';
import CIIIdobleestado from './component/CIIIdobleestado';

function App() {
  return (
    <div>
      <h2>Componente 1</h2>
      <CIcomponente/><br></br>
      <h2>Componente 2</h2>
      <CIIcontador /><br></br>
      <h2>Componente 3</h2>
      <CIIIdobleestado /><br></br>
    </div>
  );
}

export default App;
