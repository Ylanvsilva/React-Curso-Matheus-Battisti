import './App.css';
import UserDetails from './components/UserDetails';

function App() {
  const nomes = [
    {id: 1, name: "Ylan", job: "Programador", age: 21},
    {id: 2, name: "Vinicio", job: "Dev", age: 11},
    {id: 3, name: "Santos", job: "Analista", age: 33},
  ]
  
  return (
    <div className="App">
      {nomes.map((names) => (
        <UserDetails 
          key={names.id}
          name={names.name}
          job={names.job}
          age={names.age}
        />
      ))}
    </div>
  );
}

export default App;
