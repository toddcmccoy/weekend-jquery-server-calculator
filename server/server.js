const express = require('express');
const bodyParser = require('body-parser');
const calculationsList = require('./modules/calculations.js');

//Make an instance of a server
const app = express();
const PORT = 5000;


// function inMyPocket(calculator){
//     if (calculator.operator === '+') {
//         let result = parseInt(calculator.firstNumber) + parseInt(calculator.secondNumber);
//         console.log('Result is:', result);
//     } else {
//         return false
//     }
// }
//Serve Static Files
app.use(express.static('server/public'));

//setup middlewares
app.use(bodyParser.urlencoded({ extended: true }));

//getting the calculations list
app.get('/calculations', function(req, res) {
    console.log('In Calculations');
    res.send(calculationsList);
});
//putting our new item into the calculation list
app.post('/calculations', function(req, res) {
    let num1 = Number(req.body.firstNumber);
    let num2 = Number(req.body.secondNumber);
    let kapow = req.body.operation;
    let answer = req.body.result;
    if (kapow === '+') {
        answer = num1 + num2;
    } else if(kapow ==='-'){
        answer = num1 - num2;
    } else if (kapow ==='*'){
        answer = num1 * num2;
    } else if (kapow === '/'){
        answer = num1 / num2;
    }
    console.log('The result of addition is:', sum);
    console.log('POST /calculations', req.body);
    // save our new item
    calculationsList.push(req.body);
})

//run the server, on the port we want.
app.listen(PORT, function() {
    console.log('SERVER RUNNING ON PORT', PORT)
});

