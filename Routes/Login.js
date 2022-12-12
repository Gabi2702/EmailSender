const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser')
const cookieparser = require('cookie-parser')

// Middlewares
router.use(bodyparser.json())
router.use(cookieparser())
router.use(bodyparser.urlencoded({extended:true}))

// Functions 
const LoginUser = require('../Functions/LoginUser');
const generateAccessToken = require('./../Functions/GenerateAccessToken')

router.post('/login',async (req, res) => {
  
    const {email,password} = req.body

    try{
        const Validate = await LoginUser(email,password)
        if(Validate == true){
            const token = generateAccessToken({ email: email});
            res.cookie('authcookie',token,{
                maxAge:900000,
                httpOnly:true,
                secure:false}) 
            res.send({msg:'Logador com sucesso ' + token})
        }else{
            res.send({msg:'Informações Invalidas'})
        }
    }catch(e){
        res.send(e)
    }
});

module.exports = router;
