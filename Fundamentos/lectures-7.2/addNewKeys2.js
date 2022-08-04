const usuario = {
    nome: "gabriel",
    age: 29,
    canDrive: true,
}

const createKey = (object, newKey, valueKey) => {
    object[newKey] = valueKey;
    return object
}

console.log(createKey(usuario, 'sobrenome', 'Fonseca'));

