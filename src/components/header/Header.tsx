import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="logo-and-name">
                <img src="src/components/assets/logo.png" alt="logo" />
                <a className="name" href="#">Rafael Impas</a>
            </div>
            <nav className="nav-container">
                <ul>
                    <li><a href="#my_projects">My Projects</a></li>
                    <li><a href="#">Contact Me</a></li>
                    <li><a href="https://github.com/rafimps18">My Github</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;