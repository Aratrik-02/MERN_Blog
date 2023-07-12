import React from 'react'
const Contact = () => {
  return (
    <div>
        <div className="card">
            <h2>Contact Us</h2>
            <div className="row">
                <div className="col">
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" />
                </div>
                </div>

                <div className="col">
                <div className="form-group">
                    <label>Surname</label>
                    <input type="text" />
                </div>
                </div>

                <div className="col">
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" />
                </div>
                </div>

                <div className="col">
                <div className="form-group">
                    <label>Phone</label>
                    <input type="text" />
                </div>
                </div>

                <div className="col">
                <div className="form-group">
                    <label>Message</label>
                    <textarea></textarea>
                </div>
                </div>

                <div className="col">
                <input type="submit" value="Submit" />
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Contact