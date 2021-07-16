const express = require('express');
const app = express();

app.get('/',(req,res,next)=>{
  console.log('first');
  next(new Error(''));
},
  (req,res,next)=>{
  console.log('First');
  });

app.get('/',(req,res,next)=>{
  console.log('second');
})


app.use('')

app.listen(8080);
