/*

Write a function named transform that accepts an array of integers, and returns an array in which all the elements are squared and sorted in ascending order.

*/

function transform(nums) {
    try {
        // If nums is not an array then return an error
        if (!Array.isArray(nums)) {
            throw new TypeError('Input must be an array');
        }

        // An array variable to store the squared numbers
        let squaredNums = []

        // Loop through each element in the input array
        for (let iterator = 0; iterator < nums.length; iterator++) {
            const squaredNum = nums[iterator] * nums[iterator]

            // Squaring the element and push it to the new array
            squaredNums.push(squaredNum)
        }

        // Sorting the new array in ascending order
        squaredNums.sort(function(a, b) {
            // If the function returns a negative value, place a before b.
            // If the fucntion returns zero, the order of a and b will remain unchanged.
            // If the function returns a positive value, a will be placed after b.
            return a - b
        })

        return squaredNums;

    } catch (error) {
        // If there's an error, log the error message to the console
        console.error('Error:', error.message);
    }
}

const nums = [4,9,5,3,8]
const sortedSquaredNums = transform(nums)
console.log(sortedSquaredNums) // [9,16,25,64,81]