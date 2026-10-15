// Problem: Contains Duplicate

// Approach 1: Modern JS & Optimal DSA (Using Set)
// Time Complexity: O(n) | Space Complexity: O(n)

const hasDuplicate = (nums) => {
    const numSet = new Set(nums);
   
    return numSet.size !== nums.length;
};

// Approach 2: Using Hash Map / Object 
/*
const hasDuplicateMap = (nums) => {
    const seen = {};
    for (let num of nums) {
        if (seen[num]) return true; // If already seen, duplicate found
        seen[num] = true;           // Mark as seen
    }
    return false;
};
*/




// Test Cases

console.log("Test Case 1:", hasDuplicate([1, 2, 3, 1])); 
// Expected Output: true

console.log("Test Case 2:", hasDuplicate([1, 2, 3, 4])); 
// Expected Output: false

console.log("Test Case 3:", hasDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); 
// Expected Output: true