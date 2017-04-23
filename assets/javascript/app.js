$(document).ready(function(){

//Global Variables

var questionBank = [{
  question: "What is the name of the restuarant where Brandon Walsh works on Beverly Hills 90210?",
  choices: ["Apple Fritters", "The Peach Pit", "Central Perk", "The Max"],
  answer: "The Peach Pit"
},
  {question:"Kelly Kapowski (Save by the Bell) and Valerie Malone (90210), were portrayed by this actress:",
  choices:["Tori Spelling", "Jennifer Aniston", "Jennie Garth", "Tiffani Amber Thiessen"],
  answer:"Tiffani Amber Thiessen"
},

  {question:"What is the name of the high school that is featured in Dawson's Creek?",
  choices:["Bayside", "Capeside", "Sweet Valley High", "Scranton High"],
  answer: "Capeside"
},

  {question:"Full House takes place in which of the following cities:",
  choices:["San Francisco", "Detroit", "Raleigh", "NYC"],
  answer:"San Francisco"
},

  {question:"Which of the following actors did NOT appear on In Living Color:",
  choices:["Jim Carrey", "Damon Wayans", "Jamie Foxx", "Adam Sandler"],
  answer: "Adam Sandler"

}]

console.log(questionBank[0].question);

var firstQ;
var secondQ;
var thirdQ;
var fourthQ;
var fifthQ;

var quiz = $("#bank");

var timer;
console.log(timer);

var countdown = 30;

var answerBankQ1 = [];
var answerBankQ2 = [];
var answerBankQ3 = [];
var answerBankQ4 = [];
var answerBankQ5 = [];
var answerBankFinal = [];

var correctBank = ["The Peach Pit", "Tiffani Amber Thiessen","Capeside","San Francisco","Adam Sandler"];
console.log(correctBank);

var clickLimit;

var correct = 0;

var incorrect = 0;

var audioElement = document.createElement("audio");
  audioElement.setAttribute("src", "assets/images/90210theme.mp3");


//Functions

$("#start").on("click", function() {

  $(this).hide("fast");
  $("#bank").toggle();
  audioElement.play();
  startCountdown();
  generateQuestions();
});

$("#submit").on("click", function(){

    $("#bank").hide("fast");
    $("#results").toggle();
    determineCorrect();
    determineUnanswered();
    audioElement.pause();

});

function startCountdown(){

  $("#timeRemaining").html(countdown)
  countdown = countdown - 1;
  timer = setTimeout(startCountdown, 1000);
  if(countdown < 0){
    clearTimeout(timer);
    $("#bank").hide("fast");
    $("#results").toggle();
    determineCorrect();
    determineUnanswered();
  }
}

function generateQuestions(){
  generateQ1();
  generateQ2();
  generateQ3();
  generateQ4();
  generateQ5();

}

function generateQ1(){
  firstQ = questionBank[0].question;
  $("#q1").html(firstQ);
  console.log(firstQ);
  $("#q1Choice1").html(questionBank[0].choices[0]);
  $("#q1Choice2").html(questionBank[0].choices[1]);
  $("#q1Choice3").html(questionBank[0].choices[2]);
  $("#q1Choice4").html(questionBank[0].choices[3]);
    console.log(questionBank[0].choices[0])
}

function generateQ2(){
  secondQ = questionBank[1].question;
  $("#q2").html(secondQ);
  $("#q2Choice1").html(questionBank[1].choices[0]);
  $("#q2Choice2").html(questionBank[1].choices[1]);
  $("#q2Choice3").html(questionBank[1].choices[2]);
  $("#q2Choice4").html(questionBank[1].choices[3]);

}

function generateQ3(){
  thirdQ = questionBank[2].question;
  $("#q3").html(thirdQ);
  $("#q3Choice1").html(questionBank[2].choices[0]);
  $("#q3Choice2").html(questionBank[2].choices[1]);
  $("#q3Choice3").html(questionBank[2].choices[2]);
  $("#q3Choice4").html(questionBank[2].choices[3]);
}

function generateQ4(){
  fourthQ = questionBank[3].question;
  $("#q4").html(fourthQ);
  $("#q4Choice1").html(questionBank[3].choices[0]);
  $("#q4Choice2").html(questionBank[3].choices[1]);
  $("#q4Choice3").html(questionBank[3].choices[2]);
  $("#q4Choice4").html(questionBank[3].choices[3]);
}

function generateQ5(){
  fifthQ = questionBank[4].question;
  $("#q5").html(fifthQ);
  $("#q5Choice1").html(questionBank[4].choices[0]);
  $("#q5Choice2").html(questionBank[4].choices[1]);
  $("#q5Choice3").html(questionBank[4].choices[2]);
  $("#q5Choice4").html(questionBank[4].choices[3]);
}
//I tried to generate the choices wit a for loop, but it wasn't working and for sake of time and energy I did it this way...


  $("input.one").on("click", function(){
      answerBankQ1 = [];
      var selectOne = $("#one:checked").val();
      answerBankQ1.push(selectOne);
      console.log(selectOne);
      console.log(answerBankQ1);
  });

    $("input.two").on("click", function(){
      answerBankQ2 = [];
      var selectTwo = $("#two:checked").val();
      answerBankQ2.push(selectTwo);
      console.log(selectTwo);
      console.log(answerBankQ2);
  });

    $("input.three").on("click", function(){
      answerBankQ3 = [];
      var selectThree = $("#three:checked").val();
      answerBankQ3.push(selectThree);
      console.log(selectThree);
      console.log(answerBankQ3);
  });

    $("input.four").on("click", function(){
      answerBankQ4 = [];
      var selectFour = $("#four:checked").val();
      answerBankQ4.push(selectFour);
      console.log(selectFour);
      console.log(answerBankQ4);
  });

    $("input.five").on("click", function(){
      answerBankQ5 = [];
      var selectFive = $("#five:checked").val();
      answerBankQ5.push(selectFive);
      console.log(selectFive);
      console.log(answerBankQ5);
  });

  function determineCorrect(){

     answerBankFinal = answerBankQ1.concat(answerBankQ2, answerBankQ3, answerBankQ4, answerBankQ5);
console.log(answerBankFinal);

    for(var i = 0; i < answerBankFinal.length; i++){
        if(correctBank[i] === answerBankFinal[i]){
          correct++;
          console.log(correct);
          $("#questionsRight").html(correct);
        }
        else{
          incorrect++;
          console.log(incorrect);
          $("#questionsWrong").html(incorrect);
        }
      }

    }

  function determineUnanswered(){

    var unanswered = correctBank.length - answerBankFinal.length;
    console.log(unanswered);
    $("#didNotAnswer").html(unanswered);

  }

  });


