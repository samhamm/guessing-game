var one  = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');

// I declare....
function ques1() {
  var question1 = prompt("Was I born in South Dakota?");
  if (question1.toUpperCase() === 'NO' ||  question1.toUpperCase() === 'N') {
    one.innerHTML = 'Correct! Nice job.';
  } else {
    one.innerHTML = 'No, you silly goose, I was born in Germany.';
  }
}

function ques2() {
  var question2 = prompt("Do I have a dog?");
  if (question2.toUpperCase() === 'YES' || question2.toUpperCase() === 'Y') {
    two.innerHTML = 'Indeed I do! I have two: Demi and Parker.';
  } else {
    two.innerHTML = 'Wrong! Have you not noticed the dog on my computer desktop?';
  }
}

function ques3() {
  var question3 = prompt("Am I left-handed?");
  if (question3.toUpperCase() === 'YES' || question3.toUpperCase() === 'Y') {
    three.innerHTML = 'Right! Wait... I mean, left... yes, I\'m left-handed.';
  } else {
    three.innerHTML = 'Nope. You\'ve not noticed when I have been writing on the whiteboard?';
  }
}

// I call.
ques1();
ques2();
ques3();
