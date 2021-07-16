const express = require('express');
const app = express();

app.get('/animation/:genre/:mainCharacter',(req, res,)=>{
  console.log(req.params)
  console.log(req.query)
  res.send('hi');
})







app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


app.listen(8080)
