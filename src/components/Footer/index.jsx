import logo from '../../images/logoWhite.svg'
import '../../sass/main.scss'

function Footer (){
    return(
        <footer>
            <div className="footer-style">
                <img className='logo' src={logo} alt='Logo Kasa' />
                <h4>© 2020 Kasa. All rights reserved</h4>
            </div>
        </footer>
    )
}
export default Footer