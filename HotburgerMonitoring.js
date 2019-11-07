const express = require('express')
const app = express()
const port = 80
const fs = require('fs');
var morgan = require('morgan')
const readLastLines = require('read-last-lines');

var accessLogStream = fs.createWriteStream(__dirname + '/project.log',{flags: 'a'});

//Reports back the total amount of earnings thus far
app.get('/gettotal', (req, res) => {

  readLastLines.read(__dirname + '/project.log', 1).then( (lines) => {

      res.send('Earnings thus far is: $' + lines.toString().substring(0,lines.length-1).split(' ')[24]);

  });
})

//Reports back the item that has been purchased the greatest number of times
app.get('/gettopseller', (req, res) => {

var contents = fs.readFileSync(__dirname + '/project.log');

readLastLines.read(__dirname + '/project.log', 1).then( (lines) => {

    res.send('Top Seller is: ' + lines.toString().substring(0,lines.length-1).split(' ')[19]);

});

})

//Reports back the total number of all requests
app.get('/getrequestcount', (req, res) => {

var contents = fs.readFileSync(__dirname + '/project.log');
var lines = contents.toString().split('\n').length - 1;
res.send('Total number of requests is ' + lines);

})

//Reports back whether the last request was successful or not
app.get('/getlastrequeststatus', (req, res) => {

readLastLines.read(__dirname + '/project.log', 1).then( (lines) => {

  if(lines.toString().substring(0,lines.length-1).split(' ')[12] == 200)
  {
    res.send('Last request was successful');
  }

  else
  {
    res.send('Last request was not successful');
  }

});
})

//Reports back when the last request occurred
app.get('/getlastrequesttime', (req, res) => {

readLastLines.read(__dirname + '/project.log', 1).then((lines) => res.send(lines));

})

app.listen(port, () => console.log(`Server is listening on port ${port}!`))
