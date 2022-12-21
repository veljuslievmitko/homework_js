console.log(`HOMEWORK  3`);




console.log(`exercise 1` );

let array1 = [prompt`enter your name`,prompt`How you feel today`, prompt`What youwant to do today`];

console.log(array1);
 let x = array1[0];
 let y= array1[1];
 let z = array1[2];
 
function storytell(array1){
    console.log(`my name is ${x}, and my mood is ${y},ready for ${z}, I am bad story teller. The END`)   
      
}

storytell ();




console.log(`exercise 2 `);

let array2 = [9,8,7,6,5];
let array22 = [1,`mite`, 5 , {}, 7 ]

function arrayFiveNumbers(array) {
    let a = array[0];
    let b = array[1];
    let c = array[2];
    let d = array[3];
    let e =array [4] ;
  
    let sum = a + b + c + d + e;
    
    console.log(sum);
}
console.log(`bonus exercise 2 `)

arrayFiveNumbers(array2);

function validateNumber(array) {
    for (const element of array) {
        if (typeof element === 'number') 
        {
            console.log (`Element ${element} is a Number`)
        }
        else {console.log(`Elemnent ${element} is not a Number`)}
    }
}

validateNumber(array22);

    


console.log(`Exercise 3`)

array33 = [`My`, `3th` , `exercise`];

function conectArray(array){
    let i = 0;
    let hole = ``;
        while (i < array.length){
        hole += `${array[i]} ` ;
        i++;
    }

    console.log(hole)
}

conectArray (array33);





console.log(`Exercise 4`)  

let numberArray = "";

 for ( let r = 1; r < 21; r++) {
     if (r % 2 === 0)
        {numberArray += ` ${r}`
        console.log(numberArray);}
        else {numberArray =+ ` ${r}`
     };  
 }
 

console.log(`Exercise 5`)  

array55 = [3,5,6,7,8,9];
array56 = [3, `mite`,4 ,7, `zoran`, `word`];

function sumOfMinMax(array){
    let max = -Infinity;
    let min = Infinity;

    for (const number of array) {
        if (number !== isNaN) {
            
            for (const number of array)
            
                {   if(number > max)
                    {max = number};
                    if (number < min) {
                    min = number}
                };
        }
    }
    
console.log(`the sum of Min ${min} and max ${max} is ${min + max}`)
}

sumOfMinMax (array56)

//  zosto 
console.log(typeof 5=== Number);           // false
console.log(typeof 5 == 'number');
console.log(5 !== isNaN);




console.log(`exercise 6`)

let aray66 = [`gose`, `dame`, `pitu`];
let aray67 = [`delcev`, `gruev`, `gulu`];

function twoArray(array1,array2) {
    let array3 =[]
   for (let i = 0 ; i < array1.length; i++)
   { array3.push(i+1 + `.` + array1[i] + ` ` + array2[i]);
   }
   console.log(array3);
}
twoArray(aray66,aray67);


let example = ['first','second','third','last']; 
for (let j = example.length ; j > 0; j--) {    
	document.write(example[j-1] + '<br>'); 
}

