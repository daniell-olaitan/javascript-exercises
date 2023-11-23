function palindrome(text) {
    while (text) {
        if (text.at(0).toLowerCase() !== text.at(-1).toLowerCase()) {
            return false;
        }

        text = text.slice(1, -1);
    }

    return true;
}

const palindromes = function (string) {
    let text = '';

    if (string.length <= 1) {
        return true;
    }

    for (let char of string) {
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') ||
            char >= '0' && char <= '9') {
            text += char;
        }
    }

    return palindrome(text);
};

// Do not edit below this line
module.exports = palindromes;
