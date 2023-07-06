import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { userContext } from '../App'

function Post() {
    const {id} = useParams()
    const [post, setPost] = useState({})
    const navigate = useNavigate()
    const user = useContext(userContext)
    const URL = 'https://blog-server-iw2c.onrender.com'

    useEffect(() => {
        axios.get(`${URL}/getpostbyid/`+id)
        .then(result=> setPost(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete(`${URL}/deletepost/`+id)
        .then(result=> {
            navigate('/')
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='post_container'>
        <div className='post_post'>
            <img src={`${URL}/Images/${post.file}`} alt="" />
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <div>
                {
                    user.email === post.email ? 
                    <>
                    <Link to={`/editpost/${post._id}`}>Edit</Link>
                    <button onClick={e => handleDelete(post._id)}>Delete</button>
                    </> : <></>
                }
                
            </div>
        </div>        
    </div>
  )
}

export default Post