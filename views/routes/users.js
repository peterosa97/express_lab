const express = require('express'); //building an app\
const router = 
express.Router();

router.get('/', (req, res)=>{
    res.send('User List');
});

router.get('/new', (req, res)=>{
    res.send('New User Form');
});

router.post('/',(req, res)=>{

});


router.route("/:id").get((req, res)=>{
    res.send(`Getting User data: ${req.params.id}`);
}).delete(( req, res)=>{

}).put((req, res)=>{
    res.send(`Updating user with id: ${req.params.id}`);

});


//router.get('/:id',(req, res)>={
  //  res.send(`Getting User data: ${req.params.id}`);

//});
router.param("id",(req, res, next, id)=>{
    console.log(`Accessing user #${id}`);
    next();

});
module.exports = routers;