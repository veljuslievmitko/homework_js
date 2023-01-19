// declaration of values
let numbersBtn = document.getElementsByClassName('number')
let num7 = numbersBtn[0];
let num9 = numbersBtn[1];
let num8 = document.getElementById('eight');
let num4 = numbersBtn[3];
let num5 = numbersBtn[4];
let num6 = numbersBtn[5];
let num1 = numbersBtn[6];
let num2 = numbersBtn[7];
let num3 = numbersBtn[8];
let num0 = numbersBtn[9];
let multiply = document.getElementById('multiply')
let temporaryDisplay = document.getElementById('temporaryText')
let resultText = document.getElementById('resultText')
let stringText = document.getElementById('stringText')
let temporaryOperand = document.getElementById('temporaryOperand')
let numberBefore = document.getElementById('numberBefore')
console.log(temporaryDisplay)
console.log(stringText)
stringText.innerText = ''
// activation of the buttons

function hello(button){
  temporaryDisplay.innerText += button;
  stringText.innerText += button;
  if (resultText.innerText !== '' && temporaryOperand.innerText === ''){
    resultText.innerText ='';   
  }
}

temporaryOperand.innerText = ''
function previousOperation(){
  switch (temporaryOperand){
    case (temporaryOperand.innerText === '-'):
    resultText.innerText = Number(resultText.innerText) - Number(temporaryDisplay.innerText) 
    temporaryOperand.innerText = '';
    break;
 case (temporaryOperand.innerText ==='+'):
  resultText.innerText = Number(resultText.innerText) + Number(temporaryDisplay.innerText);
  temporaryOperand.innerText = '';
  break;
  case (temporaryOperand.innerText ==='*'):
    resultText.innerText = Number(resultText.innerText) * Number(temporaryDisplay.innerText)
    temporaryOperand.innerText = '';
    break;
  case (temporaryOperand.innerText === '/'):
   
  resultText.innerText = Number(resultText.innerText) / Number(temporaryDisplay.innerText)
  temporaryOperand.innerText = ''; 
  break;
  } 
  
}

function multiplyNum(){
  if (resultText.innerText === '' && temporaryDisplay.innerText === ''){
    return
  }  
  if (resultText.innerText === '')
    {resultText.innerText = temporaryDisplay.innerText;
      stringText.innerText += '*';
      temporaryOperand.innerText = '*'
    temporaryDisplay.innerText = ''}
     else if (resultText.innerText !== ''){
      resultBefore.innerText = resultText.innerText;
      if (temporaryOperand.innerText === ''){
          temporaryOperand.innerText = '*';
        stringText.innerText = resultText.innerText + '*'
      }
    { if (temporaryOperand.innerText ==='+')
    {{resultText.innerText = Number(resultText.innerText) + Number(temporaryDisplay.innerText) 
      temporaryDisplay.innerText = ''
      temporaryOperand.innerText = '*'
      stringText.innerText += '*'} }
      else if(temporaryOperand.innerText ==='*' && temporaryDisplay.innerText !== '' )
      {{resultText.innerText = Number(resultText.innerText) * Number(temporaryDisplay.innerText) 
        temporaryDisplay.innerText = ''
        temporaryOperand.innerText = '*'
        stringText.innerText += '*'} }
        else if (temporaryOperand.innerText ==='-')
        {{resultText.innerText = Number(resultText.innerText) - Number(temporaryDisplay.innerText) 
          temporaryDisplay.innerText = ''
          temporaryOperand.innerText = '*'
          stringText.innerText += '*'} }
        else if (temporaryOperand.innerText ==='/')
        {resultText.innerText = Number(resultText.innerText) / Number(temporaryDisplay.innerText) 
          temporaryDisplay.innerText = ''
          temporaryOperand.innerText = '*'
          stringText.innerText += '*'}
           
  else 
      {return};
   
}
  }}


