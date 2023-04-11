const password = document.querySelector('.password')
const copy = document.querySelector('.copy')
const passwordLength = document.querySelector('.passwordLength')
const generatePassword = document.querySelector('.generatePassword')

const lowerCase = document.querySelector('.includeLowerCaseLetter')
const upperCase = document.querySelector('.includeUpperCaseLetter')
const symbol = document.querySelector('.includeSymbols')
const number = document.querySelector('.includeNumbers')

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
const digits = '0123456789'
const symbols = '!@#$%^&*()_+='

generatePassword.addEventListener('click', createPass);

function createPass () {
    
}
function getSymbol () {
    return console.log(symbols[Math.floor(Math.random() * symbols.length)])
}
getSymbol()