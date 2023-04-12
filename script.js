const password = document.querySelector('.password')
const copy = document.querySelector('.copy')
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

copy.addEventListener('click', function() {
    const textToCopy = password.value;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        password.blur();
        console.log('Text copied to clipboard');
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
      });
  });

function createPass () {
    const passwordLength = +document.querySelector('.passwordLength').value

    let passwordGenarot = ''

    for (let i = 0; i < passwordLength; i++) {
        passwordGenarot += generate()
    }
    password.value = passwordGenarot
}

function generate () {
    const generateItem = []

    if (symbol.checked) {
        generateItem.push(getSymbol())
    }
    if (number.checked) {
        generateItem.push(getNumber())
    }
    if (upperCase.checked) {
        generateItem.push(getUpper())
    }
    if (lowerCase.checked) {
        generateItem.push(getLower())
    }

    if (generateItem.length === 0) {
        // Если ни один флажок не выбран, вернуть случайный символ из всех возможных
        const allChars = upperLetters + lowerLetters + digits + symbols
        return allChars[Math.floor(Math.random() * allChars.length)]
    }

    return generateItem[Math.floor(Math.random() * generateItem.length)]
}


function getSymbol () {
    return symbols[Math.floor(Math.random() * symbols.length)]
}
function getNumber () {
    return digits[Math.floor(Math.random() * digits.length)]
}
function getUpper () {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}
function getLower () {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}
