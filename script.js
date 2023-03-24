/* calls the generate button that will start the pw generator */
var generateBtn = document.querySelector("#generate");
/* the variables that contain the characters that make up our generated password */
var specChar = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];
var numBers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var uAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var paSelect = [];
/* Function that generates the random password based on user's selections */
function generatePassword() {
  /* messages that interact with the user to help generate a custom password */
  /* lets the user know the parameters they've selected anf if changes are necessary */
  var pwLegnth = prompt("How long would you like your password to be? NOTE: Please choose a numeric value of at least 8 and no more than 128");
  if (pwLegnth < 8 || pwLegnth > 128) {
    alert("Please choose a numeric value between 8 and 128 and try again!");
  }
  else {
    alert("Your password will contain " + pwLegnth + " characters.");
  }
  var pwlAlpha = confirm("Would you like your password to contain lowercase letters?");
  if (pwlAlpha) {
    alert("Your password will contain lowercase letters.");
  }
  else {
    alert("Your passcode will not contain lowercase letters.");
  }
  var pwuAlpha = confirm("Would you like your password to contain uppercase letters?");
  if (pwuAlpha) {
    alert("Your password will contain uppercase letters.");
  }
  else {
    alert("Your password will not contain uppercase letters.");
  }
  var pwnumBers = confirm("Would you like your password to contain numerics?");
  if (pwnumBers) {
    alert("Your password will contain numerics.");
  }
  else {
    alert("Your password will not contain numerics.");
  }
  var pwspecChar = confirm("Would you like your password to contain special characters?");
  if (pwspecChar) {
    alert("Your password will contain special characters.");
  }
  else {
    alert("Your password will not contain special characters.");
  }
  /* alerts user to make one or more character type selection to generate password */
  if (
    pwlAlpha === false &&
    pwuAlpha === false &&
    pwnumBers === false &&
    pwspecChar === false
  ) {
    alert("Please choose at least one character type and try again!");
  }

  /* combines user selections to generate values */
  if (pwlAlpha) {
    paSelect = paSelect.concat(pwlAlpha);
  }
  if (pwuAlpha) {
    paSelect = paSelect.concat(pwuAlpha);
  }
  if (pwnumBers) {
    paSelect = paSelect.concat(pwnumBers);
  }
  if (pwspecChar) {
    paSelect = paSelect.concat(pwspecChar);
  }

  for (var i = 0; i < pwLegnth; i++) {
    var generation = (Math.floor(Math.random() * paSelect.length));
    generatePassword = generatePassword + paSelect[generation];

  }
  return generatePassword
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);