import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [image, setImage] = useState()
    const {id} = useParams()
    const navigate = useNavigate()
    // const URL = 'https://blog-server-iw2c.onrender.com'
    const URL = 'http://localhost:5000'
    const handleSubmit = (e) => {
        e.preventDefault()

        axios.put(`${URL}/editpost/`+id, {title, description, image})
        .then(res => {
            if(res.data === "Success") {
                navigate('/')
            }
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`${URL}/getpostbyid/`+id)
        .then(result=> {
            setTitle(result.data.title)
            setDescription(result.data.description)
            setImage(result.data.imageUrl)
        })
        .catch(err => console.log(err))
    }, [])

  return (
    <div className="post_container">
      <div className="post_form">
        <form onSubmit={handleSubmit}>
            <h2>Update Post</h2>
          <input type="text" placeholder="Enter Title" value={title}
          onChange={e => setTitle(e.target.value)}/>
          <textarea
            name="desc"
            id="desc"
            cols="30"
            rows="10"
            value={description}
            placeholder="Enter Description"
            onChange={e => setDescription(e.target.value)}
          ></textarea>
          <input
            required
            type="text"
            placeholder="Enter Image URL" // Use a text input for image URL
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}

export default EditPost;