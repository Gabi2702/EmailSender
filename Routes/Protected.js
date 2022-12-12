const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser')
const cookieparser = require('cookie-parser')

// Middlewares
router.use(bodyparser.json())
router.use(cookieparser())
router.use(bodyparser.urlencoded({extended:true}))

// Auth
const auth = require('./../Middleware/AuthJwt')

router.get('/protected', auth, async (req,res)=>{
    const user = req.user
    res.send(user)
})

module.exports = router