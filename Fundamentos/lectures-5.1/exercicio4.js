function changetext() {
const twoYears = document.getElementById('twoYearsAhead');
twoYears.innerText = 'Casado, sendo um desenvolvedor com grandes habilidades e morando fora do Brasil se possível';
}
changetext();

function changecolor(){
const bgMain = document.querySelectorAll('.main-content')[0];
bgMain.style.background = 'rgb(76,164,109)';
}
changecolor();

function changeCenterSquareColor(){
const centerSquare = document.querySelector('.main-content .center-content');
centerSquare.style.background = 'white';
}
changeCenterSquareColor();

function fixTitle(){
const title = document.getElementsByClassName('title')[0];
title.innerText = "Exercício 5.1 - JavaScript";
}
fixTitle();

function paragraphUpperCase(){
const upperCasePhrase = document.getElementsByTagName('p')[0];
upperCasePhrase.innerText = upperCasePhrase.innerText.toUpperCase();
}
paragraphUpperCase();
// const allP = getElementsByTagName ('p');
// console.log(allP);