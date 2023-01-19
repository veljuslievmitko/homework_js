let choosenCategory = ''
let output = document.getElementById('output');
let wordForGuess = document.getElementById('wordForGuess')
let playAgain = document.getElementById('playAgain')
let keyboard = document.getElementById('keybord')
let hint = document.getElementById('hint')
let hintHelper = document.getElementById('hintHelper')
let clue = document.getElementById('clue')
let manForHung = document.getElementById('manForHung')
let a = keyboard.children[0] 
let b = keyboard.children[1] 
let c = keyboard.children[2] 
let d = keyboard.children[3] 
let e = keyboard.children[4] 
let f = keyboard.children[5] 
let g = keyboard.children[6]
let h = keyboard.children[7] 
let i = keyboard.children[8] 
let j = keyboard.children[9]
let k = keyboard.children[10] 
let l = keyboard.children[11] 
let m = keyboard.children[12] 
let n = keyboard.children[13] 
let o = keyboard.children[14] 
let p = keyboard.children[15]
let q = keyboard.children[16] 
let r = keyboard.children[17] 
let s = keyboard.children[18]
let t = keyboard.children[19] 
let u = keyboard.children[20] 
let v = keyboard.children[21] 
let w = keyboard.children[22] 
let x = keyboard.children[23] 
let y = keyboard.children[24]
let z = keyboard.children[25] 
let wordForComparation = document.getElementById('comparation')
let hiddenWord = document.getElementById('hidenWord');


let livesRemaing = document.getElementById('livesRemaing')
let letters = document.getElementsByClassName('letters')
let placeholder = document.getElementById('placeholder')
let wrongAnswar = 0;
let counterForLivesRemaining = 5;

var geusses = []




let footbalClubsArray = ['bayern', 'dortmund', 'juventus', 'arsenal'];
let footbalHint = [`Oliver Can`, 'Mario Getze', 'Del Piero', 'thiery Anry']
let citiesArray = ['london', 'skopje', 'strumica', 'berlin', 'washington'];
let citiesHint = ['England', 'Macedonia', 'east part of Macedonia', 'Germany', 'USA']
let moviesArray = ['i wanna dance', 'a man called otto', 'wakanda forever'];
let moviesHint = ['Witney Huston', 'Tom Henks', 'Andgela Basset']
selectBtn = document.getElementById('selectBtn');

function chooseACategory() {
  var cat = document.getElementsByName('category');
    for(i = 0; i < cat.length; i++) {
      if(cat[i].checked)
      {choosenCategory  = cat[i].value;
      console.log(`submit is activated`)
      console.log(choosenCategory)
    }
   }
   chooseAword(choosenCategory)
}
selectBtn.addEventListener('click', function(){
  var cat = document.getElementsByName('category');
  for(i = 0; i < cat.length; i++) {
    if(cat[i].checked)
    {choosenCategory  = cat[i].value;
    console.log(`submit is activated`)
    console.log(choosenCategory)
    livesRemaing.innerText = 5
    clue.innerText = `Clue -`
  }
 }
 chooseAword(choosenCategory)
})


var word
// ----- choose category from Dropdown box - problem 
// let hintWord = '' zosto hintWord ako ne gozapisam vo html go poznava kako null
// zatoa vovedov nova varijabla so koja go zapisauvam zborot vo html
function chooseAword(){
  
if (choosenCategory === 'footballClubs')
    {word = footbalClubsArray[Math.floor(Math.random()*footbalClubsArray.length)];
      hintHelper.innerText = footbalHint[footbalClubsArray.indexOf(word)];
   
 
 }
else if (choosenCategory === 'cities') {
  
        word = citiesArray[Math.floor(Math.random()*citiesArray.length)]
        hintHelper.innerText = citiesHint[citiesArray.indexOf(word)];
  

    }
    else  {

       word = moviesArray[Math.floor(Math.random()*moviesArray.length)]
       hintHelper.innerText = footbalHint[moviesArray.indexOf(word)];
      

    }
    word = word.replace(/\s/g, "-");
      console.log(word);
       result()
      
}

 // Create empty lines
 function result () {
    
    wordHolder = document.getElementById('hold');
    wordHolder.innerHTML = ''
    correct = document.createElement('ul');
    

    for (var i = 0; i < word.length; i++) {

      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }
      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
                

let writeGuess = 0
function dissableBtn (){
  event.target.disabled = true; 
}

function hello(){
  let gess = this.innerText;
  let counter = 0;
  
  console.log(`${gess} is activated`)

   if (counterForLivesRemaining === 0){
    return
   }
  

    for (let i = 0; i < word.length; i++){
        if (word[i] === gess)
            {geusses[i].innerHTML = gess;
              counter++;
          }}
    if(counter === 0){
      counterForLivesRemaining -=1;
      livesRemaing.innerText = counterForLivesRemaining;
    }
    else {writeGuess++
    console.log(writeGuess)}
   
 
    hung()
    
    
   
    if (writeGuess === geusses.length){
      manForHung.innerHTML = '<h1>YOU WIN<h1>'
    }
   
    
  
  }



a.addEventListener('click', hello)
b.addEventListener('click', hello)
c.addEventListener('click', hello)
d.addEventListener('click', hello)
e.addEventListener('click', hello)
f.addEventListener('click', hello)
g.addEventListener('click', hello)
h.addEventListener('click', hello)
i.addEventListener('click', hello)
j.addEventListener('click', hello)
k.addEventListener('click', hello)
l.addEventListener('click', hello)
m.addEventListener('click', hello)
n.addEventListener('click', hello)
o.addEventListener('click', hello)
p.addEventListener('click', hello)
q.addEventListener('click', hello)
r.addEventListener('click', hello)
s.addEventListener('click', hello)
t.addEventListener('click', hello)
u.addEventListener('click', hello)
v.addEventListener('click', hello)
w.addEventListener('click', hello)
x.addEventListener('click', hello)
y.addEventListener('click', hello)
z.addEventListener('click', hello)


playAgain.addEventListener('click', function(){
 
  chooseAword()
    livesRemaing.innerText = 5;
})
 


hint.addEventListener('click', function(){
  clue.innerText = hintHelper.innerText
})
function hung(){
  switch (counterForLivesRemaining){
    case 4:
      manForHung.innerHTML = `<img src="./pictures/hungman_head.jpg" alt="Head" width ="190px " height="190px">`
          break;
    case 3:
      manForHung.innerHTML = `<img src="./pictures/hungman_headAndBody.jpg" alt ="headAndBody" width ="190px " height="190px">`
          break;
    case 2: 
    manForHung.innerHTML = ` <img src="./pictures/hungman_headBodyLegs.jpg" alt="headBodyLegs" width ="190px " height="190px">`
          break;
    case 1: 
          manForHung.innerHTML = `<img src="./pictures/hunfman_fullBody.jpg" alt="fullBody" width ="190px " height="190px">`
          break; 
    case 0:
          manForHung.innerHTML = '<h1>YOU ARE DEATH<h1>'
          return
        }
    
    
}





