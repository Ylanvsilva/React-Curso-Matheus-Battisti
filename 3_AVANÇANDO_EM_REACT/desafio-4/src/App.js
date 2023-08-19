import './App.css';
import UserDetails from './components/UserDetails';

function App() {
  const pessoas = [
    { id: 1, name: 'Ylan', job: 'Dev', age: 21},
    { id: 2, name: 'Vinicio', job: 'CEO', age: 11},
    { id: 3, name: 'Ylan', job: 'Educador', age: 31},
  ]

  return (
    <div className="App">
      {pessoas.map((people) => (
        <UserDetails
          key={people.id}
          name={people.name}
          job={people.job}
          age={people.age}
        />
      ))}
    </div>
  );
}

export default App;
