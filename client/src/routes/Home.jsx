import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);
  // const URL = 'http://localhost:5000';
  const URL = 'https://blog-server-iw2c.onrender.com';

  useEffect(() => {
    axios
      .get(`${URL}/getposts`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='posts_container'>
      <div className='posts_grid'>
        {posts.map((post) => (
          <Link to={`/post/${post._id}`} className='post' key={post._id}>
            {post.imageUrl && (
              <img src={post.imageUrl} alt='Post' />
            )}
            <div className='post_text'>
              <h2>{post.title.substring(0,20)}{post.title.length>20?"...":""}</h2>
              <p>{post.description.substring(0,50)}{post.description.length>50?"...Read more":""}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;




// import axios from 'axios'
// import  { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

// function Home() {

//   const [posts, setPosts] = useState([])
//   // const URL = 'https://blog-server-iw2c.onrender.com'
//   const URL = 'http://localhost:5000'
//   useEffect(() => {
//     axios.get(`${URL}/getposts`)
//     .then(posts => {
//       setPosts(posts.data)
//     })
//     .catch(err => console.log(err))
//   }, [])

//   return (
//     <div className='posts_container'>
//       {
//         posts.map(post => (
//           <Link to={`/post/${post._id}`} className='post' key={post._id}> 
          
//           <img src={`${URL}/Images/${post.file}`} alt="" />
//           <div className='post_text'>
//             <h2>{post.title}</h2>
//             <p>{post.description}</p>
//           </div>
          
//           </Link>
//         ))
//       }
//     </div>
//   )
// }

// export default Home