function divNumbers (){
  if (resultText.innerText === '' && temporaryDisplay.innerText === ''){
    return
  }  
  if (resultText.innerText === '')
    {resultText.innerText = temporaryDisplay.innerText;
      stringText.innerText += '/'
    temporaryDisplay.innerText = ''
    temporaryOperand.innerText = '/'}
    else if (resultText.innerText !== ''){
      resultBefore.innerText = resultText.innerText;
    if (temporaryOperand.innerText === ''){
        temporaryOperand.innerText = '/';
      stringText.innerText = resultText.innerText + '/'
    }
      
    { if (temporaryOperand.innerText ==='+')
    {{resultText.innerText = Number(resultText.innerText) + Number(temporaryDisplay.innerText) 
      temporaryDisplay.innerText = ''
      temporaryOperand.innerText = '/'
      stringText.innerText += '/'} }
      else if(temporaryOperand.innerText ==='*')
      {{resultText.innerText = Number(resultText.innerText) * Number(temporaryDisplay.innerText) 
        temporaryDisplay.innerText = ''
        temporaryOperand.innerText = '/'
        stringText.innerText += '/'} }
        else if (temporaryOperand.innerText ==='-')
        {{resultText.innerText = Number(resultText.innerText) - Number(temporaryDisplay.innerText) 
          temporaryDisplay.innerText = ''
          temporaryOperand.innerText = '/'
          stringText.innerText += '/'} }
        else if (temporaryOperand.innerText ==='/' && temporaryDisplay.innerText !== '' )
        {resultText.innerText = Number(resultText.innerText) / Number(temporaryDisplay.innerText) 
          temporaryDisplay.innerText = ''
          temporaryOperand.innerText = '/'
          stringText.innerText += '/' }   
  else 
      {return};
    }
}}


function sumOfNumbers (){
  if (resultText.innerText === '' && temporaryDisplay.innerText === ''){
    return
  }  
  if (resultText.innerText === '')
    {resultText.innerText = temporaryDisplay.innerText;
      stringText.innerText += '+'
    temporaryDisplay.innerText = ''
    temporaryOperand.innerText = '+'}
    else if (resultText.innerText !== ''){ 
      resultBefore.innerText = resultText.innerText;
          if (temporaryOperand.innerText === ''){
           stringText.innerText = `${resultText.innerText}+`
        temporaryOperand.innerText = '+';}
        
      if (temporaryOperand.innerText ==='+' && temporaryDisplay.innerText !== '')
    {{resultText.innerText = Number(resultText.innerText) + Number(temporaryDisplay.innerText) 
      temporaryDisplay.innerText = ''
      temporaryOperand.innerText = '+'
      stringText.innerText += '+'} }
      else if(temporaryOperand.innerText ==='*')
      {{resultText.innerText = Number(resultText.innerText) * Number(temporaryDisplay.innerText) 
        temporaryDisplay.innerText = ''
        temporaryOperand.innerText = '+'
        stringText.innerText += '+'} }
        else if (temporaryOperand.innerText ==='-')
        {{resultText.innerText = Number(resultText.innerText) - Number(temporaryDisplay.innerText) 
          temporaryDisplay.innerText = ''
          temporaryOperand.innerText = '+'
          stringText.innerText += '+'} }
        else if (temporaryOperand.innerText ==='/')
        {{resultText.innerText = Number(resultText.innerText) / Number(temporaryDisplay.innerText) 
          temporaryDisplay.innerText = ''
          temporaryOperand.innerText = '+'
          stringText.innerText += '+'} }   
    }

  else 
      {return};

}


