const numbers = [2, 4, 65, 23, 7, 8, 276, 276, 7, 4];
numbers.sort(function (a, b) {
    return a - b;
});
const Unique = (num) => {
    return num.filter((acc, b) => b === num.indexOf(acc));
};

console.log(Unique(numbers));