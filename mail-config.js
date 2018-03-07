module.exports.smtp = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'postor@gmail.com', // generated ethereal user
    pass: 'test' // generated ethereal password
  },
}

module.exports.mail = {
  from: '"Visual Test" <postor@gmail.com>', // sender address
  to: 'postor@gmail.com, 616668164@qq.com', // list of receivers
}