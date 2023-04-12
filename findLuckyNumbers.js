// Write your code below this line.

const luckyNumbers = (total) => {
    let res = []
    while (res.length < total)  {
        let random = Math.floor((Math.random() * 10) + 1)
        if (!res.includes(random)) res.push(random)
    }
    return res
}

console.log(luckyNumbers(5))