const Queue = require('bull')
const dotenv = require('dotenv');
dotenv.config();


const mailQueue = new Queue(process.env.JOB_NAME,process.env.REDIS_CONFIG)


module.exports = mailQueue