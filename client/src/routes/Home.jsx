import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const URL = 'http://localhost:5000';
  const URL = 'https://blog-server-iw2c.onrender.com';

  useEffect(() => {
    axios
      .get(`${URL}/getposts`)
      .then((response) => {
        setPosts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className='posts_container'>
      {/* Render loader if isLoading state is true */}
      {isLoading ? (
        <div className='loader'>
          <span>Loading...</span>
        </div>
      ) : (
      <div className='posts_grid'>
        {posts.map((post) => (
          <Link to={`/post/${post._id}`} className='post' key={post._id}>
            {post.imageUrl && (
              <img src={post.imageUrl} alt='Post' />
            )}
            <div className='post_text'>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
      )}
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