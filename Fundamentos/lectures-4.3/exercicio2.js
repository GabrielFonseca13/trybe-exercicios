let word = 'tryber';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1){
    reverseWord += word[word.length - 1 - index]
}
console.log(reverseWord);


//outra solução possível

// let word = 'tryber';
// let reverseWord = '';
// reverseWord = word.split('').reverse().join('');
// console.log(reverseWord);