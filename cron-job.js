'use strict';
const nodemailer = require('nodemailer')
const config = require('./mail-config')
const { exec } = require('child_process')
const { inspect } = require('util')

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport(config.smtp);

// setup email data with unicode symbols
let mailOptions = {
  subject: '[Visual Test Result]', // Subject line
  text: 'Hello world?', // plain text body
};


exec('npm run test', { maxBuffer: 1024 * 1024, cwd: __dirname }, (error, stdout) => {
  const subject = error ? '[Visual Test Result] Fail!' : '[Visual Test Result] Pass!'
  const text = `${inspect(error)}
  --------stdout--------
  ${inspect(stdout)}`

  transporter.sendMail(Object.assign(config.mail, {
    subject,
    text,
  }), console.log);
})