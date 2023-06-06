// selecting elements 
var startBtn = document.querySelector("#start-btn");
var timer = document.querySelector("#timer");
var jsQuestion = document.querySelector("#jsQuestion");
var answerBtns = document.querySelectorAll("#answer-btn button");
var nextBtn = document.querySelector("#next-btn");
var scoreEl = document.querySelector(".score");

// quiz variables
var currentQuestionIndex = 0;
var timeLeft = 60;
var score = 0;

// start button
startBtn.addEventListener("click", function() {
    countdown();
    displayQuestion();
// disable start button once clicked
    startBtn.disabled = true; 
    startBtn.style.display = "none";
});

// next button
nextBtn.addEventListener("click", function() {
    currentQuestionIndex++;
    displayQuestion();
});

// display the current question
function displayQuestion() {
    if (currentQuestionIndex < quizQuestion.length) {
        var question = quizQuestion[currentQuestionIndex];
        jsQuestion.textContent = question.question;

        for (var i = 0; i < answerBtns.length; i++) {
            answerBtns[i].textContent = question.choices[i];
            answerBtns[i].addEventListener("click", checkAnswer);
        }
    } else {
        endQuiz();
    }
}

function checkAnswer(event) {
    var selectedAnswer = event.target.textContent;
    var currentQuestion = quizQuestion[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++
    }   else {
        // deduct 10 seconds for incorrect answer
        timeLeft -=10; 
    }
    currentQuestionIndex++;
    displayQuestion();
}

// Time countdown
function countdown() {
    var timeInterval = setInterval(function () {
        if (timeLeft> 1) {
            timer.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else {
            timer.textContent = '';
            clearInterval(timeInterval)
            endQuiz();
            // quiz is over
        }
        
    }, 1000);


};

function endQuiz() {
    timer.textContent = "Quiz Ended!";
    jsQuestion.textContent = "Your score: " + score;
    nextBtn.disabled = true; 
    answerBtns.forEach(function(button) {
            button.disabled = true;
    });
    scoreEl.textContent = "Final Score: " + score;
}
const quizQuestion = [
    {
        question: "Question 1: What is an array invoked with?",
        choices: ["Quotations", "Square Brackets", "Curly Brackets", "Parenthesis"],
        correctAnswer: "Square Brackets",
    },
    {
        question: "Question 2: What is a boolean?",
        choices: ["True or False", "An array", "A string", "A ghost"],
        correctAnswer: "True or False",
    },
    {
        question: "What is a function invoked with?",
        choices: ["Curly Brackets", "Square Brackets", "Quotations", "Parenthesis"],
        correctAnswer: "Parenthesis",
    }
];









