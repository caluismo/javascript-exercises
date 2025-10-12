const sumAll = function(aNum, bNum) {
    if (Number.isInteger(aNum) && aNum > 0 &&
        Number.isInteger(bNum) && bNum > 0) {
            let min = Math.min(aNum, bNum);
            let max = Math.max(aNum, bNum);
            let sum = 0;

            for (let i = min; i <= max; i++){
                sum += i;
        }
        return sum;
    }
    else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
