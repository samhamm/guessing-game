var question1 = prompt("Was I born in South Dakota");

if (question1.toUpperCase() === 'NO') {
  alert('Correct! Nice job.');
} else {
  alert('No, you silly goose, I was born in Germany.');
}

var question2 = prompt("Do I have a dog?");

if (question2.toUpperCase() === 'YES') {
  alert('Indeed I do! I have two: Demi and Parker.');
} else {
  alert('Wrong! Have you not noticed the dog on my computer desktop?');
}

var question3 = prompt("Am I left-handed?");

if (question3.toUpperCase() === 'YES') {
  alert('Right! Wait... I mean, left... yes, I\'m left-handed.');
} else {
  alert('Nope. You\'ve not noticed when I have been writing on the whiteboard?');
}
