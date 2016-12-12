function xadd(x){
    return function(y){
      if(Array.isArray(y)){
        return undefined;
      }
      return x+y;
    };
  }

function add(x,y) {
  
  var reg = new RegExp("^[0-9]*$"); 
  
  if(typeof(y) == "string"){
    return undefined;
  }
  
  if(reg.test(x)&&reg.test(y)){
    return x+y;
  }
  
  if(!reg.test(x)){
    return undefined;
  }
  
  if(!reg.test(y)){var sumTwoAnd = xadd(x);
              return sumTwoAnd;} 

}

