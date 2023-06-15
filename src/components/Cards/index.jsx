import { logementsList } from "../../datas/logementsList"


function Cards (){
    return(
        <div className="cards-container">
        <ul className="cards-list">
            {logementsList.map(logement => (
                <li key={logement.id} className="card">
                    <img src={logement.cover} alt={logement.title} />
                    <h3>{logement.title}</h3>
                </li>
            ))}
        </ul>
    </div>
    )
}

export default Cards