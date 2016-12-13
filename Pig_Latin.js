/*
把指定的字符串翻译成 pig latin。

Pig Latin 把一个英文单词的第一个辅音或辅音丛（consonant cluster）移到词尾，然后加上后缀 "ay"。

如果单词以元音开始，你只需要在词尾添加 "way" 就可以了。
*/
function translate(str) {
  var consonant_array = ["c","p","gl"];
  var new_str = "";
  if(consonant_array.indexOf(str.substr(0,2)) !== -1){
    new_str = str.substr(2) + str.substr(0,2) +"ay";
  }
  else if(consonant_array.indexOf(str.substr(0,1)) !== -1){
    new_str = str.substr(1) + str.substr(0,1) +"ay";
  }
  else{
    new_str = str + "way";
  }
  
  return new_str;
}

translate("eight");
