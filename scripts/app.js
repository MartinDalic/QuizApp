let currentQuestion = 0;
let rightAnswerAmount = 0;

let audioRightAnswer = new Audio('audio/rightAns.mp3');
let audioWrongAnswer = new Audio('audio/wrongAns.mp3');

function showQuestion() {
  if (stillPlaying()) {
    progressBar();
    gameScreen();
  } else {
    endScreen();
  }
}

function stillPlaying() {
  return currentQuestion < questions.length;
}

function progressBar() {
  let percent = ((currentQuestion + 1) * 100) / questions.length;
  percent = Math.round(percent);
  document.getElementById("progress-bar").innerHTML = percent + " %";
  document.getElementById("progress-bar").style.width = percent + "%";
}

function gameScreen() {
  let question = questions[currentQuestion];

  // Frage
  document.getElementById("questiontext").innerHTML = question["question"];

  // 4 Antworten
  document.getElementById("ans1").innerHTML = question["ans1"];
  document.getElementById("ans2").innerHTML = question["ans2"];
  document.getElementById("ans3").innerHTML = question["ans3"];
  document.getElementById("ans4").innerHTML = question["ans4"];

  // gameScreen-footer : "count" von "amount" Fragen
  document.getElementById("questions-count").innerHTML = currentQuestion + 1;
  document.getElementById("questions-amount").innerHTML = questions.length;
}

function endScreen() {
  // Top-Image of Card
  document.getElementById("card-img-top").src = "img/medal_640.png";

  // Style
  document.getElementById("endScreen").style = "";
  document.getElementById("gameScreen").style = "display: none;";

  // endScreen-footer : "rightAnsID" von "totalAns" Fragen
  document.getElementById("rightAnsID").innerHTML = rightAnswerAmount;
  document.getElementById("totalAns").innerHTML = questions.length;
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNum = selection.slice(-1);
  let rightAnswerStr = `ans${question["rightAnswerNum"]}`;

  if (rightAnswerSelected(selectedQuestionNum)) {
    rightAnswerAmount++;
    document.getElementById(selection).parentNode.classList.add("bg-success");
    audioRightAnswer.play();
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document.getElementById(rightAnswerStr).parentNode.classList.add("bg-success");
    audioWrongAnswer.play();
  }
    document.getElementById("nextbutton").disabled = false;

}

function rightAnswerSelected(posInt) {
    return posInt == question["rightAnswerNum"];    
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById("nextbutton").disabled = true;
  resetAnswerButtons();
  showQuestion();
}

function resetAnswerButtons() {
  document.getElementById("ans1").parentNode.classList.remove("bg-success");
  document.getElementById("ans1").parentNode.classList.remove("bg-danger");
  document.getElementById("ans2").parentNode.classList.remove("bg-success");
  document.getElementById("ans2").parentNode.classList.remove("bg-danger");
  document.getElementById("ans3").parentNode.classList.remove("bg-success");
  document.getElementById("ans3").parentNode.classList.remove("bg-danger");
  document.getElementById("ans4").parentNode.classList.remove("bg-success");
  document.getElementById("ans4").parentNode.classList.remove("bg-danger");
}

function restartGame() {
  currentQuestion = 0;
  rightAnswerAmount = 0;
  document.getElementById("card-img-top").src = "img/education_640.jpg";
  document.getElementById("gameScreen").style = "";
  document.getElementById("endScreen").style = "display: none;";
  showQuestion();
}
