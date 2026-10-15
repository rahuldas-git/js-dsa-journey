
//  Problem: Concatenation of Array
 



// Approach 1: 
const getConcatenation = (nums) => {
    let ans = [];
    let n = nums.length;
    
    for (let i = 0; i < n; i++) {
        ans[i] = nums[i];      // Copy first half
        ans[i + n] = nums[i];  // Copy second half
    }
    return ans;
};

// Approach 2: Modern ES6+ JavaScript (Best for Web Development)
/*
const getConcatenationModern = (nums) => {
    return [...nums, ...nums];
};
*/

// ==========================================
// Test Cases (Run code to see outputs)
// ==========================================
console.log("Test Case 1:", getConcatenation([1, 2, 1])); 
// Expected Output: [1, 2, 1, 1, 2, 1]

console.log("Test Case 2:", getConcatenation([1, 3, 2, 1])); 
// Expected Output: [1, 3, 2, 1, 1, 3, 2, 1]