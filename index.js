var readlineSync = require('readline-sync');
var userName = readlineSync.question('What is your name? ');

var score=0;
console.log("Welcome "+ userName)

console.log("\n ------------------------------------\n")

console.log('Let\'s play a game to check how well you know simrk?')

// play function 
function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    score++;
  }

  console.log("Current score: "+ score);
}

var questions = [{
  question : "Where do simrk live? ",
  answer: "Kolkata"
},{
  question : "Where do simrk work? ",
  answer: "Udaan"
},{
  question : "What's simrk's favorite superhero? ",
  answer: "Batman"
},{
  question : "Whats simrk's favorite Tv series? ",
  answer: "Big Bang Theory"
},{
  question : "Whats simrk's favorite dish? ",
  answer: "Pasta"
}];

for(var i=0;i<questions.length;i++){
 console.log("\n") 
 play(questions[i].question,questions[i].answer);
}

console.log("Your score is : "+ score)
console.log("\n---------The Final verdict------------\n")
if(score>3){
  console.log("Friend.You know simrk well.")
}else{
  console.log("Stranger.You don't know simrk.")
}