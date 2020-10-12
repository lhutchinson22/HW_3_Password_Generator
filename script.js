// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // the lenth of password uder chooses
  var length = passwordLengthChoice;

  //the compilation of all the answers chosen
  var userPromptOptions =
    charTypeLower + charTypeUpper + charTypeNums + charTypeSpecial;

  //WHEN prompted for the length of the password
  var passwordLengthChoice = prompt("How long would you like your password?");

  //WHEN prompted for character types to include in the password
  var charTypeLower = prompt("Lowercase?");
  var charTypeUpper = prompt("Uppercase?");
  var charTypeNums = prompt("Numbers?");
  var charTypeSpecial = prompt("Special Characters?");

  for (var i = 0, n = passwordLengthChoice.length; i < length; i++) {
    password += userPromptOptions.charAt(Math.floor(Math.random() * n));
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
