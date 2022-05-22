

 
function fakeBin(x){
    var tmp = '';
    for(var i = 0; i < x.length; i++){
      if(x[i] < '5')tmp += '0';
      else if(x[i] >= '5')tmp += '1';
    }
    return tmp;
  }
    
    
  
  
  // p - takin a string of digits, never an empty string
  // r - return digit BELOW 5 with 0 and digit >= 5 with 1
  // e - 
  // p - if x is less than 5 return 0 if x is >= 5 return 1
  
  // Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
  
  // Note: input will never be an empty string