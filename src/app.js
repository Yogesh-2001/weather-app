const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname,'../public')));
app.set('views',path.join(__dirname,'../templates/views'));
hbs.registerPartials(path.join(__dirname,'../templates/partials'));
console.log(path.join(__dirname,'../public'))
app.get('/',(req,res)=>{
  res.render('index');
});

app.get('/about',(req,res)=>{
  res.render('about');
});

app.get('/weather',(req,res)=>{
  res.render('weather');
});

app.get('*',(req,res)=>{
  res.render('404');
});


const port = process.env.port || 3000;

app.listen(port,(req,res)=>{
  console.log(`Listening to port ${port}`);
})
