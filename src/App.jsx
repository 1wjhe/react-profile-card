import { useEffect, useState } from 'react'
import './index.css'

function App() {
  const [advice, setAdvice] = useState("");
  const [count, SetCount] = useState(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    SetCount((e) => e + 1);
    
  }
  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <p>You Have Read <strong>{count}</strong>Pieces of Advice</p>
  
    </div>
  );
}

export default App


