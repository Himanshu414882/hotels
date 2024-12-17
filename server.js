//console.log("server running");
/*function callback(){
    console.log('callback function is running');
}

const add = function(a,b,callback){
    var result = a+b;
    console.log('result'+result);  //main function work complete
    callback();
}

add(3,4,callback);

const add = function(a,b,callback){
    var result = a+b;
    console.log('result'+result);  //main function work complete
    callback();
}

add(2,3,function(){
    console.log('add completed');
})


add(2,3,()=>console.log('add new completed'));*/

/*var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile('greeting.txt','Hi'+user.username+'!\n',()=>{
    console.log("file is created");
});*/


/*const notes = require('./notes.js');
var _ = require('lodash');



console.log('server file is available');
var age = notes.age;
var result = notes.addNumber(age,18);
console.log(age);
console.log(result);

var data = ["person","person",1,2,1,2,"name","age","2"];
var filter = _.uniq(data);
console.log(filter);

console.log(_.isString("hi"));*/

//Server making using expressJS

const express = require('express')
const app = express()               // app name have all functionalities of express
const db = require('./db');
require('dotenv').config();
const passport = require('./auth');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;


// Middleware Function
const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
    next(); // Move on to the next phase
}
app.use(logRequest);

app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local', {session: false})


app.get('/', function (req, res) {     //to get the data
  res.send('Hello World')
})







/*app.get('/chicken',(req,res)=>{
    res.send('Sure sir, i would love to serve chicken')
})

app.get('/idli',(req,res)=>{
    var customized_idli = {
        name: 'rava idli',
        size: '10 cm diameter',
        is_sambhar: true,
        is_chutney: false
    }
   // res.send('Sure sir, i would love to serve idli')
   res.send(customized_idli)
})

app.post('/items',(req,res)=>{
    res.send('data is saved');
})*/


// Import the router files
const personRoutes = require('./routes/personRoutes'); 
const menuItemRoutes = require('./routes/menuItemRoutes');

// Use the routers
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);



app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})    //port