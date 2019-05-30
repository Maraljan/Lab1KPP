let bull, k;


function RND(a, b) {
   return Math.floor(Math.random()*(b-a+1)+a)
}

function Make() {
  let s = '';
  let c;
  for (let i = 0; i <= 4; i++) {
    do {
      c = RND(0,9);
    } while(s.indexOf(c)>=0);
    s = s + c;
  }
  return s;
}

function Analizy(make, attempt) {
  bull = 0;
  k = 0;
  for (let i = 0; i < 4; i++) {
    if (make[i] == attempt[i]) {
      bull++;
    } else {
      if (make.indexOf(attempt[i])>=0) {
        k++
      }
    }
  }
}

const readlineSync = require('readline-sync');
const target = Make();
for (var i = 0; i < 10; i++) {
  const number = readlineSync.question('Enter some number: ');
  Analizy(target, number);
  console.log(`Bulls: ${bull} Cows: ${k}`);

  if (number == target) {
    console.log('you are win');
    break;
  }
}
