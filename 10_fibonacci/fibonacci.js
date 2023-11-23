const fibonacci = function(number) {
    let firstNumber = 1;
    let secondNumber = 1;
    
    number = parseInt(number);
    if (number < 0) {
        return 'OOPS';
    }

    if (number === 1 || number === 2) {
        return 1;
    }

    for (let i = 3; i <= number; i++) {
        [firstNumber, secondNumber] = [secondNumber, firstNumber + secondNumber];
    }
    
    console.log(secondNumber);
    return secondNumber;
};

// Do not edit below this line
module.exports = fibonacci;
