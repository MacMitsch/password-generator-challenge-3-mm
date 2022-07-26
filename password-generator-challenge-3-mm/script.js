function generatePassword() {
  var incNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var incUpperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var incLowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var wingDings = [
    "@",
    "%",
    "+",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    "~",
    "-",
    "_",
    ".",
  ];
  var possibleCharacters = [];

  // Questions involving inputs
  numberOfCharacters = prompt(
    "How many characters do you want in your password? Choose between 8-128 characters."
  );
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    return "Please choose a valid number of characters.";
  } else if (isNaN(numberOfCharacters)) {
    numberOfCharacters = prompt("Please enter a value between 8 and 128.");
  } else {
    alert("Your password will have " + numberOfCharacters + " Characters.");
  }

  hasLowercase = confirm("Would you like lowercase letters?");
  if (hasLowercase) {
    const turnToLowercase = alert("Adding lowercase letters.");
  } else {
    alert("No lowercase letters will be used.");
  }

  hasUppercase = confirm("Would you like uppercase letters?");
  if (hasUppercase) {
    alert("Adding uppercase letters.");
  } else {
    alert("No uppercase letters will be used.");
  }

  hasNumbers = confirm("Want to use numbers?");
  if (hasNumbers) {
    alert("Adding numbers to your password.");
  } else {
    alert("NO numbers will be used.");
  }

  hasSpecial = confirm("Do you want special characters?");
  if (hasSpecial) {
    alert("Adding special characters.");
  } else {
    alert("Boring but okay, No special characters.");
  }

  if (
    hasLowercase === false &&
    hasUppercase === false &&
    hasNumbers === false &&
    hasSpecial === false
  ) {
    return "Please select at least one character type.";
  }

  // Selected characters
  if (hasLowercase) {
    possibleCharacters = possibleCharacters.concat(incLowerCase);
  }
  if (hasUppercase) {
    possibleCharacters = possibleCharacters.concat(incUpperCase);
  }
  if (hasNumbers) {
    possibleCharacters = possibleCharacters.concat(incNumbers);
  }
  if (hasSpecial) {
    possibleCharacters = possibleCharacters.concat(wingDings);
  }

  // Choosing random variables to be added
  let finalPassword = "";
  for (let i = 0; i < numberOfCharacters; i++) {
    let rng = [Math.floor(Math.random() * possibleCharacters.length)];
    // FinalPassword
    finalPassword = finalPassword + possibleCharacters[rng];
  }
  return finalPassword;
}

// Generate Element References
const generateBtn = document.querySelector("#generate");

// Write to the #password
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Event listener to generate Btn
generateBtn.addEventListener("click", writePassword);
