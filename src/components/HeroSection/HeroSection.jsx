import Chef from "./Chef.jpg"
import "./HeroSection.css"


function HeroSection () {
    return (
        <>
            <div className="Hero">
                <div className="Description">
                    <h2>Little Lemon</h2>
                    <h3>Chigaco</h3>
                    <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual  environment. The restaurant features a locally-sourced menu with daily specials.</p>
                    <button className="Button">Reserve a Table</button>
                </div>
                <div className="Chef">
                <img  src={Chef} alt="Chef" className="ChefPic"/>
                </div>
            </div>
        </>
    )
}

export default HeroSection;