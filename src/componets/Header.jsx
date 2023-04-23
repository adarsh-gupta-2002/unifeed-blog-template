
import {Link} from 'react-router-dom'
import  {GiHamburgerMenu} from 'react-icons/gi'
import {useState} from 'react'


 
 
export default function Header(){
    const [menuOpen , setMenuOpen] = useState(false)
    return (
        <>
            <div className="header">
                <Link to = '/'><img src="Assets/Logo.svg" alt="Unifeed-logo" className="logo" /></Link>

                <nav className={`nav ${menuOpen && "open"}`}>
                    <Link to = "/">Home</Link>
                    <Link to = "features">Features</Link>
                    <Link to = "pricing">Pricing</Link>
                    <Link className='btn' to='subscribe'>Subscribe</Link>
                </nav>
                
                <button onClick = {() => setMenuOpen(prev => !prev)}>

                <GiHamburgerMenu className= "menu-icon" />
                </button>


            </div>
        </>
    )
}