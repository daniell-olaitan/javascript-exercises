const reverseString = function(string) {
    let index = string.length - 1;
    let result = "";

    for (; index >= 0; --index) {
        result = result + string[index];
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;
