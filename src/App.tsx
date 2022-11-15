import React,{useState} from 'react';
import './App.css';

function App() {

  const [palavra,setPalavra] = useState("")

  return (
    <div className="App">
      <h1>{palavra}</h1>
      <input type="text" onChange={text => setPalavra(text.target.value)}/>
    </div>
  );
}

export default App;
