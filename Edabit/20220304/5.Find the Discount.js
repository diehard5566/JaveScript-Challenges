// Create a function that takes two arguments: 
// the original price and the discount percentage as integers 
// and returns the final price after the discount.

const dis = (price, discount) => {
    let after = (100 - discount) / 100;
    return price * after;
}

dis(1500, 50) // 750

dis(89, 20) //71.2

dis(100, 75) //25