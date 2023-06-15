import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import '../../sass/main.scss'
function Header (){
    return(
        <nav>
            <div className="header-style">
                <img className='logo' src={logo} alt='Logo Kasa' />
                <div className="nav-link">
                    <Link className="nav-link-home" to="/">Accueil</Link>
                    <Link to="/about">A propos</Link>
                </div>
            </div>
        </nav>
    )
}

export default Header