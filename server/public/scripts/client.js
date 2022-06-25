$(document).ready(onReady);


function onReady(){
    //get data
    getCalculations();
    $('#submit-button').on('click', handleClick);
}

function handleClick(){
    //collect inputs...
    const calculator = {
        firstNumber: $('#first-number').val(),
        secondNumber: $('#second-number').val(),
        operator: $('#operator').val(),
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
        $('#history-results').append(`<li>${calculation.firstNumber} ${calculation.operator} ${calculation.secondNumber}</li>`);
    }
}