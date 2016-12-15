/*
把一个字符串中的字符重新排列生成新的字符串，返回新生成的字符串里没有连续重复字符的字符串个数.连续重复只以单个字符为准.
例如, aab 应该返回 2 因为它总共有6中排列 (aab, aab, aba, aba, baa, baa), 但是只有两个 (aba and aba)没有连续重复的字符 (在本例中是 a).
*/
function distinct(arr){
  var num = 0;
  for(var i=0;i<arr.length-1;i++){
    if(arr[i]==arr[i+1]){
      return false;
    }
  }
  return true;
}//判断数组中元素是否有前后重复


function perm(arr) {  
    var arr_perm =[];
    (function fn(source, result) {  
        if (source.length === 0)  
            arr_perm.push(result);  
        else 
            for (var i = 0; i < source.length; i++)  
                fn(source.slice(0, i).concat(source.slice(i + 1)), result.concat(source[i]));  
    })(arr, []);  
  return arr_perm;
}  //字符串中元素的全排列

function permAlone(str){
  var num = 0;
  var arr = perm(str.split(""));
  for(var item in arr){
    if(distinct(arr[item])){
      num+=1;
    }
  }
  return num;
}
permAlone("abcdefa") ;
