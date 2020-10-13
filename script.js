// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    // the lenth of password user chooses
    var length = passwordLengthChoice;

    //WHEN prompted for the length of the password
    var passwordLengthChoice = prompt("How long would you like your password?");

    //WHEN prompted for character types to include in the password
    var charTypeLower = prompt("Lowercase?");
    var charTypeUpper = prompt("Uppercase?");
    var charTypeNums = prompt("Numbers?");
    var charTypeSpecial = prompt("Special Characters?");

    //the compilation of all the answers chosen
    var userPromptOptions =
      charTypeLower + charTypeUpper + charTypeNums + charTypeSpecial;
    console.log(userPromptOptions);

    // a for loop to take in the length of the password and generate a random string
    for (var i = 0, n = passwordLengthChoice.length; i < length; i++) {
      password += userPromptOptions.charAt(Math.floor(Math.random() * n));
    }
    return password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
