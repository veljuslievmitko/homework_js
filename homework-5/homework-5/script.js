let row = document.getElementById('rowNumber');
let column = document.getElementById('columnNumber');
let tableBtn = document.getElementById ('tableBtn');
let table = document.getElementById ('table')


function makeTable(row,column){

 if(isNaN(row)=== false && isNaN(column) === false){

    for (let a = 1; a <= row; a++) {
        table.innerHTML += `<tr id="rowNumber${a}" style="border: 1px solid black;"" ></tr>`
        let rowNumber = document.getElementById (`rowNumber${a}`);
        for (let b = 1; b<=column; b++){
            rowNumber.innerHTML += `<td style="border: 1px solid black;"> row ${a} Colum ${b} </td>`
        }
  
    }
 }
 else {
      alert ('you entered wrong input! Please try again')


    }
}



tableBtn.addEventListener('click', function(){
    table.innerHTML = '';
    makeTable(row.value,column.value);
})
