const nodemailer = require("nodemailer");

async function SendEmail(to) {

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'carey.pfeffer36@ethereal.email',
        pass: 'FhNmHEzA9hAHMsYnvw'
    }
});

  // send mail with defined transport object
  const Sender = await transporter.sendMail({
    from: 'carey.pfeffer36@ethereal.email', // sender address
    to: to, // list of receivers
    subject: "Cadastro Realizado com sucesso!!", // Subject line
    text: "Olá, Seu cadastro foi efetuado com sucesso", // plain text body
    html: "<p>Olá Seja bem vindo!! </p>", // html body
  });

  console.log('email enviado')
}

module.exports = SendEmail
