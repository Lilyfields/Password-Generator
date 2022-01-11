//we would like the password generator to generate password after end user put in numbers and display outcomes. 


var passwordBtnEl = $('#generate');
var passwordDisplayEl = $('#password-display');
var passwordSettingsEl = $('#settings');


  var uppers = confirm("Would you like to use uppercase letters?");
var lowers = confirm("Would you like to use lowercase letters?");
var numbers = confirm("Would you like to use numbers?");
var symbols = confirm("Would you like to use special characters?");


  const resultEl =document.getElementById('result');
  const lengthtEl =document.getElementById('length');
  const uppercaseEl =document.getElementById('uppers');
  const lowercaseEl =document.getElementById('lowers');
  const numbersEl =document.getElementById('numbers');
  const symbolsEl =document.getElementById('symbols');
  const generatebtnEl =document.getElementById('generate');


function generateNewPassword() {
  var password = ['uppers','lowers','numbers','symbols'];

  var length = Number(prompt("How many characters would you like your password to be?"));
while (isNaN(length) || length < 8 || length > 10) length = Number(prompt("Length must be 8-10 characters. How many characters would you like your password to be?"));

while (!uppers && !lowers && !numbers && !symbols) {
    alert("You must select at least one character type!");
    uppers = confirm("Would you like to use uppercase letters?");
    lowers = confirm("Would you like to use lowercase letters?");
    numbers = confirm("Would you like to use numbers?");
    symbols = confirm("Would you like to use special characters?");


for ( const element of password) {
        console.log(element);
       
    }
  
  if (password = uppers){ 
      password += "QWERTYUIOPASDFGHJKLZXCVBNM";
      console.log(uppers);
    }
  
  if (password = lowers) {
      password += "qwertyuiopasdfghjklzxcvbnm";
      console.log(lowers);
    }

  if (password = numbers){
      password += "1234567890";
     console.log(numbers);

    }


    if (password = symbols){
        password += "!@#$%^&*(){}[]=<>/,.";
        console.log(symbols);
    }

    
    resultEl.innerText = generatedPassword(hasLower, hasUpper, hasNumber, 
      hasSymbol, length);

      window.addEventListener('load', alert);
      
        const input = document.querySelector ('#btn');
        const lo =document.querySelector('#password');
        

     'btn'.addEventListener('click',
        
         console.log(password));
    

   //initially the code work; i.e. when ran on browser window will dropped box
   //prompt the user with questions. However, does not generate password. When pressing on button
   //script stopped working as we add further function in attempt to ge password generator to display code
   //following the series of prompt. Instructor's original code is lost.   
   //Console display error message "Uncaught Syntax Error: Unexpected end of input" 

    }}
