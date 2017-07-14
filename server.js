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

app.get('/projects/paws', function (req, res) {
  res.render('projects/paws', { title: 'Paws & Play' });
});

app.get('/projects/novanoid', function (req, res) {
  res.render('projects/novanoid', { title: 'Novanoid' });
});

app.get('/projects/orion', function (req, res) {
  res.render('projects/orion', { title: 'Orions Dungeon' });
});

app.get('/projects/daft', function (req, res) {
  res.render('projects/daft', { title: 'Daft Punk Soundboard' });
});

app.get('/projects/bikes', function (req, res) {
  res.render('projects/bikes', { title: 'Santander cycles map' });
});

app.use(express.static('public'));

app.listen(3000);
