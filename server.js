const express = require('express');
const app = express();  // create an express app
const port = 3000;  // we will use this later              // we will use this later
app.get('/', (req, res) => {
  res.send('Hello World!');
}); // create a route for the home page
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); // listen on the port           // listen on the port      
