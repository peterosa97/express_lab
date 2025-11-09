const express = require('express'); //building an app\
const router = 
express.Router();

router.get('/', (req, res)=>{
    res.send('Post List');
});

router.get('/new', (req, res)=>{
    res.send('New Post');
});
module.exports = routers;