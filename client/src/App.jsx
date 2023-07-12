import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './assets/style.css'
import Navbar from './components/Navbar'
import Register from './routes/Register'
import Login from './routes/Login'
import Home from './routes/Home'
import React,{ createContext, useEffect, useState } from "react"
import axios from 'axios'
import CreatePost from './components/CreatePost'
import Post from './components/Post'
import EditPost from './components/EditPost'
import AuthContext from './context/AuthContext'
import Contact from './routes/Contact'


export const userContext = createContext()


function App() {
  const [token, setToken] = useState('');
  const [user, setUser] = useState({
    username: null,
    email: null
  })

  useEffect(() => {
    const storedToken = localStorage.getItem('jwtToken');
    if (storedToken) {
      setToken(storedToken); // Set the JWT token from local storage
    }
  }, []);
  const URL = 'https://blog-server-iw2c.onrender.com'
  // const URL = 'http://localhost:5000'

  useEffect(() => {
    axios
      .get(`${URL}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      console.log(token)
  }, [token]);

  return (
    <userContext.Provider value = {user}>
    <AuthContext.Provider value={{ token, setToken }}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost token={token} />}></Route>
        <Route path="/post/:id" element={<Post />}></Route>
        <Route path="/editpost/:id" element={<EditPost />}></Route>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </AuthContext.Provider>
    </userContext.Provider>
  )
}

export default App
//npm run dev