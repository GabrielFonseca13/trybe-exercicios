function isPalindrome (word){
    let reverseWord = '';
    for (let index = (word.length-1) ; index >= 0 ; index -= 1){
        reverseWord += word[index]
    } 
    // console.log(word);
    // console.log(reverseWord);
    if (word === reverseWord){
        return true;
    } else {
        return false;
    }

}

console.log(isPalindrome('arara'));