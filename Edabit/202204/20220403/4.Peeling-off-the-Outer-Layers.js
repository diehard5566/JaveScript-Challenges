// Given an array of arrays, return a new array of arrays containing every element, except for the outer elements.

const peelLayerOff = arr => {
    let x = arr.slice(1, arr.length - 1)
    let newa = []
    for (let i = 0; i < x.length; i++) {
        newa.push(x[i].slice(1, -1))
    }
    return newa
}

peelLayerOff([
    ['a', 'b', 'c', 'd'],
    ['e', 'f', 'g', 'h'],
    ['i', 'j', 'k', 'l'],
    ['m', 'n', 'o', 'p'],
])
// ➞ [
//   ["f", "g"],
//   ["j", "k"]
// ]

peelLayerOff([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35],
])
// ➞ [
//   [7, 8, 9],
//   [12, 13, 14],
//   [17, 18, 19],
//   [22, 23, 24],
//   [27, 28, 29]
// ]

// peelLayerOff([
//     [true, false, true],
//     [false, false, true],
//     [true, true, true],
// ])
// ➞ [[false]]

peelLayerOff([
    ['hello', 'world'],
    ['hello', 'world'],
]) // []
