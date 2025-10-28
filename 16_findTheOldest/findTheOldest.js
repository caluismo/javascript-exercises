const findTheOldest = function(arr) {
    return arr.reduce((oldest, person) => {
    // handle missing yearOfDeath by using current year
    const currentYear = new Date().getFullYear();

    const oldAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
    const newAge = (person.yearOfDeath || currentYear) - person.yearOfBirth;

    return newAge > oldAge ? person : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
