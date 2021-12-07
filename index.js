const { application } = require('express');
const express = require('express');
const app = express();

const port = 80;
const bodyparser = require('body-parser');

app.use(express.urlencoded());
app.set('view engine', 'pug');
app.use(express.static('static'));

//-----------------------------------------------------------------------------------------------------------
//Mongoose connection
// -----------------------------------------------------------------------------------------------------------
//Import the mongoose module
var mongoose = require('mongoose');
mongoose.set('debug', false)

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/login';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
console.log("Succesfully connected to the server.")

const data = require('./data');
const Login = data.Login;
const records = data.records;

// -----------------------------------------------------------------------------------------------------------
// For home page
// -----------------------------------------------------------------------------------------------------------
app.get(['/', '/home'], (req, res) => {
    res.render('home.pug');
})


// ------------------------------------------------------------------------------------------------------------
// Methods for about page
// ------------------------------------------------------------------------------------------------------------
app.get('/about', (req, res) => {
    res.render('about.pug');
})


// --------------------------------------------------------------------------------------------------------------
// Methods for sending and getting of form data
// --------------------------------------------------------------------------------------------------------------
app.get('/contacts', (req, res) => {
    const query = "Have any queries? Feel free to contact us."
    res.render('contacts.pug', {heading: query});
})
app.post('/contacts', (req, res) => {
    const response = "Your query has been submitted succesfully. You shall be contacted any time soon."
    res.render('contacts.pug', {heading: response});
})


//---------------------------------------------------------------------------------------------------------------
// Method for login page
// --------------------------------------------------------------------------------------------------------------
app.get('/signin', (req, res) => {
    let ren = false;
    res.render('signin.pug', {remarks: ren});
})
app.post('/signin', async(req, res) => {
    let uname = req.body.Username;
    let passwd = req.body.Password;
    const record = await Login.find({username:`${uname}`, password:`${passwd}`}, {username:1, _id:0});
    if (record[0]){
        res.render('user_page.pug')
    }else{
        const remark = true;
        console.log("not logged in", remark)
        res.render('signin.pug', {remarks: remark})
    }
})

// Signup page using mongoose and mongodb.
app.get('/signup', (req, res) => {
    res.render('signup.pug')
})
app.post('/signup', async(req, res) => {
    await Login.create(req.body).then(()=>{
        res.status(200).render('services.pug')
    }).catch(()=>{
        res.status(400).send("Unable to submit the form.")
    })
})


// ---------------------------------------------------------------------------------------------------------------
//App listenign on port 80
// ---------------------------------------------------------------------------------------------------------------
app.listen(port, () => {
    console.info(` Connected succesfully using port ${port}`);
})