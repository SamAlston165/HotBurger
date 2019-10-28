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

res.send('This is version 1 of Hotburger service.');

})

app.get('/getmenu', (req,res) => {

	res.send('Hotdog: $20' + '/n' + 'Hamburger: $35' + '/n' + 'Soda: $4' + '/n' + 'Cookie: $6');
})

app.post('/purchase', (req,res) => {
})

app.listen(port, () => console.log(`Server is listening on port ${port}!`))
