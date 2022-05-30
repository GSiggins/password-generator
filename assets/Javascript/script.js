// Assignment Code


passwordGenerate()

function passwordGenerate() {

  var generateBtn = document.querySelector("#generate");
  var possibleChars = []
  var passArray = []
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',]
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}', '+', '-', '=', '~']



  validateUserInput()
  function validateUserInput() {
    let passLength = prompt("How long do you want your password? (Between 8-128)");
    if (passLength < 8 || passLength > 128) {
      alert("You need to choose between 8-128 characters for your password");
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
      console.log(passLength)

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
      function randomSelect() {
        var passArray = []
        while (passArray.length < passLength) {
        var passValue = (Math.floor(Math.random() * passLength))
        passArray.push(passValue)
        }
        console.log(passArray)
        return;
      }
    }
  }
}

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);