// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]
let array1 = [0, 21, 33, 6, 0, -9]
let array2 = [0, 1, 2, 3, 4, 5]

// Write your solution below:

const addToZero = (array) => {
    let result = false
    for (let i = 0 ; i < array.length-1; i++) {
        for (let j = i+1; j < array.length; j++) {
            console.log(`${array[i]}+${array[j]}`)
            if (!(array[i]+array[j])) result = true
        }
    }
    return result
}

console.log(addToZero(array))