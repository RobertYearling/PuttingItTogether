import './App.css';
import Individual from "./components/Individual";

function App() {
  const person = [
    {firstName: "Jane", lastName: "Doe", age: "45", hairColor: "Black"},
    {firstName: "John", lastName: "Smith", age: "88", hairColor: "Brown"},
  ]
  return (
    <>
      <div className="App">
        {
          person.map((onePerson, i)=>{
            return <Individual key = {i} lastName={onePerson.lastName} firstName={onePerson.firstName} age={onePerson.age} hairColor={onePerson.hairColor}></Individual>
          })
        }
      </div>
    </>
  );
}

export default App;
