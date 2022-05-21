function countPositivesSumNegatives(input) {
    if (input && input.length) {
        let positiveSum = 0
        let negativeSum = 0
        input.forEach(num => num > 0 ? positiveSum++ : negativeSum += num)
        return [positiveSum, negativeSum]
    } else {
        return []
    }
}
// p - take in an array of postive and negative numbers, also null values 
// r - return an array where [total count of postive numbers, sum of the negative numbers]
// e - For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], 
//     you should return [10, -65].
// p - take in array , track positive numbers and add negative numbers

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

