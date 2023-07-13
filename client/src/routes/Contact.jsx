import React from 'react'
const Contact = () => {
  return (
    <div className="post_container">
        <div className="form-container">
            <div className="left-container">
                <div className="left-inner-container">
                    <h2>Let's Chat</h2>
                    <p>Whether you have a question, want to start a project or            simply want to connect.</p>
                    <p>Feel free to send me a message in the contact form</p>
                </div>
            </div>
            <div className="right-container">
                <div className="right-inner-container">
                    <form action="mailto:babai.basak1107@gmail.com">
                        <h2 className="lg-view">Contact</h2>
                        <input type="text" placeholder="Name *"  required/>
                        <input type="email" placeholder="Email *" required/>
                        <textarea rows="4" placeholder="Message" required></textarea>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact