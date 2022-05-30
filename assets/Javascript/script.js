// Assignment Code
var generateBtn = document.querySelector("#generate");
var possibleChars = []
var passArray = []

passwordGenerate()

function passwordGenerate() {

 
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',]
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}', '+', '-', '=', '~']



  validateUserInput()
  function validateUserInput() {
    let userLength = prompt("How long do you want your password? (Between 8-128)");
    if (userLength < 8 || userLength > 128) {
      alert("You need to choose between 8-128 characters for your password");
      validateUserInput();
      return null
    }
    if (typeof(userLength) !== Number) {
      alert("Please type a number between 8-128");
      validateUserInput();
      return null
    }

    userPrompts()

    function userPrompts() {
      var includeUpper = confirm("Do you want to include uppercase letters? OK = Yes. Cancel = No.");
      var includeLower = confirm("Do you want to include lowercase letters? OK = Yes. Cancel = No.");
      var includeNumber = confirm("Do you want to include numbers? OK = Yes. Cancel = No.");
      var includeSpecial = confirm("Do you want to include special characters? OK = Yes. Cancel = No.");

      if (!includeLower && !includeNumber && !includeSpecial && !includeUpper) {
        alert("You need to select at least one set of characters!");
        userPrompts();
        return null
      }


      console.log(includeUpper)
      console.log(includeLower)
      console.log(includeNumber)
      console.log(includeSpecial)
      console.log(userLength)

      generatePassword()
      function generatePassword() {
        var possibleChars = []
        if (includeUpper) {
          var possibleChars = possibleChars.concat(upperCase);
        }

        if (includeLower) {
          var possibleChars = possibleChars.concat(lowerCase);
        }

        if (includeSpecial) {
          var possibleChars = possibleChars.concat(specialChars);
        }

        if (includeNumber) {
          var possibleChars = possibleChars.concat(numberArray);
        }

        console.log(possibleChars)
        return
      }

      randomSelect()
     
        }
        return;
      }
    }

// function writePassword() {
// var password = generatePassword();
// var passwordText = document.querySelector("#password");

// generateBtn.addEventListener("click", writePassword);