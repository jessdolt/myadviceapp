const btn = document.getElementById('btn-click');
const msg =  document.getElementById('message');
btn.addEventListener('click', getAdvice);

function getAdvice(){
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
            btn.disabled = true;
            btnReset();
        }
    }
    xhr.send();
    msg.style.removeProperty('animation');
   
}

function btnReset(){
    setInterval(function(){
        btn.disabled = false;
        btn.style.animation='button 0.5 1';
    },4750)
   
}