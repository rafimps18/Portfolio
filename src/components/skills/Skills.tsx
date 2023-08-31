import "./Skills.css";

const MySkills = () => {
    return (
        <>
            <div id="my_skills" className="skills-container">
                <div className="skills-card">
                    <div className="skills-header">
                        <h1>My Skills</h1>
                        <h2>Languages</h2>
                        <div className="language-list">
                            <div className="language-list-row">
                                <div className="language-list-item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" />
                                    <h3>HTML</h3>
                                </div>
                                <div className="language-list-item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" />
                                    <h3>CSS</h3>
                                </div>
                                <div className="language-list-item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                                    <h3>JavaScript</h3>
                                </div>
                                <div className="language-list-item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />

                                    <h3>PHP</h3>
                                </div>
                                <div className="language-list-item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />

                                    <h3>Python</h3>
                                </div></div>
                        </div>
                        <h2>Frameworks and Libraries</h2>
                        <div className="language-list">
                            <div className="language-list-row">
                                <div className="language-list-item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                                    <h3>React</h3>
                                </div>
                                <div className="language-list-item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg" />
                                    <h3>Laravel</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MySkills;