// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////Beginning of my own code
//generate random password
function generatePassword() {
  var length = 8,
    characterOptions =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    passwordFinal = "";
  for (var i = 0, n = characterOptions.length; i < length; i++) {
    passwordFinal += characterOptions.charAt(Math.floor(Math.random() * n));
  }
  return passwordFinal;
  //console.log(passwordFinal);
}
