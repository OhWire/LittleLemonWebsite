import Logo from "../components/logo.svg"


function HeroSection () {
    return (
        <>
            <div className="Hero">
                <div>
                    <h2>Little Lemon</h2>
                    <h3>Chigaco</h3>
                    <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual  environment. The restaurant features a locally-sourced menu with daily specials.</p>
                </div>
                <div>
                    <button>Reserve a Table</button>
                </div>
                <div>
                <img src={Logo} alt="Logo"/>
                </div>
            </div>
        </>
    )
}

export default HeroSection;