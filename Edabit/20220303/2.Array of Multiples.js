// Create a function that takes two numbers as arguments (num, length) 
// and returns an array of multiples of num until the array length reaches length.


const arrayOfMultiples = (num, length) => {
    let result = [];
    let sum = 0
    for (let i = 0; i < length; i++) {
        sum += num;
        result.push(sum);        
    }
    return result;
};


console.log(arrayOfMultiples(7, 5)) // [7, 14, 21, 28, 35]

console.log(arrayOfMultiples(12, 10)) // [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

console.log(arrayOfMultiples(17, 6)) // [17, 34, 51, 68, 85, 102]