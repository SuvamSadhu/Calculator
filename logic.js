let screen = document.getElementById('screen');
let screenValue = '';

buttons = document.querySelectorAll('button');
for(items of buttons){
    items.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log(buttonText);
        if(buttonText=='x'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
        }
        else if(buttonText == 'C'){
            screenValue ="";
            screen.value = screenValue;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}