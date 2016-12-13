/*
写一个 function，传入两个或两个以上的数组，返回一个以给定的原始数组排序的不包含重复值的新数组。

换句话说，所有数组中的所有值都应该以原始顺序被包含在内，但是在最终的数组中不包含重复值。

非重复的数字应该以它们原始的顺序排序，但最终的数组不应该以数字顺序排序。
*/

function unique(array){
  var n = []; //一个新的临时数组
  //遍历当前数组
  for(var i = 0; i < array.length; i++){
    //如果当前数组的第i已经保存进了临时数组，那么跳过，
    //否则把当前项push到临时数组里面
    if (n.indexOf(array[i]) == -1) n.push(array[i]);
  }
  return n;
}

function unite(argument) {
  var list = [argument];
  var args = Array.prototype.slice.call(arguments, 1);
  for(var i in args){
   list.push(args[i]);
  }
  list = list.reduce(function(x,y){
    return x.concat(y);
  });
  
 
  return unique(list);
}
unite([1, 3, 2], [1, [5]], [2, [4]]) ;
