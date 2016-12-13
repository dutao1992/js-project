/*
创建一个函数，接受两个或多个数组，返回所给数组的 对等差分(symmetric difference) (△ or ⊕)数组.
给出两个集合 (如集合 A = {1, 2, 3} 和集合 B = {2, 3, 4}), 而数学术语 "对等差分" 的集合就是指由所有只在两个集合其中之一的元素组成的集合(A △ B = C = {1, 4}). 
对于传入的额外集合 (如 D = {2, 3}), 你应该安装前面原则求前两个集合的结果与新集合的对等差分集合 (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
*/
function unique(array){
  var n = []; //一个新的临时数组
  for(var i = 0; i < array.length; i++){
    if (n.indexOf(array[i]) == -1) n.push(array[i]);
  }
  return n;
}
//该函数返回数组中唯一元素的集合

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
//该函数返回两个数组中唯一元素组成的数组
function sym(arg) {
  var args = Array.prototype.slice.call(arguments, 0);//调用所有的参数
  return args.reduce(sd);
}
//主函数，对任意多个数组进行对等差分操作，返回最后的数组
