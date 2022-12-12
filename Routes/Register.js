const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser')
const cookieparser = require('cookie-parser')
// Middlewares
router.use(bodyparser.json())
router.use(cookieparser())
//Functions
const CreateUser = require('../Functions/CreateUser');
const mailQueue = require('./../Jobs/MailQueue')

router.post('/register', async (req, res) => {
  
    const {email,password} = req.body
    try{
        const user = await CreateUser(email,password)
        res.send({msg:user})
    }catch(e){
        res.send({msg:e})
    }
});


module.exports = router;
