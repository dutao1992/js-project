var number_list = [];
function coin_change(change,coin){
  if(number_list.length<=coin.length-1){
    
    if(change<coin[0]){
      number_list.push(0);
      return coin_change(change,coin.slice(1));
    }
    else{
      change = change-Math.floor(change/coin[0]);
      coin = coin.slice(1);
      number_list.push(Math.floor(change/coin[0]));
      return coin_change(change,coin);
    }
  
  }
  return number_list.concat(Math.ceil(change/coin[0]));
}

function checkCashRegister(price, cash, cid) {
  
  // Here is your change, ma'am.
  var coin = [100,20,10,5,1,0.25,0.1,0.05,0.01];
  var cid_num = [];
  for(var i=0;i<cid.length;i++){
    cid_num.push(Math.ceil(cid[i][1]/coin[i]));
  }
  var change = cash-price;
  var list = coin_change(change,coin);
  
  var total = 0;
  for(var kind in cid){
    total += cid[kind][1];
  }
  
  if(total == change){return "Closed";}
  
  
  var change_list = [];
 
  for(var j in list){
      if(list[j]!==0){
      var value = (list[j]*coin[j]).toFixed(2);
      value = value.replace(/^(.*\..{2}).*$/,"$1");
      change_list.push([cid.reverse()[j][0],Number(value)]);  
      }
  }

   return change_list;
  
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
;
