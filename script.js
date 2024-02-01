// set up an alert for the viewer with the secret message and the lock code
//I must use a different calculation to show each number that is needed
// Figure out which variable to use for the numbers
// create a strong for each number needed 

// This is the secret message string 
const secretMessage = " You have recieved this message because you have been chosen to open an important vault. Here is the secret combination: ";

// Below are the calculations to unlock the vault
const firstNum = 20 / 2;
const secondNum = 10 * 4 ;
const thirdNum = 24 + 15;

// This is the dialog pop up box
window.alert (secretMessage + ' ' + firstNum + ' ' + secondNum + ' ' + thirdNum );