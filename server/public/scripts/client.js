$(document).ready(onReady);


function onReady(){
    //get data
    $('#addition-button').on('click', createAddition);
    $('#subtraction-button').on('click', createSubtraction);
    $('#multiplication-button').on('click', createMultiplication);
    $('#division-button').on('click', createDivision);
    $('#submit-button').on('click', handleClick);
    $('#submit-button').on('click', getCalculations);
    $('#clear-button').on('click', clearFields);
    getCalculations();
}

let operator = '';

let mathAnswer = '';

function createAddition(){
    operator='+';
    console.log(operator);
    return operator
}

function createSubtraction(){
    operator='-';
    console.log(operator);
    return operator
}

function createMultiplication(){
    operator='*';
    console.log(operator);
    return operator
}

function createDivision(){
    operator='/';
    console.log(operator);
    return operator
    
}

function clearFields(){
    $('#first-number').val('');
    $('#second-number').val('');
    $('#history-results').empty();
}

function handleClick(){
    //collect inputs...
    const calculator = {
        firstNumber: $('#first-number').val(),
        secondNumber: $('#second-number').val(),
        operation: operator,
        result: mathAnswer
    }
    console.log(calculator);
    //ajax request to server
    $.ajax({
        url: '/calculations',
        method: 'POST',
        data: calculator //data here becomes req.body on the server
    }).then(function(response){
        console.log(response)
        // trigger a GET
        getCalculations();
    })
    
}

function getCalculations(){
    console.log('start of getCalculations');
    //we need to get the calculations
    $.ajax({
        url: '/calculations',
        method: 'GET'
    }).then(function(response){
        console.log(response);
        //response is whatever res.send sent us
        render(response);
    }).catch(function(error){
        console.log(error);
        alert('error in GET /calculations')
    })
    console.log('end of getCalculations');
}

function render(calculationsList){
    $('#history-results').empty();
    //append it to the DOM
    for (let calculation of calculationsList) {
        $('#history-results').append(`<li>${calculation.firstNumber} ${calculation.operation} ${calculation.secondNumber} = ${calculation.result}</li>`);
    }
    $('#current-result').empty();
}