// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerLetters = "abcdefghijklmnopqrstuvwxyz"
var upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var numbers = '1234567890'
var specialChar = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ '
var choicesCriteria = [ ]

//Criteria to use for password
var passwordCriteria = function(){
    //Prompt to ask user how long the password should be
    var passwordLength = Number(window.prompt("How long would you like your password (8-128 characters)?"))
    if (passwordLength < 8 || passwordLength > 128){
        window.alert('Sorry the password must be between 8-128 characters.')
        passwordCriteria();
    }

    
    //Prompts to ask user what they would like included in their password
    if(confirm("Would you like to use lowercase letters? (Press cancel if no)")){
        choicesCriteria = choicesCriteria.concat(lowerLetters);
    }
    if(confirm("Would you like to use uppercase letters? (Press cancel if no)")){
        choicesCriteria = choicesCriteria.concat(upperLetters);
    }
    if(confirm("Would you like to use numbers? (Press cancel if no)")){
        choicesCriteria = choicesCriteria.concat(numbers);
    }
    if(confirm("Would you like to use special characters? (Press cancel if no)")){
        choicesCriteria = choicesCriteria.concat(specialChar);
    }
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

passwordCriteria();
