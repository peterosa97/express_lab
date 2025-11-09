const express = require('express'); //building an app\
const router = 
express.Router();

router.get('/', (req, res)=>{
    res.send('User List');
});

router.get('/new', (req, res)=>{
    res.send('New User Form');
});
module.exports = routers;