function minOfNumbers (){
  if (resultText.innerText === '' && temporaryDisplay.innerText === ''){
    return
  }  
  if (resultText.innerText === '')
    {resultText.innerText = temporaryDisplay.innerText;
      stringText.innerText += '-'
      numberBefore.innerText = temporaryDisplay.innerText;
     // resultBefore.innerText = 0;
    temporaryDisplay.innerText = ''
    temporaryOperand.innerText = '-'}
        else if (resultText.innerText !== ''){ 
          resultBefore.innerText = resultText.innerText;
          if (temporaryOperand.innerText === ''){
            temporaryOperand.innerText = '-';
          stringText.innerText = resultText.innerText + '-'}
          
          else if (temporaryOperand.innerText ==='+')
    {{resultBefore.innerText = resultText.innerText;
      resultText.innerText = Number(resultText.innerText) + Number(temporaryDisplay.innerText) 
      temporaryDisplay.innerText = ''
      temporaryOperand.innerText = '-'
      stringText.innerText += '-'} }
      else if(temporaryOperand.innerText ==='*')
      {{resultText.innerText = Number(resultText.innerText) * Number(temporaryDisplay.innerText) 
        temporaryDisplay.innerText = ''
        temporaryOperand.innerText = '-'
        stringText.innerText += '-'} }
        else if (temporaryOperand.innerText ==='-')
        {{resultText.innerText = Number(resultText.innerText) - Number(temporaryDisplay.innerText) 
          temporaryDisplay.innerText = ''
          temporaryOperand.innerText = '-'
          stringText.innerText += '-'} }
        else if (temporaryOperand.innerText ==='/')
        {{resultText.innerText = Number(resultText.innerText) / Number(temporaryDisplay.innerText) 
          temporaryDisplay.innerText = ''
          temporaryOperand.innerText = '-'
          stringText.innerText += '-'} }   
    }
  else 
      {return};
}


function equals() {
  
  if (resultText.innerText === '')
    {resultText.innerText = temporaryDisplay.innerText;
      stringText.innerText = ''
    temporaryDisplay.innerText = ''
    temporaryOperand.innerText = ''}
    if (resultText.innerText !== ''){
    if (temporaryOperand.innerText === '/')
    {resultText.innerText = Number(resultText.innerText) / Number(temporaryDisplay.innerText) 
      temporaryDisplay.innerText = ''
      temporaryOperand.innerText = ''
      stringText.innerText = ''}   
    else if (temporaryOperand.innerText ==='+')
    {resultText.innerText = Number(resultText.innerText) + Number(temporaryDisplay.innerText) 
      temporaryDisplay.innerText = ''
      temporaryOperand.innerText = ''
      stringText.innerText = ''}
    }
     if(temporaryOperand.innerText ==='*')
      {resultText.innerText = Number(resultText.innerText) * Number(temporaryDisplay.innerText) 
        temporaryDisplay.innerText = ''
        temporaryOperand.innerText = ''
        stringText.innerText = ''} 
       if (temporaryOperand.innerText ==='-')
        {resultText.innerText = Number(resultText.innerText) - Number(temporaryDisplay.innerText) 
          temporaryDisplay.innerText = ''
          temporaryOperand.innerText = ''
          stringText.innerText = ''} 
        
      else 
      {return};
        }

  function clearEverything(){
    temporaryDisplay.innerText = '';
    temporaryOperand.innerText = '';
    stringText.innerText = '';
    resultText.innerText = '';
    numberBefore.innerText = ''
  }
  
  
// ova deleteBtnne funkcionira kako sto treba (kineski e digitronot), 
// ama ne sakav da se sluzam so operacii koi ne sme gi pominale, samo takviresenija gledav na internet 
// a za da probam drugo nemav veke vreme  
 function deleteBtn(){
  if (temporaryOperand.innerText !== '')
    {temporaryOperand.innerText = '';
    temporaryDisplay.innerText = numberBefore.innerText;
    stringText.innerText = stringText.innerText.slice(0, -1); 
   }
  else {
  stringText.innerText = stringText.innerText.slice(0, -1) 
  temporaryDisplay.innerText = temporaryDisplay.innerText.slice(0, -1)
  resultText.innerText = resultBefore.innerText;
  }
     
 }

 function zero(){

  if (temporaryDisplay.innerText !== ''){
    temporaryDisplay.innerText += '0'
    stringText.innerText += '0'
  }
  else {return}
 }
 

 function dotBtn(){
  var stringNumber = Number(temporaryDisplay.innerText);
  if (temporaryDisplay.innerText === ''){
    temporaryDisplay.innerText = '0.'
    stringText.innerText += '0.'
  }
  
  else if ( stringNumber - Math.floor(stringNumber)  === 0 ){
    temporaryDisplay.innerText += '.'
    stringText.innerText += '.'
  }
  else {return}
 }




 