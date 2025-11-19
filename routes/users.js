const express = require('express'); //building an app\
const router = 
express.Router();



router.get('/', (req, res)=>{
    res.send(`user/list`,{users:users});
});

router.get('/new', (req, res)=>{
    res.render('users/new', {firstName:""})
});


router.get('/new', (req, res)=>{
    res.send('New User Form');
});

router.post('/',(req, res)=>{
    res.send("User Created!");
    const firstName =req.body.firstName;
    const lastName =req.body.lastName;
    const gender =req.body.gender;
    const age =req.body.age;
    const isValid = firstName !=="" && lastName!=="";
    if(isValid)
    {
        console.log(`Adding User: ${firstName}`);
        users.push({
            name:firstName,
            lastName:lastName,
            gender:gender,
            age:age,
        });
        console.log(`New Set of Users: ${users}`)
        res.send("User Created!");
    }

    console.log(`Adding User: ${name}`);
    users.push({name:firstName});
    console.log(`New Set of Users: ${users}`);

});
console.log

router.route("/:id").get((req, res)=>{
    res.send(`Getting User data: ${req.params.id}`);
}).delete(( req, res)=>{

}).put((req, res)=>{
    res.send(`Updating user with id: ${req.params.id}`);

});


//router.get('/:id',(req, res)>={
  //  res.send(`Getting User data: ${req.params.id}`);

//});
const users = [];
router.param("id",(req, res, next, id)=>{
    console.log(`Accessing user #${id}`);
    next();

});
module.exports = routers;