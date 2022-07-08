let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestWord = array[0];

    for (let index = 1; index < array.length; index+=1 ) {
        if(biggestWord.length < array[index].length){
            biggestWord = array [index];
        }
        console.log(biggestWord);
    }