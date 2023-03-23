
var generateBtn = document.querySelector("#generate");

var specChar = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numBers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var uAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


function generatePassword () {

var pwLegnth = prompt("How long would you like your password to be? NOTE: Please choose a numeric value of at least 8 and no more than 128");
var pwlAlpha = confirm("Would you like your password to contain lowercase letters?");
var pwuAlpha = confirm("Would you like your password to contain uppercase letters?");
var pwnumBers = confirm("Would you like your password to contain numerics?");
var pwspecChar = confirm("Would you like your password to contain special characters?");

if (pwLegnth < 8 || pwLegnth> 128) {
alert("Please choose a numeric value between 8 and 128 characters and try again!");
}

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);