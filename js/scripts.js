//Business Logic
function checkTriangle(num1, num2, num3) {

  let condition1;
  let condition2;
  let condition3;

  if (num1 + num2 > num3) {
    condition1 = true;
  } 

  if (num2 + num3 > num1) {
    condition2 = true;
  }

  if (num3 + num1 > num2) {
    condition3 = true;
  }

  if (condition1 === true && condition2 === true && condition3 === true) {
    return true;
  } else {
    return false;
  }
  
}

function checkInput(num1, num2, num3) {
  if (num1 && num2 && num3) {
    return true;
  } else {
    return false;
  }
}


//UI Logic
$(document).ready(function() {
  $("button#submit").on("click", function() {
    //Get the inputted user values and assign them to variables
    let num1 = parseInt($("#num1").val());
    let num2 = parseInt($("#num2").val());
    let num3 = parseInt($("#num3").val());
    //console.log(num1, num2, num3);
    
    //Check to make sure that the user actually entered positive integers, and that those integers form a valid triangle, and assign those booleans to variables
    let isValidInput = checkInput(num1, num2, num3);
    let isTriangle = checkTriangle(num1, num2, num3);

    if (isValidInput && isTriangle) {
      if (num1 === num2 && num2 === num3) {
      alert('Equilateral'); 
      } else if (num1 === num2 || num2 === num3 || num1 === num3) {
        alert('Isosceles');
      } else if (num1 !== num2 && num2 !== num3 && num1 !==num3) {
        alert('Scalene');
      } else {
        alert("Your numbers don't make a triangle. Please try again");
      }
    }
    
    event.preventDefault();
  });

});