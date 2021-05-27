window.onload=function (){
    var seconds=00;
    var tens=00;
    var min=00;
    var appendMin=document.getElementById("min");
    var appendTens=document.getElementById("tens");
    var appendSeconds=document.getElementById("seconds");
    var buttonStart=document.getElementById("start");
    var buttonStop=document.getElementById("stop");
    var buttonRestart=document.getElementById("restart");
    var  Interval;

    buttonStart.onclick=function(){
        clearInterval(Interval);
       Interval= setInterval(timer,10)
    }
    buttonStop.onclick=function(){
        clearInterval(Interval)
    }
    buttonRestart.onclick=function(){
        clearInterval(Interval);
        tens="00";
        seconds="00";
        min="00"
        appendSeconds.innerHTML=tens;
        appendTens.innerHTML=seconds;
        appendMin.innerHTML=min;
    }
    function timer(){
        tens++;

        if(tens <=9){
            appendTens.innerHTML= "0"+ tens;
        }
        if(tens >9){
            appendTens.innerHTML=tens;
        }
        if(tens>99){
            seconds++;
            appendSeconds.innerHTML="0"+ seconds;
            tens=0;
            appendTens.innerHTML="0" +0;
        }
        if(seconds >9){
            appendSeconds.innerHTML=seconds;
        } 
        if(seconds > 59){
            seconds="00"
            appendSeconds.innerHTML=seconds;
            min=min+1;
            appendMin.innerHTML=min;
        }
        if(min <= 9){
            appendMin.innerHTML="0" + min;
        }
        if(min >9){
            appendMin.innerHTML=min;
        }
    }

    }

