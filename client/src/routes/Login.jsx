import { useState } from 'react'
import '.././assets/style.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState(null);
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
            }else {
                setError('Incorrect password. Please try again.');
            }
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='signup_container'>
        <div className='signup_form'>
            <h2>Login</h2>
            <br/>
            <form onSubmit={handleSubmit}>
                <div className='user-box'>
                    <input className="form_field" type="email" placeholder='Email' id="email" required
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label htmlFor="email">Email</label>
                </div>
                <div className='user-box'>
                    <input className="form_field" type="password" placeholder='Password' id="password" required
                    onChange={e => setPassword(e.target.value)}
                    />
                    <label htmlFor="password">Password</label>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
                <div className='sign_button'>
                    <button className='signup_btn'>Login</button>
                    <button><Link to="/register">Signup</Link></button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login