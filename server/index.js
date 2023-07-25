const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserModel = require('./models/User')
const PostModel = require('./models/Post')

const app = express()
require("dotenv").config();
app.use(express.json())
app.use(cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))
app.use(express.static('public'))

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });


const verifyUser = (req, res, next) => {
    const authHeader = req.headers.authorization;
  
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json("Authorization token missing");
    }
  
    const token = authHeader.substring(7); // Remove "Bearer " from the token
  
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      if (err) {
        return res.status(401).json("Invalid token");
      } else {
        req.email = decoded.email;
        req.username = decoded.username;
        next();
      }
    });
  };
  

app.get('/',verifyUser, (req, res) => {
    return res.json({email: req.email, username: req.username})
})


app.post('/register', (req, res) => {
    const {username, email, password} = req.body;
    bcrypt.hash(password, 10)
    .then(hash => {
        UserModel.create({username, email, password: hash})
        .then(user => res.json(user))
        .catch(err => res.json(err))
    }).catch(err => console.log(err))
    
})

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    UserModel.findOne({ email: email })
      .then(user => {
        if (user) {
          bcrypt.compare(password, user.password, (err, response) => {
            if (response) {
              const token = jwt.sign({ email: user.email, username: user.username },
                "jwt-secret-key", { expiresIn: '1d' });
              return res.json({ token: token, data: "Success"});
            } else {
              return res.json("Password is incorrect");
            }
          });
        } else {
          return res.json("User does not exist");
        }
      });
  });

function isValidImageUrl(url) {
  const imageExtensions = /\.(jpeg|jpg|png|gif|bmp)$/i;
  return imageExtensions.test(url);
}

app.post('/create', verifyUser, (req, res) => {
  const imageUrl = req.body.imageUrl;
  
  if (!isValidImageUrl(imageUrl)) {
    return res.status(400).json({ error: 'Invalid image URL' });
  }
  
  PostModel.create({
    title: req.body.title,
    description: req.body.description,
    imageUrl: imageUrl,
    email: req.body.email
  })
    .then(result => res.json("Success"))
    .catch(err => res.json(err));
});

app.get('/getposts', (req, res) => {
    PostModel.find()
    .then(posts => res.json(posts))
    .catch(err => res.json(err))
})

app.get('/getpostbyid/:id', (req, res) => {
    const id = req.params.id
    PostModel.findById({_id: id})
    .then(post => res.json(post))
    .catch(err => console.log(err))
})

app.put('/editpost/:id', (req, res) => {
    const id = req.params.id;
    PostModel.findByIdAndUpdate(
        {_id: id},{ 
        title: req.body.title, 
        description: req.body.description,
        imageUrl: req.body.image}
        ).then(result => res.json("Success"))
        .catch(err => res.json(err))
})

app.delete('/deletepost/:id', (req, res) => {
    PostModel.findByIdAndDelete({_id: req.params.id})
    .then(result => res.json("Success"))
    .catch(err => res.json(err))
})

app.listen(5000, () => {
    console.log("Server is Running")
})

