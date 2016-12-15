/*
让日期区间更友好！
把常见的日期格式如：YYYY-MM-DD 转换成一种更易读的格式。
易读格式应该是用月份名称代替月份数字，用序数词代替数字来表示天 (1st 代替 1).
记住不要显示那些可以被推测出来的信息: 如果一个日期区间里结束日期与开始日期相差小于一年，则结束日期就不用写年份了。
月份开始和结束日期如果在同一个月，则结束日期月份就不用写了。
另外, 如果开始日期年份是当前年份，且结束日期与开始日期小于一年，则开始日期的年份也不用写。
例如:
makeFriendlyDates(["2016-07-01", "2016-07-04"]) 应该返回 ["July 1st","4th"]
makeFriendlyDates(["2016-07-01", "2018-07-04"]) 应该返回 ["July 1st, 2016", "July 4th, 2018"].
*/

var Month = {"01":"January","02":"February","03":"March","04":"April","05":"May","06":"June","07":"July","08":"August","09":"September","10":"Octomber","11":"November","12":"December"};

function date(x){
  x = parseInt(x);
  if(x==1){
    return "1st";
  }
  if(x==2){
    return "2nd";
  }
  if(x==3){
    return "3rd";
  }
  else{
    return x+"th";
  }
}

function makeFriendlyDates(arr) {
  var arr1 = arr[0].split("-");
  var arr2 = arr[1].split("-");
  var bngDate = new Date(arr[0].substr(0,4),arr[0].substr(5,2)-1,arr[0].substr(8,2));
  var endDate = new Date(arr[1].substr(0,4),arr[1].substr(5,2)-1,arr[1].substr(8,2));
  var days = (endDate.getTime()-bngDate.getTime())/24/60/60/1000;
  
  if(days===0){
    if(arr1[0] == "2016"){
      return [Month[arr1[1]]+" "+date(arr1[2])];
    }
    else{
      return [Month[arr1[1]]+" "+date(arr1[2])+", "+arr1[0]];
    }
  }
  
  if(days<365){
    if(arr1[0] == "2016"){
      if(arr1[1]==arr2[1]){
        return [Month[arr1[1]]+" "+date(arr1[2]),date(arr2[2])];
      }
      else{
        return [Month[arr1[1]]+" "+date(arr1[2]),Month[arr2[1]]+" "+date(arr2[2])];
      }
    }
    else{
      return [Month[arr1[1]]+" "+date(arr1[2])+", "+arr1[0],Month[arr2[1]]+" "+date(arr2[2])];
    }
  }
  else{
      return [Month[arr1[1]]+" "+date(arr1[2])+", "+arr1[0],Month[arr2[1]]+" "+date(arr2[2])+", "+arr2[0]];
  }
    return arr1;
}

makeFriendlyDates(["2018-01-13", "2018-01-13"]) ;
