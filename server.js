const express = require('express'); //building an app\
const userRouter = 
require('./routes/users');
const app = express(); //Calling this function sets up a server
app.set('view engine', 'ejs');
//app.use(logger);
app.use(express.static("public"));
app.use(express.urlencoded({extendedLtrue}));



app.use('/users', userRouter);
app.use('/posts', postRouter);




app.get('/', (req, res)=>{
    console.log('Here'); // request
    res.render("index",{user:"Peter"});
   
    // res.status(500).send("Hello World!"); //response wiht harding coding status
    //res.download('server.js');

    

}); // this function will run when someone goes to the root fldr 

app.get('/users', (req, res)=>{
    res.send('User List');
});



app.get('/new', (req, res)=>{
    res.render('users/new', {firstName:"Please enter your name"})
});

app.get('/posts', (req, res)=>{
    res.send('Post List');
});

app.get('/post/new', (req, res)=>{
    res.send('New Post');
});


app.listen(3030);//to stop is cntrl C

//make our own router 
function logger(req,res,next){
    console.log(`Page Accessed: ${req.originalUrl}`);
    next();
} 


