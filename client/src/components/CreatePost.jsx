import axios from "axios";
import { useContext, useState } from "react";
import { userContext } from ".././App";
import { useNavigate } from "react-router-dom";

function CreatePost({ token }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [imageUrl, setImageUrl] = useState(); // New state for image URL
  const user = useContext(userContext);
  const URL = "http://localhost:5000";
  // const URL = 'https://blog-server-iw2c.onrender.com'

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      title: title,
      description: description,
      email: user.email,
      imageUrl: imageUrl, // Pass the imageUrl to the post data
    };

    axios
      .post(`${URL}/create`, postData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data === "Success") {
          navigate("/");
          navigate(0);
          // window.location.href = "/"
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="post_container">
      <div className="post_form">
        <form onSubmit={handleSubmit}>
          <h2>Create Post</h2>
          <input
            type="text"
            placeholder="Enter Title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            required
            name="desc"
            id="desc"
            cols="30"
            rows="10"
            placeholder="Enter Description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <input
            required
            type="text"
            placeholder="Enter Image URL" // Use a text input for image URL
            onChange={(e) => setImageUrl(e.target.value)}
          />
          {imageUrl && <img src={imageUrl} alt="Post" style={{ width: '100%', marginTop: '10px' }} />} {/* Display the image if the URL is entered */}
          <button>Post</button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;



// import axios from "axios";
// import { useContext, useState } from "react";
// import {userContext} from '.././App'
// import { useNavigate } from "react-router-dom";

// function CreatePost({ token }) {
//     const navigate = useNavigate()
//     const [title, setTitle] = useState()
//     const [description, setDescription] = useState()
//     const [file, setFile] = useState()
//     const user = useContext(userContext)
//     const URL = 'http://localhost:5000'
//     // const URL = 'https://blog-server-iw2c.onrender.com'
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         const formData = new FormData()
//         formData.append('title', title)
//         formData.append('description', description)
//         formData.append('email', user.email)
//         formData.append('file', file)
//         console.log(user.token)
//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         };

//         axios.post(`${URL}/create`, formData, config)
//         .then(res => {
//             if(res.data === "Success") {
//               navigate('/')
//               navigate(0)
//                 // window.location.href = "/"
//             }
//         })
//         .catch(err => console.log(err))
//     }

//   return (
//     <div className="post_container">
//       <div className="post_form">
//         <form onSubmit={handleSubmit}>
//             <h2>Create Post</h2>
//           <input type="text" placeholder="Enter Title" onChange={e => setTitle(e.target.value)} required/>
//           <textarea
//             required
//             name="desc"
//             id="desc"
//             cols="30"
//             rows="10"
//             placeholder="Enter Description"
//             onChange={e => setDescription(e.target.value)}
//           ></textarea>
//           <input required type="file" className="file" placeholder="Select File" 
//           onChange={e => setFile(e.target.files[0])}/>
//           <button>Post</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CreatePost;