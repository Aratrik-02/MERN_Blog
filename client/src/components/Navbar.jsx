import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { userContext } from "../App"
// import axios from "axios"

function Navbar() {
    const user = useContext(userContext)
    const navigate = useNavigate()
    // const URL = 'https://blog-server-iw2c.onrender.com'
    // const URL = 'http://localhost:5000'
    const handleLogout = () => {
        localStorage.removeItem('jwtToken');
        navigate(0)
        navigate('/')
        // axios.get(`${URL}/logout`)
        // .then(res => {
        //     if(res.data === "Success"){
        //         navigate(0)
        //         navigate('/')
        //     }
        // }).catch(err => console.log(err))
    }
  return (
    <div className='navbar-header'>
        <div><h3>Blog App</h3></div>
        <div>
            <Link to="/" className='link'>Home</Link>
            {
                user.username ? 
                    <Link to="/create" className='link'>Create</Link>
                : <></>
            }
            <a href="/contact" className='link'>Contact</a>
        </div>
        {
            user.username ?
            <div>
                <input type="button" onClick={handleLogout} value="Logout" className='btn_input'/>
            </div>
            :
            <div><h5><Link to="/register" className="link">Register/Login</Link></h5></div>
    
        }
    </div>
  )
}

export default Navbar