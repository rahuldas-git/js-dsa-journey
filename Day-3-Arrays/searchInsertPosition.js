// Problem statement
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

const searchInsertPosition = (nums, target) => {
 
  for(let i=0;i<nums.length;i++){
    if(target <= nums[i]){  
      return i;
    }
  }
  return nums.length;
  
};

//Test case
console.log(searchInsertPosition([1,2],3)); //Output : 2