const http  = require('http');

const courses = [
  {name : 'HTML'},
  {name : 'CSS'},
  {name : 'JS'},
  {name : 'NODE'}
]

const server = http.createServer((req,res)=>{

  const url = req.url;
  const method = req.method;

  if(url == '/courses'){

    if(method == 'GET'){
      res.writeHead(200,{'Content-Type' : 'application/json'})
      res.end(JSON.stringify(courses));
    }

    else if(method ==='POST'){
      const body = [];
      req.on('data',chunk=>{
        body.push(chunk);
        console.log(chunk);
      })

      req.on('end',()=>{
        const bodyStr = ''.concat(body);
        const bodyStr1 = [].concat(body);
        const bodyStr2 = Buffer.concat(body);
        const bodyStr3 = Buffer.concat(body).toString();
        console.log(bodyStr,bodyStr1,bodyStr2,bodyStr3);
        const course = JSON.parse(bodyStr);
        const course1 = JSON.parse(bodyStr);
        const course2 = JSON.parse(bodyStr);
        const course3 = JSON.parse(bodyStr);
        console.log(course, course1, course2, course3)

        courses.push(course);
        res.writeHead(201);
        res.end();
      })
    }

  }

})

server.listen(8080);
