const findTheOldest = function (people) {
    const oldest = people.reduce((oldest, item) => {
        const oldestLatestYear = 'yearOfDeath' in oldest ? oldest.yearOfDeath : new Date().getFullYear();
        const itemLatestYear = 'yearOfDeath' in item ? item.yearOfDeath : new Date().getFullYear();
        let older;

        older = (oldestLatestYear - oldest.yearOfBirth) > (itemLatestYear - item.yearOfBirth) ? oldest : item;

        return older;
    });

    return oldest;
};

// const people = [
//     {
//         name: "Carly",
//         yearOfBirth: 1942,
//         yearOfDeath: 1970,
//     },
//     {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011,
//     },
//     {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1941,
//     },
// ];

// console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
