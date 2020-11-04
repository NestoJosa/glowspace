
const sgMail = require('@sendgrid/mail');

const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const express = require('express');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/send-email', (req, res) => {
  
  // remove the quotation marks from the start and end
  const name = req.query.name.slice(1, -1);
  const email = req.query.email.slice(1, -1);

  // if the name is empty (or just a bunch of spaces),  
  // say "Hello there", else Hello <name>!
  // note: trim removes the whitespaces, and then we check the length, 
  // if 0 then its falsy and the output is "Hello there!"
  let greeting = !name.trim().length ? 
    "Hello there!" :
    "Hello " + name + "!";
  
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  
  const msg = {
    to: email,
    bcc: 'hej@glowspace.dk',
    from: 'hej@glowspace.dk',
    templateId: 'd-88248f9ad2664e87974f91b6c45b7b80',
    dynamic_template_data: {
      subject: 'Testing Templates',
      greeting: greeting,
    },
  };


  sgMail.send(msg).then(() => {
    console.log('Message sent')
  }).catch((error) => {
      console.log(error.response.body)
      // console.log(error.response.body.errors[0].message)
  })

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ response: `hello from the express server` }));
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));