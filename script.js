// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password);

  passwordText.value = password;
}

function generatePassword() {
  var optionsLower = "abcdefghijklmnopqrstuvwxyz";
  var optionsLowerArray = optionsLower.split("");

  var optionsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var optionsUpperArray = optionsUpper.split("");

  var optionsNum = "1234567890";
  var optionsNumArray = optionsNum.split("");

  var optionsSpecial = "`!@#$%^&&*()?/`";
  var optionsSpecialArray = optionsSpecial.split("");

  var emptyArray = [];
  var result = "";

  //WHEN prompted for the length of the password
  var passwordLengthChoice = prompt("How long would you like your password?");

  // conditional statement if length meets criteria, if not, then ask again
  if (passwordLengthChoice < 8 || passwordLengthChoice > 128) {
    generatePassword();
  } else {
    //WHEN prompted for character types to include in the password
    var charTypeLower = confirm("Would you like to include Lowercase?");
    var charTypeUpper = confirm("Would you like to include Uppercase??");
    var charTypeNums = confirm("Would you like to include Numbers??");
    var charTypeSpecial = confirm("Include Special Characters?");

    // pushing user character options to empty array to be randomly generated
    if (charTypeLower) {
      Array.prototype.push.apply(emptyArray, optionsLowerArray);
    }
    if (charTypeUpper) {
      Array.prototype.push.apply(emptyArray, optionsUpperArray);
    }
    if (charTypeNums) {
      Array.prototype.push.apply(emptyArray, optionsNumArray);
    }
    if (charTypeSpecial) {
      Array.prototype.push.apply(emptyArray, optionsSpecialArray);
    }

    // a for loop to take in the length of the password and generate a random string
    for (var i = 0; i < passwordLengthChoice; i++) {
      //return the index of the random character in the emptyArray
      var randomIndex = Math.floor(Math.random() * emptyArray.length);
      //return the actual character
      result += emptyArray[randomIndex];
      //emptyArray[0]
      //   console.log("index of the choices being push to array: " + randomIndex);
    }
    console.log("password length choice: " + passwordLengthChoice);
    console.log("actual values being pushed to empty array: " + result);
  }
  return result;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
