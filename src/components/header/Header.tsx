import myLogo from "/src/assets/logo.png";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="logo-and-name">
                <img src={myLogo} alt="logo" />
                <a className="name" href="#">Rafael Impas</a>
            </div>
            <nav className="nav-container">
                <ul>
                    <li><a href="#my_projects">My Projects</a></li>
                    <li><a href="#my_skills">My Skills</a></li>
                    <li><a href="#contact_me">Contact Me</a></li>
                    <li><a href="https://github.com/rafimps18">My Github</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;