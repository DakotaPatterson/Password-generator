var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!","$","#","&","*",".","%","~","|","{","}","`","_","^","[","]","@","?",">","<","+","=",":",";","/","-"];
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

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

  if (length < 8 || length > 128){
    window.alert("The length does not match the criteria!");
    var length = window.prompt ("The length of the password must be between 8 and 128 characters:")
  };

  var numbers = window.confirm ("Would you like to include numbers in your password?");

  var specialCharacters = window.confirm ("Would you like to include special characters in your password?");

  var lowerCaseLetters = window.confirm ("Would you like to include lower case letters in your password?");

  var upperCaseLetters = window.confirm ("Would you like to include upper case letters in your password?");


  if (numbers === false && specialCharacters === false && lowerCaseLetters === false && upperCaseLetters === false){
      window.alert("The password needs to include at least one of the following: Upper case letters, Lower case letters, Special characters or Numbers!");
      
      var numbers = window.confirm ("Would you like to include numbers in your password?");

      var specialCharacters = window.confirm ("Would you like to include special characters in your password?");

      var lowerCaseLetters = window.confirm ("Would you like to include lower case letters in your password?");

      var upperCaseLetters = window.confirm ("Would you like to include upper case letters in your password?");

  };

};

