var readlineSync = require('readline-sync');


var questionOne = {
  question : "Who is the writer of Money Heist ",
  answer : "alex pina",
}
var questionTwo = {
  question : "Money Heist is crime drama of which country ",
  answer : "spain",
}

var questionThree = {
  question : "Is Money  Heist fictional or true story ",
  answer : "fictional",
}

var questionFour = {
  question : "who is professor's brother in web series ",
  answer : "berlin",
}
var questionFive = {
  question : "who played the role of professor ",
  answer : "alvaro morte",
}
var questionSix = {
  question : "was professor the most intelligent person among all ",
  answer : "yes",
}
var questionSeven = {
  question : "what was the name of denver's father in code name ",
  answer : "moscow",
}
var questionEight = {
  question : "How many season does money heist have ",
  answer : "five",
}
var questionNine = {
  question : "who died in money heist season 1 ",
  answer : "oslo"
}
var questionTen = {
  question : "who killed Nairobi ",
  answer : "gandia"
}
var scoreOne =0;

var questionArray =[questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine,questionTen];

function play(question,correctAnswer){
 userAnswer = readlineSync.question(question);
 if(userAnswer.toUpperCase() === correctAnswer.toUpperCase() ){
    console.log("You are right ");
    scoreOne = scoreOne + 1;
    
 } else {
     console.log("Your were wrong ");
    
    
 } 
   console.log("your score is : "+ scoreOne);

}

// --------------------------------------------------------
 var scoreHighest ={
    
  name : "Shreyash",
  score : 10
}
 

var scoreSecondHighest = {
  name : "Vicky",
  score : 9
}




var scoreArray = [scoreHighest,scoreSecondHighest];
// ---------------------------------------------------------------------------
console.log("Money Heist quiz \n");
var userName = readlineSync.question("Enter your Name ");
console.log("Hello "+userName);

// --------------------------------------------------------------------------

for(i=0;i<questionArray.length;i++){
     
    play(questionArray[i].question,questionArray[i].answer)
}



console.log("-------------------------------------------------");
console.log("\nHighest score ");
for(i=0;i<scoreArray.length;i++){
   console.log("Name " +scoreArray[i].name + "\n Score : "+ scoreArray[i].score);
}


console.log("-------------------------------------------------");




console.log("Your Final score is : "+ scoreOne);
console.log("If you have beaten highest score, then send me the screenshot ");