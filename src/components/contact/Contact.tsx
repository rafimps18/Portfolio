import "./Contact.css";

const Contact = () => {
    return (
        <>
            <div id="contact_me" className="contact-container">
                <div className="contact-card">
                    <div className="contact-header">
                        <h1>Contact Me</h1>
                        <div className="contact-form">
                            <div className="form-item">
                                <label htmlFor="name">Name</label>     
                                <input type="text" />    
                            </div>
                            <div className="form-item">
                                <label htmlFor="email">Email</label>   
                                <input type="text" />    
                            </div>
                            <div className="form-item">
                                <label htmlFor="message">Message</label>        
                                <input type="text" />    
                            </div>      
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;