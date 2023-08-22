import './App.css';
import Cars from './components/Cars';

function App() {
  const carros = [
    {name: "Fiat", km: 10000, color: "Branco"},
    {name: "Kia", km: 33000, color: "Preto"},
    {name: "Audi", km: 55500, color: "Vermelho"},
  ]

  return (
    <div className="App">
      <h1 className="title">Meus carros</h1>
      <div className="cars-container">
        {carros.map((cars) => (
          <Cars
            cars={cars}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
