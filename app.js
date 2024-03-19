const express = require('express');
const ejs = require('ejs');
const path = require('path');
const emailService = require('./emailService');

const app = express();
const port = 3000;

//Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// // Define a route
app.get('/', (req, res) => {
  // Render the 'index.ejs' template
  res.render('index');
});

app.get('/aboutus', (req, res) => {
  res.render('aboutus');
});

app.get('/contactus', (req, res) => {
  res.render('contactus');
});

app.get('/portfolio_single', (req, res) => {
  res.render('portfolio_single');
});

app.get('/blog_single', (req, res) => {
  res.render('blog_single');
});

app.get('/career', (req, res) => {
  res.render('career');
});

app.get('/career_single', (req, res) => {
  res.render('career_single');
});

app.get('/aspdotnet', (req, res) => {
  res.render('aspdotnet');
});

app.get('/angular', (req, res) => {
  res.render('angular');
});

app.get('/ionic', (req, res) => {
  res.render('ionic');
});

app.get('/html_css', (req, res) => {
  res.render('html_css');
});

app.get('/ssis', (req, res) => {
  res.render('ssis');
});

app.get('/ssrs', (req, res) => {
  res.render('ssrs');
});

app.get('/devoops', (req, res) => {
  res.render('devoops');
});

app.get('/lan', (req, res) => {
  const divId = req.query.lan;
  console.log(req.query.lan);
  res.render('lan');
});

app.get('/contactSendMail', async (req, res) => {
  try {
    // const to = 'recipient@example.com';
    // const subject = 'Hello ✔';
    // const text = 'Hello world?';
    // const html = '<b>Hello world?</b>';

    //const result = await emailService.sendEmail(to, subject, text, html);
    const result = await emailService.sendEmail();
    console.log('Email sent:', result);

    res.send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
