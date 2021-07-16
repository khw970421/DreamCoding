const fs = require('fs');
const http = require('http');
const server = http.createServer((req,res)=>{
  const url = req.url;
  res.setHeader('Content-Type','text/html');
  if(url == '/'){
    fs.createReadStream('./index.html').pipe(res);
  }
  else if(url == '/myHTML'){
    fs.createReadStream('./myhtml.html').pipe(res);
  }
  else{
    fs.createReadStream('./notFound.html').pipe(res);
  }
});

server.listen(8080);
