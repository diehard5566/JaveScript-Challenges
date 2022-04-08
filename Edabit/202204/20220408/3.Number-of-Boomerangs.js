// A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

// Some boomerang examples:

// [3, 7, 3], [1, -1, 1], [5, 6, 5]
// Create a function that returns the total number of boomerangs in an array.

// To illustrate:

// [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]
// Be aware that boomerangs can overlap, like so:

// [1, 7, 1, 7, 1, 7, 1]
// 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7],and [1, 7, 1]

const countBoomerangs = arr => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        if (arr[i - 1] === arr[i + 1] && arr[i] != arr[i - 1] && arr[i] != arr[i + 1]) {
            console.log(arr[i - 1], arr[i], arr[i + 1])
            result.push(arr[i - 1], arr[i], arr[i + 1])
        }
    }
    result
    console.log(result.length / 3)

    // let collection = 0;
    // for (let i = 0; i < arr.length; i++) {
    //   if ((arr[i] === arr[i+2]) && (arr[i] != arr[i+1])) {
    //     collection++;
    //   }
    // }
    // return collection;
}

countBoomerangs([9, 5, 9, 5, 1, 1, 1]) // 2

countBoomerangs([5, 6, 6, 7, 6, 3, 9]) // 1

countBoomerangs([4, 4, 4, 9, 9, 9, 9]) // 0
countBoomerangs([1, 7, 1, 7, 1, 7, 1])
