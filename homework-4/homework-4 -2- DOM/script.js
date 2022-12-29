let list = document.getElementById('list');
let textSum = document.getElementById("sum");
console.log(textSum);


let array = [2, 4, 6, 8, 10];

let string = `${array[0]}`

for (let number of array) {
    list.innerHTML += `<li>${number}</li>`;
    
}

let sum = array[0];
for (let i = 1; i < array.length; i++){
    sum += array[i];
    string += ` + ${array[i]}`
}

textSum.innerHTML = `${string} = ${sum}`





