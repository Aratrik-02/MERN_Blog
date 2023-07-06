import { useState } from 'react'
import '.././assets/style.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    // const URL = 'https://blog-server-iw2c.onrender.com'
    const URL = 'http://localhost:5000'
    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${URL}/register`, {username, email, password})
        .then(res => {
            navigate('/login')
            console.log(res)
        }).catch(err => console.log(err))
    }

  return (
    <div className='signup_container'>
        <div className='signup_form'>
            <h2>Sign Up</h2>
            <br />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Username:</label> <br />
                    <input type="text" placeholder='Enter username'
                    onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <br />
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
                <button className='signup_btn'>Sign up</button>
            </form>
            <br></br>
            <p>Already have account?</p>
            <Link to="/login"><button>Login</button></Link>
        </div>
    </div>
  )
}

export default Register