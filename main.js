const btn = document.getElementById('btn-click');
const msg =  document.getElementById('message');
btn.addEventListener('click', getAdvice);

function getAdvice(){
    btn.disabled = true;
    const xhr = new XMLHttpRequest();
    const url = "https://api.adviceslip.com/advice";
    xhr.open('GET',url, true);
    xhr.onload= function(){
        if(this.status == 200){
            let data =JSON.parse(this.responseText);
            let advice = data.slip.advice;
            console.log(advice);
            msg.style.animation='text 1s 1';
            msg.textContent=advice;     
        }
        btnReset();
    }
    xhr.send();
    msg.style.removeProperty('animation');
    
}

function btnReset(){
    setInterval(function(){
        btn.disabled = false;
    },4850) 
}