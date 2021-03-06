// Assignment Code
var generateBtn = document.querySelector("#generate");
// variables for char select
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var numberChar = "1234567890";
var specialChar = "!@#$%^&*()";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // code to return invalid request if min requirements arent met
  if (password === undefined) {
    passwordText.value = "Invalid request, please try again";
  } else {
    passwordText.value = password;
  }
}
// start of function prompting intial user input
function generatePassword() {
  var password = "";
  var passwordLength = parseInt(
    prompt("how many characters would you like to use?")
  );

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters ");
    return;
  }
  // when correct character length selection is entered, trigger prompts
  if (passwordLength > 8 || passwordLength < 128) {
    var upperCharChoice = confirm("Do you want to use upper case letters");
    var lowerCharChoice = confirm("Do you want to use lower case letters");
    var numberCharChoice = confirm("Do you want to use numbers");
    var specialCharChoice = confirm("Do you want to use special characters");
  }
  if (
    !upperCharChoice &&
    !lowerCharChoice &&
    !numberCharChoice &&
    !specialCharChoice
  ) {
    alert("must select character for password to be generated");
  }
  var availableChars = "";
  if (upperCharChoice) {
    availableChars += upperChar;
  }
  if (lowerCharChoice) {
    availableChars += lowerChar;
  }
  if (numberCharChoice) {
    availableChars += numberChar;
  }
  if (specialCharChoice) {
    availableChars += specialChar;
  }
  console.log(availableChars);
  for (var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * availableChars.length);
    console.log(random);
    password += availableChars[random];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
