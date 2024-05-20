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

// Define a route
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

app.get('/apply', (req, res) => {
  res.render('apply');
});



app.get('/lan', (req, res) => {
  res.render('lan');
});

// Configuring our data parsing
app.use(express.urlencoded({
  extend: false
}));
app.use(express.json());



app.post('/email', (req, res) => {
  //Send an email here but currently dummy email
    console.log('Data:', req.body);
    const { name, email, com_site, com_mail, budget, country, about } = req.body;


    emailService.sendMail(name, email, com_site, com_mail, budget, country, about, function(err, data) {
      if (err) {
          res.status(500).json({ message: 'Internal Error' });
      } else {
          res.status({ message: 'Email sent!!!' });
      }
    });

    try{
      console.log('email_start');
      emailService.sendMail;
    }
    catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Internal Server Error');
    }
});

app.post('/email_resume', (req, res) => {
  //Send an email here but currently dummy email
    console.log('Data:', req.body);
    const {name, email, mobile, experience, cur_com, cur_job_loc, cur_ctc, exp_ctc, notice_period, country, about } = req.body;


    emailService.sendMailResume(name, email, mobile, experience, cur_com, cur_job_loc, cur_ctc, exp_ctc, notice_period, country, about, function(err, data) {
      if (err) {
          res.status(500).json({ message: 'Internal Error' });
      } else {
          res.status({ message: 'Email sent!!!' });
      }
    });

    try{
      console.log('email_start');
      emailService.sendMailResume;
    }
    catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Internal Server Error');
    }
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
















// app.get('/aspdotnet', (req, res) => {
//   res.render('aspdotnet');
// });

// app.get('/angular', (req, res) => {
//   res.render('angular');
// });

// app.get('/ionic', (req, res) => {
//   res.render('ionic');
// });

// app.get('/html_css', (req, res) => {
//   res.render('html_css');
// });

// app.get('/ssis', (req, res) => {
//   res.render('ssis');
// });

// app.get('/ssrs', (req, res) => {
//   res.render('ssrs');
// });

// app.get('/devoops', (req, res) => {
//   res.render('devoops');
// });
