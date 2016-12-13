/*
从传递进来的字母序列中找到缺失的字母并返回它。

如果所有字母都在序列中，返回 undefined。
*/

function fearNotLetter(str) {
  var list = [];
  for(var i=0;i<str.length;i++){
    list.push(str[i].charCodeAt());
  }
  var j=0;
  while(j<list.length){
    if(list[j+1]-list[j]==2){
      return String.fromCharCode(list[j]+1);
    }
    j++;
  }
  if(j==list.length){
    return undefined;  
  }
  
}

fearNotLetter("bcd");
