import askName from '../cli.js';
import commonLogic from "../index.js";

function randNumber(){
    return Math.round(Math.random()*100);
}

function brainSimple(){
    let numb1 = randNumber();
    let count = 0;
    for (let i = 0; i<Math.sqrt(numb1); i++){
        if(numb1%i===0){
            count++;
        }
    }
    return{
        "question": numb1,
        "answer": count===1 ? "yes" : "no"
    }
}
function resProg() {
    let name = askName();
    commonLogic(brainSimple, name);
}
export default resProg;