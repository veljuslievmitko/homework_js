


// homework
// exercise 1

let animal = {
    name:prompt('enter youd animal name'),
    kind: prompt ('enteryouranimal kind'),
    speak: function(){
        return `${this.kind} speak hey broo`
    }

}
console.log(animal.speak());

// exercise 2 

let inputBook = document.getElementById('book');
let inputAuthor = document.getElementById('autor');
let readingStatus = document.getElementById('read')
let result = document.getElementById ('result')
let submit = document.getElementById('submit')


   

function Book(title, autor, readingStatus) {
    this.title = title;
    this.autor = autor;
    this.readingStatus = readingStatus;
    
 
}


submit.addEventListener('click', function(){
    let inputBook2 = inputBook.value;
    let inputAuthor2 = inputAuthor.value;
    let read = readingStatus.value;

let newBook = new Book(inputBook2, inputAuthor2, read)
if (read === 'Yes') {result.innerHTML =
    `<p> You already read: ${newBook.title} 
    by autor : ${newBook.autor}
   </p> `}
    else {result.innerHTML =  `you have to read more`}

inputBook.value = '';
inputAuthor.value = ''
readingStatus.value = '';


})

//  PRASANEJE SE OBIDOV IZBOROT DA GO NAPRAVA SO RADIO CHOICE AMA NE USPEAVKAKO TREBA DA GO KORISTAM RADIO BUTTON


