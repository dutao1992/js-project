/*
写一个 function，它遍历一个对象数组（第一个参数）并返回一个包含相匹配的属性-值对（第二个参数）的所有对象的数组。
如果返回的数组中包含 source 对象的属性-值对，那么此对象的每一个属性-值对都必须存在于 collection 的对象中。
例如，如果第一个参数是 [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]，
第二个参数是 { last: "Capulet" }，那么你必须从数组（第一个参数）返回其中的第三个对象，因为它包含了作为第二个参数传递的属性-值对。
*/

function where(collection, source) {
  var arr = [];
  var key_arr = Object.keys(source);
  // What's in a name?
  for(var i=0;i<collection.length;i++){
   for(var key in source){
    if (collection[i][key] != source[key]){
      break;
    }
    if(key == key_arr[key_arr.length-1]){
     arr.push(collection[i]);}
  }
    }
return arr;
}

where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) ;
