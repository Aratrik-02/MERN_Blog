import axios from 'axios'
import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {

  const [posts, setPosts] = useState([])
  const URL = 'http://localhost:5000'
  useEffect(() => {
    axios.get(`${URL}/getposts`)
    .then(posts => {
      setPosts(posts.data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className='posts_container'>
      {
        posts.map(post => (
          <Link to={`/post/${post._id}`} className='post' key={post._id}> 
          
          <img src={`${URL}/Images/${post.file}`} alt="" />
          <div className='post_text'>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
          
          </Link>
        ))
      }
    </div>
  )
}

export default Home