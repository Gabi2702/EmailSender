const user = require('../Configs/Models/Users')
const bcrypt = require('bcrypt');


async function LoginUser(Email,Password){
    const Verify = await user.findOne({ where: { Email:Email } });
    if (Verify === null) {
        return false
    } else {
        const auth = bcrypt.compareSync(Password, Verify.Password);
        if(auth == true){
            return true
        }else{
            return false
        }
    }
}

module.exports = LoginUser