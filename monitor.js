const express = require('express')
const app = express()
const port = 80
const fs = require('fs');
var morgan = require('morgan')

app.get('/gettotal', (req, res) => {

//Reports back the total amount of earnings thus far

})

app.get('/gettopseller', (req, res) => {

//Reports back the item that has been purchased the greatest number of times

})

app.get('/getrequestcount', (req, res) => {

//Reports back the total number of all requests
	

})

app.get('/getlastrequeststatus', (req, res) => {


//Reports back whether the last request was successful or not

})

app.get('/getlastrequesttime', (req, res) => {

//Reports back when the last request occurred	

})

