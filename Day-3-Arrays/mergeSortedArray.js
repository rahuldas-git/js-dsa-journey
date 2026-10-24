

const mergeSortedArray=(nums1, m, nums2, n)=>{

  if(n===0){
    return nums1;
  }
  
 
  for(let i=m;i<m+n;i++){
    nums1[i]=nums2[i-m];
  }
  return nums1.sort((a,b)=>a-b);
}
console.log(mergeSortedArray([0],0,[1],1)); // Output [1]