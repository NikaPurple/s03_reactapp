import logo from './logo.svg';
import './App.css';
import CIcomponente from './component/CIcomponente';
import CIIcontador from './component/CIIcontador';
import CIIIdobleestado from './component/CIIIdobleestado';
import CIVvariable from './component/CIVvariable';
import CVoperador from './component/CVoperador';
import CVImatriz from './component/CVImatriz';
import CVIImatrizOperaciones from './component/CVIImatrizOperaciones';

function App() {
  return (
    <div>
      <h2>Componente 1</h2>
      <CIcomponente/><br></br>
      <h2>Componente 2</h2>
      <CIIcontador /><br></br>
      <h2>Componente 3</h2>
      <CIIIdobleestado /><br></br>
      <h2>Componente 4</h2>
      <CIVvariable xVariable="Hola soy Nika"/><br></br>
      <h2>Componente 5</h2>
      <CVoperador/><br></br>
      <h2>Componente 6</h2>
      <CVImatriz/><br></br>
      <h2>Componente 7</h2>
      <CVIImatrizOperaciones/>

    </div>
  );
}

export default App;
