const express = require('express');
const app = express(); //Calling this function sets up a server



app.get('/', (req, res)=> {
    console.log('Here'); // request
    res.send("Hello World!"); //response

}); // this function will run when someone goes to the root fldr 

app.listen(3030);//to stop is cntrl C