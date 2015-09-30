

var question1 = prompt("Was it easy to get to CF today?");

if (question1.toUpperCase() === 'YES') {
  alert('Lucky you');
} else {
  alert('Sucks to be you');
}

console.log('Exactly what user entered: ' + question1);
console.log('What I am testing in my "if" condition: ' + question1.toUpperCase());

