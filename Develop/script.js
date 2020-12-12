// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



function userRequest() {

 var passwordLength = parseInt 
  (prompt (
    "how many characters would you like to use?")
  )

  if (passwordLength < 8 || passwordLength > 128){
    alert ("Password must be between 8 and 128 characters ")

  }
  if (passwordLength > 8 || passwordLength < 128)
  var upperCase = confirm ("Do you want to use upper case letters");
  var lowerCase = confirm ("Do you want to use lower case letters");
  var numbers = confirm ("Do you want to use numbers");
  var special = confirm ("Do you want to use special characters");

  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "1234567890";
  var special = "!@#$%^&*()";

  if upperCase = true
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
