//Business Logic
//Change this function name to "validateTriangle"
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

function checkTriangleType(num1, num2, num3) {
  // event.preventDefault();
  if (num1 === num2 && num2 === num3) {
  return 'Equilateral'; 
  } else if (num1 === num2 || num2 === num3 || num1 === num3) {
    return 'Isosceles';
  } else if (num1 !== num2 && num2 !== num3 && num1 !==num3) {
    return 'Scalene';
  } else {
    return "Those numbers don't make a triangle. Please try again.";
  }
}


//UI Logic
$(document).ready(function() {
  $("button#submit").on("click", function() {
    //Get inputted values and parse to numbers.
    let num1 = parseFloat($("#num1").val());
    let num2 = parseFloat($("#num2").val());
    let num3 = parseFloat($("#num3").val());

    //console.log(num1, num2, num3);
    
    //Check to make sure that the user actually entered positive integers, and that those integers form a valid triangle. 
    let isValidInput = checkInput(num1, num2, num3);
    let isTriangle = checkTriangle(num1, num2, num3);

    //If the triangle is valid, find out what kind of triangle it is, and alert the result to the user.  
    if (isValidInput && isTriangle) {
      let triangleType = checkTriangleType(num1, num2, num3);
      alert(`You made an ${triangleType.toLowerCase()} triangle!`);
    } else {
      alert(`Those numbers don't make a triangle. Please try again.`);
    }   
    event.preventDefault();
  });
});