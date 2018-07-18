const nodemailer = require('nodemailer');

const confirmMail = (req, rand) => {
  let toEmail = req.body.email;
  let link =
    req.protocol +
    '://' +
    req.get('host') +
    '/api/users/verify?id=' +
    rand +
    '&email=' +
    toEmail;
  let htmlLink =
    'Hello, <br> Please Click the link to verify your email for Baanda Registration with 10 days of receiving it<br>' +
    '<a href="' +
    link +
    '"> Click to verify </a>';
  var outcome = true;

  console.log(
    ' In ConfirmMail htmllink = ' + htmlLink + '  toEmail: ' + toEmail
  );

  // NOTE: auth user and pass should eventually come from config variables.
  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'jajabor119@gmail.com',
      pass: 'Ranjan10'
    }
  });

  var mailOptions = {
    from: 'jajabor119@gmail.com',
    to: toEmail,
    subject: 'Sending Email using Node.js',
    //text: 'That was easy -- Trying once  again!'
    html: htmlLink
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sendmail : ' + error);
      outcome = false;
    } else {
      console.log('Message %s sent: %s ', info.messageId, info.response);
    }
  });

  return outcome;
};

module.exports = confirmMail;
