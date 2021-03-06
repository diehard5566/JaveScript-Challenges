// Given a fraction frac (given in the format "1/2" for example) and n number of decimal places, return a sentence in the following format:

// "{fraction} rounded to {n} decimal places is {answer}"

const fracRound = (frac, n) => {
    // let fraction = frac
    //     .split('')
    //     .map(Number)
    //     .filter(e => !isNaN(e))
    // let x = frac.indexOf('/')
    // let answer = (+fraction.slice(0, x).join('') / +fraction.slice(x).join('')).toFixed(n)
    // return `${frac} rounded to ${n} decimal places is ${answer}`

    let f = frac.split('/')
    return `${frac} rounded to ${n} decimal places is ${(f[0] / f[1]).toFixed(n)}`
}

console.log(fracRound('1/3', 5)) // "1/3 rounded to 5 decimal places is 0.33333"

console.log(fracRound('2/8', 4)) // "2/8 rounded to 4 decimal places is 0.2500"

console.log(fracRound('22/7', 2)) // "22/7 rounded to 2 decimal places is 3.14"
