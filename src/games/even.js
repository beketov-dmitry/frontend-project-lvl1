import askName from '../cli.js';
import commonLogic from "../index.js";

function randNumber(){
    return Math.round(Math.random()*100);
}

function brainEven(){
    let numb = randNumber();
    let answer = numb%2===0 ? "yes" : "no";
    return {"question": numb,
        "answer": answer};
}
function resEven() {
    let name = askName();
    commonLogic(brainEven, name);
}
export default resEven;