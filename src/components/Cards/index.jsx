import logementsList  from "../../datas/logementsList"
import '../../sass/main.scss'


function Cards (){
    return(
        <div className="cards-container">
        <ul className="cards-list">
            {logementsList.map(logement => (
                <li key={logement.id} className="card" onClick={() => handleClick(logement.id)}>
                    <img src={logement.cover} alt={logement.title} />
                    <h3>{logement.title}</h3>
                </li>
            ))}
        </ul>
    </div>
    )
}

function handleClick(logementId) {
    window.location.href = `/logements/${logementId}`
}

export default Cards