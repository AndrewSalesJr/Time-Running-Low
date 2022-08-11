
var StartQuizbtn = document.querySelector('.Start-btn').addEventListener('click', function(){
    var sec = 60;

    var time = setInterval(function myTimer(){ 
    document.getElementById('time_sec').innerHTML = sec + 
    " seconds remaining";

    sec--;

    if (sec <= 1) {
        clearInterval(time);
        setInterval(function myTimer(){
        document.getElementById('time_sec').innerHTML = sec + 
        " second remaining";

        sec--;

        if (sec <= 0) {
        clearInterval(time);
        document.getElementById("time_sec").innerHTML = "Time's up!"
        }
        }, 1000);
    }

    }, 1000);

});

var StartQuiz = document.getElementById('Start-btn').addEventListener('click', function(){

    var introTitle = document.querySelector("#questions:first-child");

    var queTitle = document.createElement('h1');

    queTitle.innerHTML = 'What does HTML stand for?';

    introTitle.parentNode.replaceChild(queTitle, introTitle);

    queTitle.className = "Quiz-info-box Question-title";

    var answer1El = document.createElement("button");

    answer1El.innerHTML ='1st answer choice';

    queTitle.appendChild(answer1El);

    answer1El.className = "answers one wrong"

    var answer2El = document.createElement("button")

    answer2El.innerHTML ='2nd answer choice';

    queTitle.appendChild(answer2El);

    answer2El.className = "answers two wrong"

    var answer3El = document.createElement("button")

    answer3El.innerHTML ='3rd answer choice';

    queTitle.appendChild(answer3El);

    answer3El.className = "answers three wrong"

    var answer4El = document.createElement("button")

    answer4El.innerHTML ='4th answer choice';

    queTitle.appendChild(answer4El);

    answer4El.className = "answers four wrong"

});



