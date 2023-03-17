import './Card.css'
const Kart = ({ kart }) => {
    return (
        <div className='card' key={kart.id}>
            <div>
                <img className='front' src={kart.src} alt="kart ön yüz" />
                <img className='back' src="/img/box.png" alt="kart ön yüz" />
            </div>
        </div>
    );
}

export default Kart;