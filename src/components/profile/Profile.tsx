import "./Profile.css";

const Profile = () => {
    return (
        <>
            <div className="profile-container">
                <div className="profile-card">
                    <div className="profile-left">
                        <div className="profile-left-text">
                            <h1>Rafael Impas</h1>
                            <h2>Front-end Developer</h2>
                        </div>
                    </div>
                    <div className="profile-right">
                        <img className="profile-pic" src="src/components/assets/pic.jpg"></img>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;