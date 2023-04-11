// Write your code below this line.

const luckyNumbers = (total) => {
    const res = []
    for (let i = 1; i <= total; i++) {
        res.push(Math.floor((Math.random() * 10) + 1))
    }
    return res
}

console.log(luckyNumbers(5))