const leapYears = function (year) {
    let remainder;
    let quotient;
    let result;
    
    remainder = year % 100;
    quotient = Math.floor(year / 100); 
    if (remainder === 0) {
        result = quotient % 4 === 0 ? true : false;
    } else {
        result = year % 4 === 0 ? true : false;
    }

    return result;
};

// Do not edit below this line
module.exports = leapYears;
