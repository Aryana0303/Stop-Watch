window.onload = function () {
  
    var minutes = 00; 
    var milliseconds = 00; 
    var appendMilliseconds = document.getElementById("milliseconds")
    var appendMinutes = document.getElementById("minutes")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;
  
    buttonStart.onclick = function() {
      
      clearInterval(Interval);  //Use clearInterval() to stop the time:
       Interval = setInterval(startTimer, 10); //calls function at specific interval of time
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
      milliseconds = "00";
        minutes = "00";
      appendMilliseconds.innerHTML = milliseconds;
        appendMinutes.innerHTML = minutes;
    }
    
     
    
    function startTimer () {
      milliseconds++; 
      
      if(milliseconds <= 9){
        appendMilliseconds.innerHTML = "0" + milliseconds;
      }
      
      if (milliseconds > 9){
        appendMilliseconds.innerHTML = milliseconds;
        
      } 
      
      if (milliseconds > 99) {
        console.log("seconds");
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        milliseconds = 0;
        appendMilliseconds.innerHTML = "0" + 0;
      }
      
      if (minutes > 9){
        appendMinutes.innerHTML = minutes;
      }
    
    }
    
  
  }