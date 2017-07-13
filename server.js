const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/work', function (req, res) {
  res.render('work', { title: 'Work' });
});

app.get('/contact', function (req, res) {
  res.render('contact', { title: 'Contact' });
});

app.get('/about', function (req, res) {
  res.render('about', { title: 'About' });
});

app.get('/projects/alphabook', function (req, res) {
  res.render('projects/alphabook', { title: 'Alphabook' });
});




app.use(express.static('public'));

app.listen(3000);
