let firstH1 = document.querySelector ('#myTitle');
console.log(firstH1)
firstH1.innerText = 'first h1 is changed';

document.querySelector('.paragraph').innerText = 'changed';
document.querySelector('.second').innerText = 'changed 2 '


let divSecond = document.querySelector('.anotherDiv');
console.log(divSecond);

divSecond.lastElementChild.innerText = 'changed'

let lastDiv = divSecond.nextElementSibling;
console.log(lastDiv);

lastDiv.firstElementChild.innerText = 'changed';
lastDiv.lastElementChild.innerHTML = '<h4> CHANGED </h4>'


