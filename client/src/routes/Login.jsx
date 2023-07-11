import React,{ useState } from 'react'
import '.././assets/style.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    // const authContext = React.useContext(AuthContext);
    const navigate = useNavigate();
    // const navigate = useNavigate()
    const URL = 'https://blog-server-iw2c.onrender.com'
    // const URL = 'http://localhost:5000'
    // axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${URL}/login`, {email, password})
        .then(res => {
            console.log(res)
            if(res?.data?.data === "Success") {
                const jwtToken = res.data.token;
                // authContext.setToken(jwtToken);
                localStorage.setItem('jwtToken', jwtToken); 
                // window.location.href = "/"
                navigate('/') 
                navigate(0)
                // otherwise register/login is not updated to logout
            }
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='signup_container'>
        <div className='signup_form'>
            <h2 className="login-header">Login </h2>
            <br />
            <form onSubmit={handleSubmit}>
                <div className='user-box'>
                    {/* <label htmlFor="email">Email</label><br /> */}
                    <input className="login-input" type="email" placeholder='Email'
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <br />
                <div className='user-box'>
                    {/* <label htmlFor="password"></label><br /> */}
                    <input type="password" placeholder='Password' className="login-input"
                    onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button className='signup_btn'>Login</button>
            </form>
            <p className='not-register'>Not registered yet?
            <Link className="signup_redirect" to="/register">
                Signup
            </Link>
            </p>
        </div>
    </div>
  )
}

export default Login