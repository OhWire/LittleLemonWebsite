import Logo from "./logo.svg"


function Navbar () {
    return (
        <>
        <div className="Nav Navbar">  
        <img alt="Logo" src={Logo} id="Logo"/>
            <ul className="Navitems">
                <li className="Home"><a href="#home">Home</a></li>
                <li className="About"><a href="#home">About</a></li>
                <li className="Menu"><a href="#home">Menu</a></li>
                <li className="Reservations"><a href="#home">Reservations</a></li>
                <li className="OrderOnline"><a href="#home">Order Online</a></li>
                <li className="Login"><a href="#home">Login</a></li>
            </ul>
        </div>
        </>
    )
}

export default Navbar;