var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!","$","#","&","*",".","%"];
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

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


//Function to generate the password criteria!//
function generatePassword() {

  var length = window.prompt ("How long would you like your password to be? It can be between 8 and 128 characters!");

  var numbers = window.confirm ("Would you like to include numbers in your password?");

  var specialCharacters = window.confirm ("Would you like to include special characters in your password?");

  var lowerCaseLetters = window.confirm ("Would you like to include lower case letters in your password?");

  var upperCaseletters = window.confirm ("Would you like to include upper case letters in your password?");



}

