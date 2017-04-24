var nodemailer = require('nodemailer'),
    FROM = process.env.MAIL_USER,
    options = {
        host: process.env.MAIL_HOST,
        port: 587,
        secure: false,
        auth: {
            user: FROM,
            pass: process.env.MAIL_PASSWORD
        }
    };

var transport = nodemailer.createTransport(options);

exports.send = function(params) {

    params.from = FROM;
    params.to = 'jfroffice@gmail.com';

    transport.sendMail(params, function(err, resp) {
        cb && cb(err, resp);
        if (err) {
            console.log(err);
        } else {
            console.log(resp);
        }
    });
}

