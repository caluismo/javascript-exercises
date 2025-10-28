const palindromes = function (phrase) {
    phrase = phrase
        .toLowerCase()
        .replace(/[^a-z0-9]/g, ''); 

    const reversed = phrase.split('').reverse().join('');
    return phrase === reversed;
};

// Do not edit below this line
module.exports = palindromes;
