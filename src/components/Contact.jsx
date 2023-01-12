import Special1 from "./Salad.jpg"

function ContactUs() {
    return(
        <>
            <div className="Contact">
                <img className="SpecialImg" src={Special1} alt="special1"/>
                <ul className="Navitems">
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
                <ul className="Navitems">
                    <li>Contact</li>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>email</li>
                </ul>
                <ul className="Navitems">
                    <li><a href="#">Social Media Links</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Youtube</a></li>
                </ul>
            </div>
        </>
    )
}

export default ContactUs;