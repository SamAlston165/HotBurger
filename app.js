const express = require('express')
const app = express()
const port = 80
const fs = require('fs');
var morgan = require('morgan')

var accessLogStream = fs.createWriteStream(__dirname + '/project.log',{flags: 'a'});

app.use(morgan('tiny', {stream: accessLogStream}))

app.get('/', (req, res) => { 

res.send('Welcome to the HotBurger Service');

})


app.get('/version', (req, res) => {

res.send('This is version 0 of Hotburger service');

})


app.get('/logs', (req,res) => {

let content = fs.readFileSync(process.cwd() + "/project.log", 'utf8');
res.send(content);

})

app.listen(port, () => console.log(`Server is listening on port ${port}!`))