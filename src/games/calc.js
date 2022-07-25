import commonLogic from "../index.js";
import askName from '../cli.js';

function randNumber(){
    return Math.round(Math.random()*100);
}

function randSign(){
    return ["+", "-", "*"][Math.round(Math.random()*2)];
}

function brainCalc(){
    let numb1 = randNumber();
    let numb2 = randNumber();
    let sign = randSign();
    let answer = 0;
    switch (sign){
        case "+": answer = numb1 + numb2
            break;
        case "-": answer = numb1 - numb2
            break;
        case "*": answer = numb1 * numb2
            break;
        default:
            break;
    }
    return {"question": numb1 + " " + sign + " " + numb2,
        "answer": answer};
}

function resCalc() {
    let name = askName();
    commonLogic(brainCalc, name);
}
export default resCalc;
