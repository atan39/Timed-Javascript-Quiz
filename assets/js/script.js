// When the start button is clicked then the screen changes
var startBtn = document.querySelector("#start-btn");
var timer = document.querySelector("#timer");
var questionsEl = document.querySelector("#question");

startBtn.addEventListener("click", function() {
// Then a timer starts 
console.log("click");
    countdown();
    displayQuestion();
})
// With questions

// Time countdown
function countdown() {
    var timeLeft = 60;
console.log("time left");
    var timeInterval = setInterval(function () {
        if (timeLeft> 1) {
            timer.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else {
            timer.textContent = '';
            clearInterval(timeInterval);
            // quiz is over
        }
        
    }, 1000);


};

function displayQuestion() {
    question = "Question 1: What is an array invoked with?";
    choices = ["Quotations", "Square Brackets", "Curly Brackets", "Parenthesis"];
    correctAnswer = "Square Brackets";

    const quizQuestions= {
        question: question,
        choices: choices,
        correctAnswer: correctAnswer,
    };
    console.log(quizQuestions);
};

displayQuestion();







