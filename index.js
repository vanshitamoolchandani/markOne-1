var readlineSync = require("readline-sync");

var score = 0;
console.log("Welcome to my Quiz");
var userName = readlineSync.question("What is your name? ");
console.log("Welcome " + userName);

function quiz(questions, answer) {
  var userAnswer = readlineSync.question(questions);
  if (userAnswer === answer) {
    console.log("You are right!");
    score = score + 1;
  }
  else {
    console.log("You are wrong!");
  }

  console.log("Your score is " + score)
}

var userQuestion = [{
  question: "How old am I? ",
  answer: "21",
},
{
  question: "cats or dogs? ",
  answer: "dogs",
},  
{
  question: "What is my fav food? ",
  answer: "pizza",
},
{
  question: "What's my favorite vacation destination? ",
  answer: "new zealand",
},
{
  question: "How many siblings do I have? ",
  answer: "1",
}];
for (var i = 0; i <= userQuestion.length - 1; i++) {
  var currentQues = userQuestion[i];
  quiz(currentQues.question, currentQues.answer)
}

console.log("--------------------------");
console.log("Your final score is " + score);
console.log("Thank you for partcipating! ");
