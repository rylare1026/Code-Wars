function bmi(weight, height) {
    let result = weight / height ** 2
    
     if( result <= 18.5){
            return "Underweight"} 
    else if (result <= 25.0 ){
            return "Normal"}
    else if ( result <= 30.0){
            return "Overweight" }
     else { return "Obese"}
      
  //  }
  //   const x = weight / height ** 2
  //   return x <= 18.5 ? "Underwieght" : x <= 25.0 ? "Normal" : x <= 30 ? "Overweight" : "Obese"
    
  }
  
  // if (condition1) {
  //   //  block of code to be executed if condition1 is true
  // } else if (condition2) {
  //   //  block of code to be executed if the condition1 is false and condition2 is true
  // } else {
  //   //  block of code to be executed if the condition1 is false and condition2 is false
  // }
  
  
  // P - take BMI equation, numbers
  // R - BMI results and Write function bmi that calculates body mass index (bmi = weight / height2).
  
  //       if bmi <= 18.5 return "Underweight"
  
  //       if bmi <= 25.0 return "Normal"
  
  //       if bmi <= 30.0 return "Overweight"
  
  //       if bmi > 30 return "Obese"
  
  // E - 
    
  // P - create function, take in BMI equation, spit out differnt Logs, based on results of