import logo from './logo.svg';
import './App.css';
import Individual from "./components/Individual";

function App() {
  return (
    <>
      <div className="App text-left">
        <Individual lastName = {"Doe"} firstName = {"Jane"} age = {"45"} hairColor = {"Black"}></Individual>
        <Individual lastName = {"Smith"} firstName = {"John"} age = {"88"} hairColor = {"Brown"}></Individual>
      </div>
    </>
  );
}

export default App;
