// This service will constantly send requests to the /order/item/quantity route for testing.
const https = require("https");
const axios = require("axios");

let count = 0;
while (count < 10) {
  //call a function to make a request.
  console.log(`Making Request: ${++count}. Ctrl+C to Terminate!\n`);
  makeRequest();
}

async function makeRequest() {
  //Create a random number for the quantity
  const randomQty = Math.floor(Math.random() * 10);
  //Create a random item to send in the request.
  const randomItem = Math.floor(Math.random() * 4);
  const randomData = ["Hamburger", "Hotdog", "Cookie", "Soda"];
  //Create the json object to send in the request.
  let res = await axios
    .post(`http://localhost:81/purchase/${randomData[randomItem]}/${randomQty}`)
    .then(res => {
      console.log(res.data);
    })
    .catch(error => {
      console.log("Error");
    });
}
