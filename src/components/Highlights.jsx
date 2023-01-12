import Special1 from "./Salad.jpg"

function Highlights() {
    return(
        <>
        <div className="Highlights">
            <div>
                <h2>Specials</h2>
                <button>Online Menu</button>
            </div>

            <div className="Card">
                <img className="SpecialImg" src={Special1} alt="Special1"/>
                <h2>Greek Salad <span className="Price"> $10.99</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis lacinia arcu a rhoncus. Nunc pellentesque sapien eget lectus aliquet, et mollis nisi egestas</p>
                <h3>Order for <span className="Delivery">Delivery</span></h3>
            </div>

            <div className="Card">
                <img className="SpecialImg" src={Special1} alt="Special1"/>
                <h2>Greek Salad <span className="Price"> $10.99</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis lacinia arcu a rhoncus. Nunc pellentesque sapien eget lectus aliquet, et mollis nisi egestas</p>
                <h3>Order for <span className="Delivery">Delivery</span></h3>
            </div>

            <div className="Card">
                <img className="SpecialImg" src={Special1} alt="Special1"/>
                <h2>Greek Salad <span className="Price"> $10.99</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis lacinia arcu a rhoncus. Nunc pellentesque sapien eget lectus aliquet, et mollis nisi egestas</p>
                <h3>Order for <span className="Delivery">Delivery</span></h3>
            </div>
        </div>
        </>
    )
}

export default Highlights;