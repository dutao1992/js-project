//将给定的数字转换成罗马数字。所有返回的 罗马数字 都应该是大写形式。


var list_numeral = [1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900,1000,2000,3000];
var list_roman = ["I","II","III","IV","V","VI","VII","VIII","IX","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","M","MM","MMM"];

function convert(num) {
 var thousand = Math.floor(num/1000)*1000;
 num -= thousand;
 var hundred = Math.floor((num)/100)*100;
 num -= hundred;
 var ten = Math.floor((num)/10)*10;
 num -= ten;
 var list = [list_roman[list_numeral.indexOf(thousand)],list_roman[list_numeral.indexOf(hundred)],list_roman[list_numeral.indexOf(ten)],list_roman[list_numeral.indexOf(num)]];
 return list.join("");
}

convert(891);
