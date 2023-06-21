const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5:"));

if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
    console.log('Numero non valido. Si prega di inserire un numero da 1 a 5.');
}

const userChoice = userNumber;

const computerNumber = getRandomNumber(1, 5);
console.log(`Il computer ha scelto: ${computerNumber}`);

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
function isEven(num) {
    if (num % 2 === 0){
        return even;
    }
    else {
        return odd;
    }
}


function winnerIs(userNumber, computerNumber) {
const sum = userNumber + computerNumber;
const isSumEven = isEven(sum);

console.log(`La somma dei due numeri è: ${sum}`);

if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
    console.log('Numero non valido. Si prega di inserire un numero da 1 a 5.');
  }
}

function playGame() {


    if ((userChoice === isEven(userNumber) && isSumEven) || (userChoice != isEven(userNumber) && !isSumEven)) {
        console.log('Hai vinto!');
    } else {
        console.log('Il computer ha vinto!');
    }

    playGame();
}



