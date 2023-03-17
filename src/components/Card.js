import './Card.css'
const Kart = ({ kart, kartSec , donus, aktiflik}) => {

    const kartTiklandi=()=>{
        kartSec(kart)
        if(!aktiflik){
           kartSec(kart) 
        }
    }

    return (
        <div className='card' key={kart.id}>
            <div className={donus ? "flipped ":"" } >
                <img className='front' src={kart.src} alt="kart ön yüz" />
                <img className='back' src="/img/box.png" alt="kart ön yüz" onClick={kartTiklandi} />
            </div>
        </div>
    );
}

export default Kart;