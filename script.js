// Assignment code here

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecialChars) {
  let password = "";
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numericChars = '0123456789';
  const specialChars = '~!@#$%^&*()_+{}|:"<>?';

  let availableChars = '';

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
    return 'The length of the password must be within 8 to 128 characters.' ;
  }
  return password;
}


  function getPasswordCriteria() {
  const length = parseInt(prompt("Enter your desired  password length"));
  
  const includeLowercase = confirm("Do you want to feature any lowercase letters?");
  const includeUppercase = confirm("Do you want to feature any uppercase letters?");
  const includeNumbers = confirm(" Do you want to feature any numbers?");
  const includeSpecialChars = confirm(" Do you want to feature any special characters?");
  
  if (!(includeLowercase || includeUppercase || includeNumbers || includeSpecialChars)) {
    alert("You must choose at least one option.");
    return getPasswordCriteria();
  }

    return {
    length,
    includeLowercase: includeLowercase ? includeLowercase : false,
    includeUppercase: includeUppercase ? includeUppercase : false,
    includeNumbers: includeNumbers ? includeNumbers : false,
    includeSpecialChars: includeSpecialChars ? includeSpecialChars : false,
  };
}

const generateButton = document.getElementById('generate-button');
generateButton.addEventListener("click", () => {
  const passwordCriteria = getPasswordCriteria();
  const generatedPassword = generatePassword(
    passwordCriteria.length,
    passwordCriteria.includeLowercase,
    passwordCriteria.includeUppercase,
    passwordCriteria.includeNumbers,
    passwordCriteria.includeSpecialChars
  );
  
  var passwordText = document.querySelector("#password");
  passwordText.value = generatedPassword;
});


// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


  
  
  return password;
}

