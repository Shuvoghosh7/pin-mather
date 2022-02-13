function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }else{
        return getPin();
    }
  
}
function generatePin(){
    const pin = getPin();
    const displayPin = document.getElementById("display-pin").value=pin;
}
// clicked any button
document.getElementById("key-pad").addEventListener('click',function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById("typed-numbers");
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value='';
        }
    }else{
        const previusNumber = calcInput.value;
        const newNumber= previusNumber + number;
        calcInput.value =newNumber;
    }
    
});
// verify pin for match
function verifyPin(){
    const currentPin =document.getElementById('display-pin').value;
    const typeNumber= document.getElementById("typed-numbers").value;
    const successMasage = document.getElementById("notify-success");
    const errorMasage = document.getElementById("notify-fail");
    if(currentPin == typeNumber){
        
        successMasage.style.display='block';
        errorMasage.style.display='none';
    }else{
        successMasage.style.display='none';
        errorMasage.style.display='block';

    }
}