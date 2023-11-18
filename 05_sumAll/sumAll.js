const sumAll = function(num1, num2) {
    let sum = 0;
    let temp;

    if (typeof num1 !== 'number' || typeof num2 !== 'number' ||
        num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    if (num2 < num1) {
        temp = num1;
        num1 = num2;
        num2 = temp;
    }
    
    for (let i = num1; i <= num2; i++) {
        sum = sum + i;
    }

    return sum;
}

// Do not edit below this line
module.exports = sumAll;
