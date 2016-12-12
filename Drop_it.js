function drop(arr, func) {
  // Drop them elements.
  while(!func(arr[0])){
  arr.shift();  
  }
  
  return arr;
}

drop([1, 2, 3], function(n) {return n < 3; });
