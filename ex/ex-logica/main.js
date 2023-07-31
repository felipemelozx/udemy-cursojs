function max(x, y) {
    if (x > y) return x
    return y
}

// ou 

function max1(x, y) {
    return x > y ? x : y
}

// usando arrow function

const max2 = (x, y) => x > y ? x : y
console.log(max1(21, 10))