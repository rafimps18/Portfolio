import profilePic from "/src/assets/pic.jpg";
import "./Profile.css";

const Profile = () => {
    return (
        <>
            <div className="profile-container">
                <div className="profile-card">
                    <div className="profile-left">
                        <div className="profile-left-text">
                            <h1 className="my-name">Rafael Impas</h1>
                            <h2 className="my-role">Front-end Developer</h2>
                            <p className="my-bio">Hi! I'm a 3rd year Computer Science student studying web and android app development. This is my portfolio that I used to practice React JS with Typescript.</p>
                        </div>
                    </div>
                    <div className="profile-right">
                        <img className="profile-pic" src={profilePic}></img>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;