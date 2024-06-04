import { useState } from 'react';
import { CalculPrice } from './Composants/CalculPrice';

import './App.css';

function App() {
  const [value,setValue]=useState();
  const [totalePrix,setTotalePrix]=useState(0);
  return (
    <div className="App">
      <h1>Forward to the Past</h1>
      <CalculPrice value={value} setValue={setValue} setTotalePrix={setTotalePrix} />
      <h3>Totale Prix: {totalePrix}</h3> 
    </div>
  );
}

export default App;
