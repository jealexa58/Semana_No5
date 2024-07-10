import './App.css';
import Card from './components/cards/Card';
import cientificos from './utils/utils.js';


function App() {
  const renderCards = () => {
    return cientificos.map((cientifico) => (
      <Card
      key = {cientifico.key}
      nombre = {cientifico.nombre}
      titulo = {cientifico.titulo}
      año = {cientifico.año}
      descripcion = {cientifico.descripcion}
      frase = {cientifico.fraseCelebre}
      nacimiento = {cientifico.nacimiento}
      muerte = {cientifico.muerte}
    />
    ));
  }
    return (
      <div className='container'>
        <h1>Cientificos Famosos</h1>
        <div className='card-container'>
          {renderCards()}
        </div>
      </div>
    )
  
}

export default App;
