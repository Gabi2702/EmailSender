const user = require('.././Configs/Models/Users')
const bcrypt = require('bcrypt')
const mailQueue = require('../Jobs/MailQueue')
const SendEmail = require('./../Jobs/SendEmail')

async function CreateUser(Email,Password){
    const UserExist = await user.findOne({ where: { Email: Email } });
    if (UserExist === null) {
        const hash = bcrypt.hashSync(Password, 10);

        const UserCreate = await user.create({Email:Email,Password:hash})

        const job = await mailQueue.process(SendEmail(Email));
       
        await mailQueue.add({job})
        
        return true
      } else {
        return {msg:'User alwready exist!'}
      }
}

module.exports = CreateUser