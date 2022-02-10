const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];

//initial scores
let quizNumber=0;
let scores=0;
let quizTime=50;




//forming both the questions and options
let quiz=document.getElementById("question-text")
let option_a=document.getElementById("option_1")
let option_b=document.getElementById("option_2")
let option_c=document.getElementById("option_3")
let option_d=document.getElementById("option_4")


//initially

const startBtn=document.getElementById("start");
const startcard=document.querySelector(".startcard");
const questionCard=document.querySelector(".question-card");
const allDoneCard=document.querySelector(".all-done-card");
const highscoreCard=document.querySelector(".highScore");
const username=document.getElementById("initials");
const finalScore=document.getElementById("score");
const submitBtn=document.getElementById("submit");
const TimeLeft=document.getElementById("time-display");


//timer
function startTimer(){
  var timeLeft=setInterval(function(){
    if(quizTime<=0){
      clearInterval(timeLeft);
      document.getElementById("time-display").innerHTML=close();
      
    }
    else{
      document.getElementById("time-display").innerHTML=quizTime;
      quizTime-=1;
    }
    
    
  },1000);
}

//hide and show elements
function show(){
  startcard.style.display="none";
  questionCard.style.display="block";
  allDoneCard.style.display='none';
  highscoreCard.style.display='none';
  
  startTimer();
  loadQuestion();

}

//closing the question card and displaying the results
function close(){
  questionCard.style.display="none";
  allDoneCard.style.display="block";
  finalScore.innerHTML=`${scores}`;
  quizNumber=0;
  quizTime=50;
  scores=0;
}

//loading the question
function loadQuestion(){
  
  quiz.innerHTML=questions[quizNumber].questionText;
  option_a.innerHTML=questions[quizNumber].options[0];
  option_b.innerHTML=questions[quizNumber].options[1];
  option_c.innerHTML=questions[quizNumber].options[2];
  option_d.innerHTML=questions[quizNumber].options[3];
  
}

//selecting a option
function select(element){
  document.getElementById("message").style.display="block";
  if(quizNumber<=questions.length-1){
    if(element.innerHTML===questions[quizNumber].answer){
      
      document.getElementById("message").innerHTML="Correct!";
      scores+=10;
      
      
      
    }else if(element.innerHTML!=questions[quizNumber].answer){
      
      document.getElementById("message").innerHTML="Incorrect!";
      quizTime = parseInt(TimeLeft.innerText);
      quizTime -= 10;
      TimeLeft.innerText = quizTime;
      
    }
    if(quizNumber<questions.length-1){
      quizNumber++;
    }else{
      close()
    }
    
    loadQuestion();
  }
  else{
    
    close();
  }
  
}

//disables the button if the user has not input the value
username.addEventListener('keyup', () => {
  submitBtn.disabled = !username.value;
});

//saving the score
function saveScore(){
  
  localStorage[("recentScore")]=finalScore.innerHTML;
  allDoneCard.style.display='none';
  startcard.style.display='block';

}


//showing the score
document.getElementById("result").innerHTML=localStorage[("recentScore")];

//goback
function goback(){
  highscoreCard.style.display='none';
  startcard.style.display='block';

}
//score
function viewScore(){
  highscoreCard.style.display='block';
  allDoneCard.style.display='none';
  startcard.style.display='none';
}