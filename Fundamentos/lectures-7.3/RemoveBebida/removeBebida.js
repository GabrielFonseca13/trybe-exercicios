const removeBebida = (array, remover) => {
    array.splice(array.indexof(`${remover}`), 1);
    return array;
}

module.exports = removeBebida;