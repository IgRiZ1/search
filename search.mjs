import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:https';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});


let lijstnamen = ["Amin", "Sofie", "Samantha", "Karel", "Mehdi", "Joris", "Nuria"]

for(let i = 0 ; i <  1 ; i++){
    let opzoeken = await userInput.question(' Wie zoek je op ? ')
    if(opzoeken == "Amin"){
         console.log(lijstnamen[0]+" is het eerste op het lijst ")
    } else if(opzoeken == "Sofie"){
        console.log(lijstnamen[1]+" is het tweede op het lijst ")
    }else if(opzoeken == "Samantha"){
        console.log(lijstnamen[2]+" is het derde op het lijst ")
    }else if(opzoeken == "Karel"){
        console.log(lijstnamen[3]+" is het vierde op het lijst ")
    }else if(opzoeken == "Mehdi"){
        console.log(lijstnamen[4]+" is het vijfde op het lijst ")
    } else if(opzoeken == "Joris"){
        console.log(lijstnamen[5]+" is het zesde op het lijst ")
    }else if(opzoeken == "Nuria"){
        console.log(lijstnamen[6]+" is het zevende op het lijst ")
    } else{
        console.log(-1)
    }
   
}
process.exit()