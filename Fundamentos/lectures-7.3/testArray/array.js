const myArray = (array) => {
    for (let index = 0; index < array.length; inde +=1){
        if (typeof array[index] !== 'number'){
            return false;
        }
    }
    return true
};

module.exports = myArray;