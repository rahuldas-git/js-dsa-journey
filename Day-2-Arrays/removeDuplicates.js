
const removeDuplicats=(nums)=>{
   if (nums.length === 0) return 0;

    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}

// Test case
console.log(removeDuplicats([1,1,2])); //Output : 2
