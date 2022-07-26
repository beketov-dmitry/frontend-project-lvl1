import askName from '../cli.js';
import commonLogic from '../index.js';

function randNumber() {
  return Math.round(Math.random() * 100);
}

function brainSimple() {
  const numb1 = randNumber();
  let count = 0;
  for (let i = 0; i <= Math.sqrt(numb1); i += 1) {
    if (numb1 % i === 0) {
      count += 1;
    }
  }
  return {
    question: numb1,
    answer: count === 1 ? 'yes' : 'no',
  };
}
function resProg() {
  const name = askName();
  commonLogic(brainSimple, name);
}
export default resProg;
