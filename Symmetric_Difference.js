//该函数返回数组中唯一元素的集合
function unique(array){
  var n = []; //一个新的临时数组
  for(var i = 0; i < array.length; i++){
    if (n.indexOf(array[i]) == -1) n.push(array[i]);
  }
  return n;
}
//该函数返回两个数组中唯一元素组成的数组
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

//主函数，对任意多个数组进行对等差分操作，返回最后的数组
function sym(arg) {
  var args = Array.prototype.slice.call(arguments, 0);//调用所有的参数
  return args.reduce(sd);
}
