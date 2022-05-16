import logo from './logo.svg';
import './App.css';

function App() {
  const data = ["hello", "world"];
  const newData=data.map(word =>word.charAt(0).toUpperCase()+ word.slice(1));
  const number1 = 5;
  const number2 = 6;
  const string = 'I love React!';
  return(
    <div className="App">
      <p>{newData[0]} {newData[1]}</p>
      <p>{number1} + {number2} = {number1+number2}</p>
      <p>The string’s length is {string.length}</p>

    </div>
  )
};

export default App;
