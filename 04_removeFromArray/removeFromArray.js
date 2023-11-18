const removeFromArray = function(array, ...removes) {
    let result = [];
    let removeTag = false;
    
    for (let element of array) {
        for (let remove of removes) {
            if (remove === element) {
                removeTag = true;
                break;
            }
        }

        if (!removeTag) {
            result.push(element);
        } else {
            removeTag = false;
        }
    }

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
