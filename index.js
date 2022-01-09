function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  const BMI = (weight /(height/100)**2)
  let bmiStatus;
  
      if (BMI < 18.5) {
        bmiStatus = "You are underweight"
      }
      else if (BMI < 24.9) {
       bmiStatus = "You are healthy weight"
      }
      else if (BMI >25 || BMI <29.9) {
        bmiStatus = "You are overweight"
      }
      else { bmiStatus =  "You are Above Obesity"
      }

  

  alert (`weight: ${weight}
 age: ${age}
 height: ${height}
 Your BMI is ${BMI} ${bmiStatus}
`);

  
   

  
  

}
