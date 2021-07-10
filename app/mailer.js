'use strict'

const nodemailer = require('nodemailer')

const config = {
  port: process.env.MAIL_PORT,
	host: process.env.MAIL_HOST,
	tls: { rejectUnauthorized: false }
}

const transport = nodemailer.createTransport(
  config
)

module.exports = function (mail) {
	mail.from = process.env.MAIL_FROM
	mail.subject = "Le livre blanc"
	mail.html = "<a href=\"https://drive.google.com/uc?export=download&id=1lRy3jzjEUbSrrsksGGgjfAqIgkzyWre6\">Livre Blanc</a>"
	mail.text = "https://drive.google.com/uc?export=download&id=1lRy3jzjEUbSrrsksGGgjfAqIgkzyWre6"
  return new Promise(function (resolve, reject) {
    transport.sendMail(mail, (err, infos) => {
      if (err) {
        reject(err)
      }
      resolve(infos)
    })
  })
}
