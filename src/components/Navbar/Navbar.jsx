import Logo from "./logo.svg"
import  "./Navbar.css"


function Navbar () {
    return (
        <>
        <div className="Navbar">  
            <ul className="Navitems">
                <img alt="Logo"  src={Logo} className="Logo"></img>
                <li className="Home Navbutton"><a href="#home">Home</a></li>
                <li className="About Navbutton"><a href="#home">About</a></li>
                <li className="Menu Navbutton"><a href="#home">Menu</a></li>
                <li className="Reservations Navbutton"><a href="#home">Reservations</a></li>
                <li className="OrderOnline Navbutton"><a href="#home">Order Online</a></li>
                <li className="Login Navbutton"><a href="#home">Login</a></li>
            </ul>
        </div>
        </>
    )
}

export default Navbar;