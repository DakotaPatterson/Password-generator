//Set global arrays for the generatePassword function
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!","$","#","&","*",".","%","~","|","{","}","`","_","^","[","]","@","?",">","<","+","=",":",";","/","-"];
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var Criteria = "";
var generatedPassword = "";
var numbersSelected = false;
var specialCharactersSelected = false;
var lowerCaseLettersSelected = false;
var upperCaseLettersSelected = false;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function to collect criteria for password
function collectCriteria() {
  numbersSelected = window.confirm ("Would you like to include numbers in your password?");

  specialCharactersSelected = window.confirm ("Would you like to include special characters in your password?");

  lowerCaseLettersSelected = window.confirm ("Would you like to include lower case letters in your password?");

  upperCaseLettersSelected = window.confirm ("Would you like to include upper case letters in your password?");
};

//Function to generate the password criteria!//
function generatePassword() {

  //clear out generate password so that if they do it more than once, we do not include the old password in the new generation 
  generatedPassword = "";

  var length = window.prompt ("How long would you like your password to be? It can be between 8 and 128 characters!");

  if (length < 8 || length > 128){

    window.alert("The length does not match the criteria!");

    length = window.prompt ("The length of the password must be between 8 and 128 characters:")

  };

  collectCriteria();

  //if no criteria is selected, prompt again
  if (numbersSelected === false && specialCharactersSelected === false && lowerCaseLettersSelected === false && upperCaseLetters === false){

      window.alert("The password needs to include at least one of the following: Upper case letters, Lower case letters, Special characters or Numbers!");

      collectCriteria();
  };

  if (numbersSelected){
    Criteria += numbers.join('');
  };

  if (specialCharactersSelected) {
    Criteria += specialCharacters.join('');
  };

  if (lowerCaseLettersSelected) {
    Criteria += lowerCaseLetters.join('');
  };

  if (upperCaseLettersSelected) {
    Criteria += upperCaseLetters.join('');
  };

  for (let i = 0; i < length; i++) {

    var index = Math.floor(Math.random() * Criteria.length); 

    generatedPassword += Criteria[index];

    console.log(generatedPassword);

  };
  
  return generatedPassword;
  
};