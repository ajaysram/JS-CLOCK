var main = setInterval(function() {
    myTimer();
  }, 1000);
  
  function myTimer() {
    var date = new Date();
    var time = date.toLocaleTimeString();
    if(time.includes("PM"))
    {
      document.getElementById("clock").innerHTML = time+' 🌃'
      document.getElementById("main").classList.add("dark")
    }
    else{
      document.getElementById("clock").innerHTML = time+'🌞'
      document.getElementById("main").classList.remove("dark")
      document.getElementById("main").classList.add("light")
    }
  }