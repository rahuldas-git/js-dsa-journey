
const longestCommonPrefix=(arr)=>{
  if(arr.length === 0) return "";

  arr.sort();

  const first=arr[0];
  const last=arr[arr.length-1];

  let i=0;
  while(i<first.length && i<last.length && first[i]===last[i]){
    i++;
  }
  return last.substring(0,i);
}

//test case

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output : "fl"