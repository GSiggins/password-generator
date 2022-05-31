// Defining global variables
var generateBtn = document.querySelector("#generate");

//Starting initial function
passwordGenerate()

function passwordGenerate() {
  //Establishing arrays of possible characters and defining them as variables
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',]
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}', '+', '-', '=', '~']
  var possibleChars = []
  var finalArray = []
  var possibleChars = []
  var includeUpper;
  var includeLower;
  var includeNumber;
  var includeSpecial;


  // Establishing parameters for prompt. Must be 8-128. Must be numbers.
  function validateUserInput() {
    let userLength = parseInt(prompt("How long do you want your password? (Between 8-128)"), 10);
    if (!userLength) {
      alert("Please type a number between 8-128");
      return validateUserInput();
    }
    if (userLength < 8 || userLength > 128) {
      alert("You need to choose between 8-128 characters for your password");
      return validateUserInput();
    }
    console.log(userLength)
    return userLength;
  }


  //Confirming character types via boolean referencing the array.
  function userConfirm() {
    includeUpper = confirm("Do you want to include uppercase letters? OK = Yes. Cancel = No.");
    includeLower = confirm("Do you want to include lowercase letters? OK = Yes. Cancel = No.");
    includeNumber = confirm("Do you want to include numbers? OK = Yes. Cancel = No.");
    includeSpecial = confirm("Do you want to include special characters? OK = Yes. Cancel = No.");
    console.log(includeUpper)
    console.log(includeLower)
    console.log(includeNumber)
    console.log(includeSpecial)

    //Creates exception if user chooses no characters at all
    if (!includeLower && !includeNumber && !includeSpecial && !includeUpper) {
      alert("You need to select at least one set of characters!");
      userPrompts();
      return null
    }
  }

  //Concatonates the master array with user-confirmed character types
  function generateArray() {
    if (includeUpper) {
      possibleChars = possibleChars.concat(upperCase);
    }

    if (includeLower) {
      possibleChars = possibleChars.concat(lowerCase);
    }

    if (includeSpecial) {
      possibleChars = possibleChars.concat(specialChars);
    }

    if (includeNumber) {
      possibleChars = possibleChars.concat(numberArray);
    }

    console.log(possibleChars)
    return
  }

  function arrayLoop(userLength) {
    for (let i = 0; i < userLength; i++) {
      finalArray = finalArray.concat(possibleChars[Math.floor(Math.random() * possibleChars.length)]);
    }
    console.log(finalArray)
    return finalArray.join ("");
  }
// dictates the order of functions
  let userLength = validateUserInput()
  userConfirm()
  generateArray()
  var result = arrayLoop(userLength)

  //populates password text field with the result

  document.getElementById("password").value = result
}

generateBtn.addEventListener("click", passwordGenerate);

