import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../App";
// import axios from "axios"

function Navbar() {
  const user = useContext(userContext);
  const navigate = useNavigate();
  // const URL = 'https://blog-server-iw2c.onrender.com'
  // const URL = 'http://localhost:5000'
  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate(0);
    navigate("/");
  };
  return (
    <div className="navbar-header">
    {/* <div> */}
      {/* <div>
        <h3>Blog App</h3>
      </div> */}
      {/* <div className="navbar-head">
        <div>
          <Link to="/" className="link">
            Home
          </Link>
          {user.username ? (
            <Link to="/create" className="link">
              Create
            </Link>
          ) : (
            <></>
          )}
          <a href="/contact" className="link">
            Contact
          </a>
        </div>
        {user.username ? (
          <div>
            <input
              type="button"
              onClick={handleLogout}
              value="Logout"
              className="btn_input"
            />
          </div>
        ) : (
          <div>
            <h5>
              <Link to="/register" className="link">
                Register/Login
              </Link>
            </h5>
          </div>
        )}
      </div> */}
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <a href="/" className="link">
              Home
            </a>
            {user.username ? (
            <a href="/create" className="link">
                Create
            </a>
            ) : (
              <></>
            )}

            <a href="/contact" className="link">
              Contact
            </a>

            {user.username ? (
              <div>
                <input
                  type="button"
                  onClick={handleLogout}
                  value="Logout"
                  className="link btn_input"
                />
              </div>
            ) : (
              <a href="/register" className="link">
                Register/Login
              </a>
            )}
          </ul>

          <h1 className="logo">Blogg.io</h1>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
