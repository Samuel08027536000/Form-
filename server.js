// npm list mongoose is used to check the version of mongoose
// dotenv enables one to bring in dotenv files into the project so that one can use it... 
// .gitignore hides the secret key so as not to deploy the key when hosted
//process.env.PORT uses the port on the dotenv file
// useNewUrlParser and useUnifiedTopology properties in the db.js file is always true for the db to work effectively.
// express.Router imports the router object

// .post action sends requests to the database while  .get action reads a request from the server 
// req.params means parameters from the user in the frontend
// req.body means the whole content coming from the body from the frontend
// put is used to edit in the database

const express = require('express');
const PORT = process.env.PORT||3000;
const dotenv = require('dotenv');
const routes = require("./routes/index")
const connectDB = require('./config/db');
dotenv.config('.env');
connectDB();
const app = express ();
app.use(express.json());

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))

app.use('/api/students',routes);
app.set('view engine','ejs');

app.get('/home',(req,res)=>{
    res.render('index');
})

app.listen(PORT, ()=>{
    console.log(`server running on port:${PORT}.`);
});





