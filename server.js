const express = require('express'); //building an app\
const app = express(); //Calling this function sets up a server
app.set('view engine', 'ejs');


app.get('/', (req, res)=>{
    console.log('Here'); // request
    res.render("index");
   
    // res.status(500).send("Hello World!"); //response wiht harding coding status
    //res.download('server.js');


}); // this function will run when someone goes to the root fldr 

app.listen(3030);//to stop is cntrl C