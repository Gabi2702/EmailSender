const jwt = require('jsonwebtoken')

const dotenv = require('dotenv');
dotenv.config();

function auth(req,res,next){
    const token = req.cookies["authcookie"];
    try{
        const user = jwt.verify(token,process.env.TOKEN_SECRET);
        req.user = user;
        next();
    }catch(err){
        res.clearCookie('authcookie').send('Acesso Negado!')
       
    }
    
    
}

module.exports = auth
