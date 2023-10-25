let hora = min = sec = mls = "0" + 0, startTimer;

const startBt = document.querySelector(".start"),  
    stopBt = document.querySelector('.stop'),
    resetBt = document.querySelector('.reset');

startBt.addEventListener('click', start);
stopBt.addEventListener('click', stop);
resetBt.addEventListener('click', reset);

function start() {
    startBt.classList.add('active');
    stopBt.classList.add('stopActive');

    startTimer = setInterval(() => {
        mls++;
        mls =mls <10 ? '0' + mls : mls;
        if (mls === 100) {
            sec++;
            sec = sec < 10? "0" + sec : sec;
            mls = '0' + 0;
        }

        if (sec === 60) {
            min++;
            min = min < 10? "0" + min : min;
            sec = '0' + 0;
        }

        if(min == 60){
            hora++;
            hora = hora < 10 ? '0' + hora : hora;
            min = '0' + 0;
        }
    
        vuelaVuela();

        }, 10 );
}

function stop(){
    startBt.classList.remove('active');
    stopBt.classList.remove('stopActive');
    clearInterval(startTimer);
}

function reset(){
    startBt.classList.remove('active');
    stopBt.classList.remove('stopActive');
    clearInterval(startTimer);
    hora = min = sec = mls = "0" + 0;
    vuelaVuela();
}

function vuelaVuela() {
    document.querySelector('.milisecond').innerHTML = mls;
    document.querySelector('.second').innerHTML = sec;
    document.querySelector('.minute').innerHTML = min;
    document.querySelector('.hour').innerHTML = hora;
}