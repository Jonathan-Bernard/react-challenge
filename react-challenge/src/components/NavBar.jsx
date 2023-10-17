function NavBar() {
    return (
        <div className="NavBar">
            <img className="logo" src="../../logowildmazon.PNG" alt="logo wildmazon"></img>
            <section className="showcase">
                <video className="video-background" src="../../public/134822 (1080p).mp4" autoPlay loop muted></video>
                <h1 className="title">Le shop de la Wild !</h1>
            </section>
            <img className="panier" src="../../panier.avif" alt="panier"></img>
        </div>
    )
}



export default NavBar;