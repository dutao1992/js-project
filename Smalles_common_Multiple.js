function gcd(x,y){
  if(x<y){
    var temp=y;
    y=x;
    x=temp;
  }
  if(y===0){
    return x;
  }
  else{
    return gcd(y,x%y);
  }
}

function lcm(x,y){
  return x*y/gcd(x,y);
}


function smallestCommons(arr) {
  if(arr[0]>arr[1]){arr.sort();}
  var new_arr=[];
  var i=arr[0];
  while(i<=arr[1]){
    new_arr.push(i);
    i++;
  }
  return new_arr.reduce(lcm);//reduce函数在这里很有用
}


smallestCommons([5,1]);
