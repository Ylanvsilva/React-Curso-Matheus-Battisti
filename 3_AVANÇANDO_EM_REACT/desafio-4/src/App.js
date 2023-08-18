import './App.css';
import UserDetails from './components/UserDetails';

function App() {
  const users = [
    {id: 1, name: "Ylan", job: "Programador", age: 21},
    {id: 2, name: "Vinicio", job: "Dev", age: 31},
    {id: 3, name: "Silva", job: "Ceo", age: 11}, 
  ]

  return (
    <div className="App">
      {users.map((user) => (
          <UserDetails 
            key={user.id} 
            name={user.name} 
            job={user.job} 
            age={user.age} 
          />
        ))}
    </div>
  );
}

export default App;
