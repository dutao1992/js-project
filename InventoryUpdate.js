/*
依照一个存着新进货物的二维数组，更新存着现有库存(在 arr1 中)的二维数组. 如果货物已存在则更新数量 .
如果没有对应货物则把其加入到数组中，更新最新的数量. 返回当前的库存数组，且按货物名称的字母顺序排列.
*/

function bubbleSort(updateArr){
  var x = updateArr.length,y,temp;
  while(x>0){
    for(y=0;y<x-1;y++){
      if(updateArr[y][1]>updateArr[y+1][1]){
        temp = updateArr[y+1];
        updateArr[y+1]=updateArr[y];
        updateArr[y] = temp;
      }
    }
  x--;
  }
  return updateArr;
}//排序函数

function updateInventory(arr1, arr2) {
  
  if(arr2.length===0){
    return bubbleSort(arr1);
  }
  
  if(arr1.length===0){
    return bubbleSort(arr2);
  }
    // All inventory must be accounted for or you're fired!
  var updateArr = [];
  for(var foo in arr2){
    for(var bar in arr1){
      if(arr2[foo][1] == arr1[bar][1]){
        updateArr.push([arr1[bar][0]+arr2[foo][0],arr2[foo][1]]);//if exist,sum the number
      }
    }
  }
  
  var flatArr = updateArr.reduce(function(x,y){return x.concat(y);});
  for(var i in arr1){
    if(flatArr.indexOf(arr1[i][1])==-1){
      updateArr.push(arr1[i]);
    }
  }
  for(var j in arr2){
    if(flatArr.indexOf(arr2[j][1])==-1){
      updateArr.push(arr2[j]);
    }
  }//if not exist,add them into inventory.
  
  return bubbleSort(updateArr);
}//更新仓库函数

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];
updateInventory(curInv,newInv);
