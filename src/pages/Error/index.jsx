import { Link } from 'react-router-dom'
import './error.css'

function Error (){
    return(
        <div className="error-style">
            <div>
                <h2>404</h2>
            </div>
            <div>
                <h3>Oups! La page que vous demandez n'existe pas.</h3>
            </div>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error