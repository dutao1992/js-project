var arr_flat = [];


function steamroller(arr) {
  // I'm a steamroller, baby
  
  for(var element in arr){
    if(!Array.isArray(arr[element])){
      arr_flat.push(arr[element]); 
    }
    else
      { steamroller(arr[element]);}
  }
    return arr_flat;
}


steamroller([1, {}, [3, [[4]]]]);
