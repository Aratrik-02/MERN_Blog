const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;



// const mongoose = require('mongoose')

// const PostSchema = new mongoose.Schema({
//     title: String,
//     description: String,
//     file: String,
//     email: String
// })

// const Post = mongoose.model('posts', PostSchema)

// module.exports = Post;