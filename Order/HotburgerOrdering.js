const express = require('express')
const app = express()
const port = 80
const fs = require('fs');
var morgan = require('morgan')
var item = '';
var price = '';
var  quantity = '';
var totalPrice = '';
var lifetimeEarnings = '';
const readLastLines = require('read-last-lines');
var accessLogStream = fs.createWriteStream(__dirname + '/project.log',{flags: 'a'});

morgan.token('price', function getPrice (req) {
  return price
})

morgan.token('totalPrice', function getTotalPrice (req) {
  return totalPrice
})

morgan.token('item', function getItem (req) {
  return item
})

morgan.token('quantity', function getQuantity (req) {
  return quantity
})

morgan.token('lifetimeEarnings', function getEarnings (req) {
  return lifetimeEarnings
})

app.use(

	morgan("Date: :date[web] Method: :method Route: :url Status: :status Price: :price Total Price: :totalPrice Item: :item Quantity: :quantity Lifetime Earnings: :lifetimeEarnings",
	{
		stream: accessLogStream

	})
);

app.get('/', (req, res) => {

res.send('Welcome to the HotBurger Service');

})

app.get('/version', (req, res) => {

res.send('This is version 1 of Hotburger service.');

})

app.get('/getmenu', (req,res) => {

	var html = '';
	item = '';
	price = '';
	quantity = '';
	totalPrice = '';
  html += "<body>";
	html += "<h>	Hotburger Menu: </h>";
	html += "<p> 	Hotdog: $20 </p>";
	html += "<p> 	Hamburger: $35 </p>";
	html += "<p> 	Soda: $4 </p>";
	html += "<p> 	Cookie: $6 </p>";
  html += "</body>";
  res.send(html);
})

app.post('/purchase/:item*/:quantity*', (req,res) => {

item = req.params.item;
quantity = req.params.quantity;

if(item.toLowerCase() == "Hotdog".toLowerCase())
{
	price = 20;
}

else if(item.toLowerCase() == "Hamburger".toLowerCase())
{
	price = 35;
}

else if(item.toLowerCase() == "Soda".toLowerCase())
{
	price = 4;
}

else if(item.toLowerCase() == "Cookie".toLowerCase())
{
	price = 6;
}

totalPrice = price * quantity;

var reply = '';
reply += "<body>";
reply += "<p> Your food item is: " + item + "</p>";
reply += "<p> Your quantity is: " + quantity + "</p>";
reply += "<p> The price of each item is: $" + price + "</p>";
reply += "<p> The total price of the purchase is: $" + totalPrice + "</p>";
reply += "</body>";


readLastLines.read(__dirname + '/project.log', 1).then( (lines) => {

		if(lines.toString().substring(0,lines.length-1).split(' ')[24] == '-') {
			lifetimeEarnings = totalPrice;
			res.send(reply);
		}

		else {

		lifetimeEarnings = totalPrice + Number(lines.toString().substring(0,lines.length-1).split(' ')[24]);
		res.send(reply);
}
});

})

app.listen(port, () => console.log(`Server is listening on port ${port}!`))
