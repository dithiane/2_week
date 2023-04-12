/*
Given a word, return true if that word contains only unique characters. Return false otherwise.

For example:

hasUniqueChars("Monday")
// returns true
hasUniqueChars("Moonday")
// returns false
Uppercase and lowercase letters should be considered separately:

hasUniqueChars("Bob")
// returns true
*/


// Write your code below

const hasUniqueChars = (word) => {
    return new Set(word).size === word.length
}

const hasUniqueChars1 = (word) => {
    let collector = []
    for (let char of word) {
        if (!collector.includes(char)) collector.push(char)
        else return false
    }
    return true
}
console.log(hasUniqueChars1("Bob"))