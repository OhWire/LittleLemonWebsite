import Special1 from "./Highlights/Salad.jpg"

function About() {
    return (
        <>
            <div className="AboutSection">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis lacinia arcu a rhoncus. . Praesent convallis lacinia arcu a rhoncus. Nunc pellentesque sapien eget lectus aliquet, et mollis nisi egestas</p>
                <img className="SpecialImg" src={Special1} alt="special1"/>
                <img className="SpecialImg" src={Special1} alt="special1"/>
            </div>
        </>
    )
}

export default About;