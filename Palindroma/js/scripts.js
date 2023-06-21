const userWord = prompt('Inserisci una parola:');
console.log('userWord', userWord, typeof userWord)

// Stampa della parola carattere x carattere
for(let index = 0; index < userWord.length; index++){
    const element = userWord[index];
    console.log(element);
}

const palindromResult = isPalindroma(userWord);

console.log(palindromResult);

if(isPalindroma(userWord)) {
    console.log(`La parola ${userWord} è palindroma`);
}
else{
    console.log(`La parola ${userWord} non è palindroma`)
}



// const splittedWord = userWord.split('');
// console.log('SplittedWord', splittedWord , typeof splittedWord)
// const reversedWordArray = splittedWord.reverse();
// console.log('reverseWordArray', reversedWordArray , typeof reversedWordArray);
const joinedArrayWord = userWord.join('').reverse().split('');
console.log('joinedArrayWord', joinedArrayWord , typeof joinedArrayWord);


if (userWord === reversedWordArray){
    console.log('La parola è Palindroma')
}

function isPalindroma(word) {

    console.log('---------------------------------')

    const reversedWord = reverseWord(word)

    if (word === reverseWord){
        return true;
    }
    else{
        return false;
    }
} 

function reverseWord(word){
    // Stampa della parola carattere x carattere, ma al contrario
    let reverseWord = '';
    for(let index = word.length - 1; index >= 0; index--){
        const element = word[index];

        console.log(element);

        reverseWord = reverseWord + element;
    }

    return reverseWord;
}

    

