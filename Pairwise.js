/*
举个例子：有一个能力数组[7,9,11,13,15]，按照最佳组合值为20来计算，只有7+13和9+11两种组合。
而7在数组的索引为0，13在数组的索引为3，9在数组的索引为1，11在数组的索引为2。
所以我们说函数：pairwise([7,9,11,13,15],20) 的返回值应该是0+3+1+2的和，即6。
我们可以通过表格来更直观地查看数组中索引和值的关系：
Index	0	1	2	3	4
Value	7	9	11	13	15
任务：帮右边的pairwise函数实现上面的功能。
*/

function pairwise(arr, arg) {
  var list = [0];
  for(var i=0;i<arr.length/2;i++){
    for(var j=i+1;j<arr.length;j++){
      if(arr[i]+arr[j]==arg){
      list.push(i,j);
      arr[j] = Number.POSITIVE_INFINITY;
      break;
    }
    }
    
  }
  return list.reduce(function(x,y){return x+y;});
}

pairwise([0, 0, 0, 0, 1, 1], 1) ;
