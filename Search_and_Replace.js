/*
使用给定的参数对句子执行一次查找和替换，然后返回新句子。

第一个参数是将要对其执行查找和替换的句子。

第二个参数是将被替换掉的单词（替换前的单词）。

第三个参数用于替换第二个参数（替换后的单词）。

注意：替换时保持原单词的大小写。例如，如果你想用单词 "dog" 替换单词 "Book" ，你应该替换成 "Dog"。
*/

function UpperFirstLetter(str)   
{   
   return str.replace(/\b\w+\b/g, function(word) {   
   return word.substring(0,1).toUpperCase( ) +  word.substring(1);   
 });   
}

function LowerFirstLetter(str)   
{   
   return str.replace(/\b\w+\b/g, function(word) {   
   return word.substring(0,1).toLowerCase( ) +  word.substring(1);   
 });   
}

function myReplace(str, before, after) {
  str =str.split(" ");
  x = before.substr(0,1).charCodeAt();
  y = after.substr(0,1).charCodeAt();
  var after_update = "";
  if(x>95&&y<95){
    after_update = LowerFirstLetter(after);
  }
  else if(x<95&&y>95){
    after_update = UpperFirstLetter(after);
  }
  else{
    after_update = after;
  }
  str = str.join(" ").replace(before,after_update);
  return str;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting") ;
