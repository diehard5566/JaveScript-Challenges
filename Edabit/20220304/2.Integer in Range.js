// Create a function that validates whether a number n is within the bounds of lower and upper.
// Return false if n is not an integer.

const intWithinBounds = (n, lower, upper) => {
    // if (Number.isInteger(n) === false){
    //     return false;
    // } else if(n >= (lower) && n < upper){
    //     return true;
    // }
    // return false; 

    return Number.isInteger(n)? n >= (lower) && n < upper : false;

};


console.log(intWithinBounds(3, 1, 9)) // true

console.log(intWithinBounds(6, 1, 6)) // false

console.log(intWithinBounds(4.5, 3, 8)) // false