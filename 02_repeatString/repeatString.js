const repeatString = function(string, num) {
    let result = "";
    
    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            result = result + string;
        }

        return result;
    }

    return "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
