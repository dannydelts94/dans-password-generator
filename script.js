
var generateBtn = document.querySelector("#generate");


var specChar = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numBers = "0123456789";
var uAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lAlpha = "abcdefghijklmnopqrstuvwxyz";





function generatePassword () {






  return
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);