import './App.css';
import { useState, useEffect } from 'react'
import Kart from './components/Card';

const kartResimler = [
  { "src": "/img/flower1.png", eslesme: false },
  { "src": "/img/flower2.png", eslesme: false },
  { "src": "/img/flower3.png", eslesme: false },
  { "src": "/img/flower4.png", eslesme: false },
  { "src": "/img/flower5.png", eslesme: false },
  { "src": "/img/flower6.png", eslesme: false }
]

function App() {

  const [kartlar, setKartlar] = useState([]);

  const [birinciSecilen, setBirinciSecilen] = useState([]);
  const [ikinciSecilen, setIkinciSecilen] = useState([]);
  const [secimSayisi, setSecimSayisi] = useState(0);

  const karistir = () => {
    const karistirilmiskartlar = [...kartResimler, ...kartResimler].sort(() =>
      Math.random() - 0.5).map((k) => ({ ...k, id: Math.random() }))

    setKartlar(karistirilmiskartlar)
  }

  const kartSec = (kart) => {
    birinciSecilen ? setIkinciSecilen(kart) : setBirinciSecilen(kart)
  }

  //console.log(kartlar);

  const secimSayisiResetle = () => {
    setBirinciSecilen(null);
    setIkinciSecilen(null);
    setSecimSayisi(oncekiSayi => oncekiSayi + 1);

  }

  useEffect(() => {

    if (birinciSecilen && ikinciSecilen) {

      if (birinciSecilen.src === ikinciSecilen.src) {
        setKartlar(oncekiKart => {
          return oncekiKart.map(kart=>{
            if(kart.src=== birinciSecilen.src){
              return {...kart, eslesme:true}
            }
            else{
              return kart
            }
          })
        })
        
        secimSayisiResetle();
      } else {

        
        secimSayisiResetle();
      }
      console.log(kartlar);
      
    }

  }, [birinciSecilen, ikinciSecilen])

  return (
    <div className="App">
      <h1>MEMORY GAME</h1>
      <button onClick={karistir}>
        YENİ OYUN
      </button>

      <div className='card-grid'>
        {kartlar.map(kart => (
          <Kart key={kart.id} kart={kart} kartSec={kartSec} donus={kart===birinciSecilen || kart===ikinciSecilen || kart.eslesme} />
        ))}
      </div>

    </div>
  );
}

export default App;
