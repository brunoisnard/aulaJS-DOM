


const turOn = document.getElementById('turOn');
const turoff = document.getElementById('turoff');


const lamp = document.getElementById('lamp');


function isLampBroken (){
    return lamp.src.indexOf('quebrada') > -1
}


function lampOn() {
    if (!isLampBroken()){
        lamp.src='./img/ligada.jpg';
    }
}

function lampOff() {
    if (!isLampBroken()){
        lamp.src='./img/desligada.jpg';
    }
}

function lampquebrada() {
    if (!isLampBroken()){
        lamp.src='./img/quebrada.jpg';
    }
}



function refreshPage() {
    location.reload(); 
}




turOn.addEventListener('click', lampOn);
turoff.addEventListener('click', lampOff);

lamp.addEventListener('dblclick',lampquebrada);

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);




    



