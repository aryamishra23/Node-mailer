require('dotenv').config();
const nodemailer = require('nodemailer')


var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "607f650d8de36f",
      pass: "50998db2ec5fc4"
    }
  });
const mailOptions = {
    from: 'aryamishra1911@gmail.com',
    to: 'aryamishra1911@gmail.com',
    subject: 'hello m testing',
    text: 'hii m testing',
};
transport.sendMail(mailOptions,function(err,info){
if(err){
    console.log(info);
}else {
    console.log(info);
}
});