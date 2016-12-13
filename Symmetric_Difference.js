function unique(array){
  var n = []; //一个新的临时数组
  for(var i = 0; i < array.length; i++){
    if (n.indexOf(array[i]) == -1) n.push(array[i]);
  }
  return n;
}

function sd(arr1,arr2){
  arr1 = unique(arr1);
  arr2 = unique(arr2);
  var arr = arr1.concat(arr2);
  var unique_arr = unique(arr);
  for(var i=0;i<arr2.length;i++){
    if(arr1.indexOf(arr2[i])!=-1){
      unique_arr.splice(unique_arr.indexOf(arr2[i]),1);
    }
  }
  return unique_arr.sort();
}

function sym(arg) {
  var args = Array.prototype.slice.call(arguments, 0);//调用所有的参数
  return args.reduce(sd);
}
