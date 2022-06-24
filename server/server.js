// const express = require('express');
// const bodyParser = require('body-parser');
// const inventoryList = require('./modules/inventory.js');

// //Make an instance of a server
// const app = express();
// const PORT = 5000;

// //Serve Static Files
// app.use(express.static('server/public'));

// //setup middlewares
// app.use(bodyParser.urlencoded({ extended: true }));

// //getting our inventory list
// app.get('', function(req, res) {
//     console.log('');
//     res.send();
// });
// //putting our new item into the inventory
// app.post('', function(req, res) {
//     console.log('', req.body);
//     // save our new item
//     // .push(req.body);
// })

// //run the server, on the port we want.
// app.listen(PORT, function() {
//     console.log('SERVER RUNNING ON PORT', PORT)
// });