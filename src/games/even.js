import askName from '../cli.js';
import commonLogic from '../index.js';

function randNumber() {
  return Math.round(Math.random() * 100);
}

function brainEven() {
  const numb = randNumber();
  const answer = numb % 2 === 0 ? 'yes' : 'no';
  return {
    question: numb,
    answer,
  };
}
function resEven() {
  const name = askName();
  commonLogic(brainEven, name);
}
export default resEven;
