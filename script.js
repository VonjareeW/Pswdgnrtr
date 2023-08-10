// Assignment code here

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecialChars) {
  let password = "";
  const lowercaseChars = “abcdefghijklmnopqrstuvwxyz”;
  const uppercaseChars = “ABCDEFGHIJKLMNOPQRSTUVWXYZ”;
  const numericChars = “0123456789”;
  const specialChars = “!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  
  let availableChars = “”;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
