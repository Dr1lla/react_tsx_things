
import './App.css';
import {useState} from "react";

function App() {
    let [number, setNumber] = useState<number>(0)

    const increment = () => {
        setNumber(prevState => prevState + 1);
        console.log(number)
    }
  return (
      <div>
          <h2>{number}</h2>
          <button onClick={increment}> Increment</button>
      </div>
  );
}

export default App;
