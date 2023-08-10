// Assignment code here

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecialChars) {
  let password = "";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz”;
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ”;
  const numericChars = "0123456789”;
  const specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  
  let availableChars = "”;

    if (includeLowercase) {
    availableChars += lowercaseChars;
  }
  if (includeUppercase) {
    availableChars += uppercaseChars;
  }
  if (includeNumbers) {
    availableChars += numericChars;
  }
  if (includeSpecialChars) {
    availableChars += specialChars;
  }
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomIndex];
  }
  if (password.length < 8 || password.length > 128) {
    return “The length of the password must be within  8 to 128 characters.”;
  }
  
  return password;
}




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
