

// Problem: Valid Anagram


// Approach 1: 
// Time Complexity: O(n) | Space Complexity: O(1)
const isAnagram = (s, t) => {
    // If lengths are different, they cannot be anagrams
    if (s.length !== t.length) {
        return false;
    }

  
    let count = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 97]++; 
        count[t.charCodeAt(i) - 97]--; 
    }

   
    for (let i = 0; i < 26; i++) {
        if (count[i] !== 0) {
            return false;
        }
    }

    return true;
};

// Approach 2: Modern JS Built-in Methods (One-liner)
/*
const isAnagramModern = (s, t) => {
    if (s.length !== t.length) return false;
    return s.split('').sort().join('') === t.split('').sort().join('');
};
*/

// ==========================================
// Test Cases
// ==========================================
console.log("Test Case 1:", isAnagram("anagram", "nagaram")); 
// Expected Output: true

console.log("Test Case 2:", isAnagram("rat", "car")); 
// Expected Output: false