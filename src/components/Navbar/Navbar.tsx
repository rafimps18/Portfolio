import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="header">
            <nav className="navbar">

                <img
                    className="navbar-logo" src="src\components\assets\logo.png" alt="logo" />

                <a href="#">Rafael Impas</a>
                <div className="navbarRight">
                    <a href="#myProjects">My Projects</a>
                    <a href="#contactMe">Contact me</a>
                    <a href="https://github.com/rafimps18">Github</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;