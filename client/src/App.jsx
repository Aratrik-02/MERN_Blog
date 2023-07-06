import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/style.css'
import Navbar from './components/Navbar'
import Register from './routes/Register'
import Login from './routes/Login'
import Home from './routes/Home'
import { createContext, useEffect, useState } from "react"
import axios from 'axios'
import CreatePost from './components/CreatePost'
import Post from './components/Post'
import EditPost from './components/EditPost'

export const userContext = createContext()

function App() {
  const [user, setUser] = useState({
    username: null,
    email: null
  })
  const URL = 'https://blog-server-iw2c.onrender.com'
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get(`${URL}/`)
    .then(user => {
      setUser(user.data)
    })
    .catch(err => console.log(err))
  }, [])
  return (
    <userContext.Provider value = {user}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />}></Route>
        <Route path="/post/:id" element={<Post />}></Route>
        <Route path="/editpost/:id" element={<EditPost />}></Route>
      </Routes>
    </BrowserRouter>
    </userContext.Provider>
  )
}

export default App
//npm run dev