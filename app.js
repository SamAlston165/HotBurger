const http = require('http');
const log = require('simple-node-logger').createSimpleFileLogger('project.log');
const fs = require('fs');
const port = 80;

const server = http.createServer((request, response) => {

  if(request.url == '/version') {

    if(response.statusCode == 200)
    {
    response.end('This is version 0 of the HotBurger service');
    log.info('Request: localhost:', port , request.url , ' with status code ', response.statusCode , ' occured at ', new Date().toJSON());
    }
  }

  if(request.url == '/logs') {
    let content = fs.readFileSync(process.cwd() + "/project.log").toString()
    response.end(content);
  }

  response.end('Welcome to the HotBurger Service');
  log.info('Request: localhost:', port , request.url.substring(0,request.length-1) , ' with status code ', response.statusCode ,' occured at ', new Date().toJSON());

})

server.listen(port, () => {
console.log(`Server listening on port: ${port}`);
});
