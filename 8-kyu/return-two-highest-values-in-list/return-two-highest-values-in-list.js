function twoHighest(arr) {
/*
Sort 
loop in all the length of the arr
  - compare al the objects in the array with the first max number
*/
  if (arr.length === 0) {
    return []; 
  }
    
  arr.sort((a, b) => a - b);
    
  let nOne = arr[arr.length - 1];
  let nTwo;
    
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] !== nOne) {
      nTwo = arr[i];
      break;  
    }
  }
    
  if (nTwo !== undefined) { 
    return [nOne, nTwo];
  } else {
    return [nOne];
  }
}
  
​