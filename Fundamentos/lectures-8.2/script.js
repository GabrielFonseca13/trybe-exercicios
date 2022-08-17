const arrayOfNumbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

window.onload = () => {
    arrayOfNumbers.forEach((Element, index) => {
    const pares = document.getElementById('pares');
    const novosNumeros = document.createElement('p')
    novosNumeros.innerText = (Element % 2 === 0) ? `${index} - ${Element} é PAR`  : `${index} - ${Element} é IMPAR.`;
    pares.appendChild(novosNumeros);
    });    
};
