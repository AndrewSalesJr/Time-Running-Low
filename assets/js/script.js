
var StartQuizbtn = document.querySelector('.Start-btn').addEventListener('click', function(){
    var sec = 60;

    var time = setInterval(function myTimer(){ 
    document.getElementById('time_sec').innerHTML = sec + 
    " seconds remaining";

    sec--;

    if (sec === 1) {
        clearInterval(time);
        setInterval(function myTimer(){
        document.getElementById('time_sec').innerHTML = sec + 
        " second remaining";

        sec--;

        if (sec === 0) {
        clearInterval(time);
        document.getElementById("time_sec").innerHTML = "Time's up!"
        }
        }, 1000);
    }

    }, 1000);


});

var queBoxEl = document.querySelector("#questions")




    var questionEl = document.createElement("h1")
    questionEl.className = "Que-title"
    questionEl.textContent = "What does HTML stand for?"

    var answer1EL = document.createElement("button")
    var answer2EL = document.createElement("button")
    var answer3EL = document.createElement("button")
    var answer4EL = document.createElement("button")