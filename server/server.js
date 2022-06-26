const express = require('express');
const bodyParser = require('body-parser');
const calculationsList = require('./modules/calculations.js');

//Make an instance of a server
const app = express();
const PORT = 5000;

//Serve Static Files
app.use(express.static('server/public'));

//setup middlewares
app.use(bodyParser.urlencoded({ extended: true }));

//getting the calculations list
app.get('/calculations', inMyPocket(req, res) {
    console.log('In Calculations');
    res.send(calculationsList);
});
//putting our new item into the calculation list
app.post('/calculations', function(req, res) {
    console.log('POST /calculations', req.body);
    // save our new item
    calculationsList.push(req.body);
})

//run the server, on the port we want.
app.listen(PORT, function() {
    console.log('SERVER RUNNING ON PORT', PORT)
});

function inMyPocket(calculator){
    if (calculator.operator === '+') {
        let result = parseInt(calculator.firstNumber) + parseInt(calculator.secondNumber);
        console.log('Result is:', result);
    } else {
        return false
    }
}