/**
 * Let's do some coding warm up to get you started with JS!!!
 */

/**
 * Task 1: Create a function that takes an integer as input and returns the 
 * letter grade (as a string) corresponding to it. Return "INVALID" if the 
 * integer is outside the range [0, 100].
 * 
 * Letter grade:
 * A = 90 -> 100
 * B = 80 -> 89
 * C = 70 -> 79
 * D = 60 -> 69
 * F = anything < 60
 */
function toLetterGrade(numGrade) {

}

/**
 * Task 2: Create a function that takes in an array of integers and returns a 
 * new array containing only even elements from the original array (order 
 * doesn't matter)
 *
 * Example: [9, 3, 2, 1, 2, 0] --> [2, 2, 0]
 */
function getEvenElements(array) {

}

/**
 * Task 3: Create a function that takes in a sentence and returns the LENGTH 
 * of the longest word in that sentence. Don't worry about punctuation!
 *
 * Hint: The .split() method might be useful here
 *
 * Example: "I love Bits of Good" --> 4
 */
function findLongestWord(string) {

}

/**
 * Task 4: Create a function that takes in 2 objects and return an object that is the combination of the 2
 *
 * Example:
    {
        name: "Casey",
        age: 10
    }
    {
        breed: "Pomeranian",
        friendly: false
    }
    -->
    {
        name: "Casey",
        age: 10,
        breed: "Pomeranian",
        friendly: false
    } 
 */
function combineObjects(object1, object2) {

}

/**
 *  Task 5: Create a function that takes an array as an argument and returns 
 *  the reverse array.
 *  
 *  DO NOT USE THE .reverse() METHOD!!
 * 
 *  Example: [1, 2, 3] -> [3, 2, 1]
 */
function reverseArr(array) {

}

console.log(toLetterGrade(90))
console.log(getEvenElements([1, 2, 3, 4, 5, 6, 6]))
console.log(findLongestWord("I love Bits Of Good"))
console.log(combineObjects({ name: "Casey", age: 18 }, { breed: "Pomeranian", friendly: false }))
console.log(reverseArr([1, 2, 3]))
