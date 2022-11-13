// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialChar =  ["!","#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":" , ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~" ]
var choicesCriteria = [ ]
var passwordLength = ''


// Write password to the #password input
function writePassword() {
  var getPrompts = passwordCriteria();
  var passwordText = document.querySelector("#password");
  //Generates prompts when the user clicks the button
  if (getPrompts){
    var newPassword = generatePassword();
     passwordText.value = newPassword;
    }
  }
   

//Creates a password that matches the users input from the forms
function generatePassword() {
    var password = "";
    for(var i = 0; i < passwordLength; i++){
        var randomIndex = Math.floor(Math.random() * choicesCriteria.length);
        password = password + choicesCriteria[randomIndex]
    }
    return password;
}

//Criteria to use for password
var passwordCriteria = function(){
    //Prompt to ask user how long the password should be
    passwordLength = Number(prompt("How long would you like your password (8-128 characters)?"))

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
    return true;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

