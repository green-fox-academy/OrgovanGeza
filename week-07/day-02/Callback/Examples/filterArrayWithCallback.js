let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function filter(numbers, callback) {
    let result = [];

    for (let number of numbers) {
        if (callback(number)) {
            result.push(number);
        }
    }

    return result;
}

const graterThan2 = filter(numbers, n => n > 2);
const negatives = filter(numbers, n => n < 0);
const evens = filter(numbers, n => n % 2 === 0);

console.log(graterThan2);
console.log(negatives);
console.log(evens);