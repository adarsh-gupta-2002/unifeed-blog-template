import {Link} from 'react-router-dom'

export default function Footer(){
    return (
        <> 
            <footer className="footer">
                <Link to = '/'><img src="Assets/Logo.svg" alt="Unifeed-logo" className="logo" /></Link>
                <p className="footer-text">Unifeed &#169; 2017 All Copyrights Not Reserved</p>
            </footer>
        </>
    )
}