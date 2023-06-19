import { Link } from "react-router-dom"
import logementsList  from "../../datas/logementsList"
import '../../sass/main.scss'



function Cards (){
  
    return(
        <div className="cards-container">
        <ul className="cards-list">
            {logementsList.map(logement => (
                <li key={logement.id} className="card">
                  <Link to={`/logements/${logement.id}`}> 
                  <img src={logement.cover} alt={logement.title} />
                  <h3>{logement.title}</h3>
                    </Link>  
                </li>
            ))}
        </ul>
    </div>
    )
}



export default Cards