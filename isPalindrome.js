/* Is Palindrome
Difficulty
Easy

Concepts
Loops, General


Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

For example:

isPalindrom("a")
// returns true

isPalindrom("noon")
// returns true

isPalindrom("hello")
// returns false
Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter:

isPalindrom("Racecar")
// returns false

isPalindrom("racecar")
// returns true */
// Write your code below 

const isPalindrom = (word) => {
    return [...word.trim()].reverse().join("") === word.trim() 
}
console.log(isPalindrom("a"))
console.log(isPalindrom("noon"))
console.log(isPalindrom("hello"))
console.log(isPalindrom("Racecar"))
console.log(isPalindrom("racecar"))