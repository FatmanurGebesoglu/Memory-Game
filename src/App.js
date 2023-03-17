import './App.css';
import { useState } from 'react'
import Kart from './components/Card';

const kartResimler = [
  { "src": "/img/flower1.png" },
  { "src": "/img/flower2.png" },
  { "src": "/img/flower3.png" },
  { "src": "/img/flower4.png" },
  { "src": "/img/flower5.png" },
  { "src": "/img/flower6.png" },
]

function App() {

  const [kartlar, setKartlar] = useState([]);

  const karistir = () => {
    const karistirilmiskartlar = [...kartResimler, ...kartResimler].sort(() =>
      Math.random() - 0.5).map((k) => ({ ...k, id: Math.random() }))

    setKartlar(karistirilmiskartlar)
  }

  console.log(kartlar);

  return (
    <div className="App">
      <h1>MEMORY GAME</h1>
      <button onClick={karistir}>
        YENİ OYUN
      </button>

      <div className='card-grid'>
          {kartlar.map(kart=>(
            <Kart key={kart.id} kart={kart}/>
          ))}
      </div>

    </div>
  );
}

export default App;
