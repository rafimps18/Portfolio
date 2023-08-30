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
                            <div className="language-list-item">
                                <h3>HTML</h3>
                            </div>
                            <div className="language-list-item">
                                <h3>CSS</h3>
                            </div>
                            <div className="language-list-item">
                                <h3>JavaScript</h3>
                            </div>
                            <div className="language-list-item">
                                <h3>PHP</h3>
                            </div>
                            <div className="language-list-item">
                                <h3>Python</h3>
                            </div>
                            <div className="language-list-item">
                                <h3>Java</h3>
                            </div>
                        </div>
                        <h2>Tools</h2>
                        <div className="language-list">
                            <div className="language-list-item">
                                <h3>Postman</h3>
                            </div>
                            <div className="language-list-item">
                                <h3>Xampp</h3>
                            </div>
                            <div className="language-list-item">
                                <h3>React</h3>
                            </div>
                            <div className="language-list-item">
                                <h3>Chrome Developer Console</h3>
                            </div>
                            <div className="language-list-item">
                                <h3>VS Code</h3>
                            </div>
                            <div className="language-list-item">
                                <h3>Canva</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MySkills;