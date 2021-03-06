// According to the lodash documentation, _.compact creates an array with all falsey values removed. 
// The values false, null, 0, "", undefined, and NaN are falsey.

// Your task is to build this helper function without using lodash. 
// You will write a function that receives an array and removes all falsey values.

// const compact = arr => {
//     let newarr = arr.filter(function(value) {
//         return value
//     });
//     return(newarr)
// };

const compact = arr => arr.filter(Boolean);


console.log(compact([0, 1, false, 2, "", 3]));   // => [1, 2, 3]

console.log(compact([1,0,false,null,undefined,"banana"]))