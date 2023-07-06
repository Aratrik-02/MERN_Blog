import { useState } from 'react'
import '.././assets/style.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    // const navigate = useNavigate()
    // const URL = 'https://blog-server-iw2c.onrender.com'
    const URL = 'http://localhost:5000'
    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${URL}/login`, {email, password})
        .then(res => {
            if(res.data === "Success") {
                window.location.href = "/"
                // navigate('/') otherwise register/login is not updated to logout
            }
            console.log(res)
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='signup_container'>
        <div className='signup_form'>
            <h2>Login </h2>
            <br />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label><br />
                    <input type="email" placeholder='Enter Email'
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="password">Password:</label><br />
                    <input type="password" placeholder='********'
                    onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button className='signup_btn'>Login</button>
            </form>
            <br></br>
            <p>Not Registered?</p>
            <Link to="/register"><button>Signup</button></Link>
        </div>
    </div>
  )
}

export default Login