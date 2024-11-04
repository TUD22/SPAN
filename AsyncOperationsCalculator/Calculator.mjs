import {promises as fsPromises} from "fs"
import readline from "readline"

const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function zadajPytanie(pytanie){
    return new Promise(resolve=>{
        rl.question(pytanie, odpoweidz=>{
            resolve(odpoweidz)
        })
    })
}

async function main(){
    try{
        const l1 = await zadajPytanie("Podaj pierwszą liczbę")
        const l2 = await zadajPytanie("Podaj drugą liczbę")
        const dzialanie = await zadajPytanie("Podaj działanie")
        const metoda = await zadajPytanie("Podaj metodę działania")
        if(metoda=="callback"){

        }else if(metoda="promise"){
            new Promise((resolve, reject)=>{
                
            })
        }else{
            console.log("Nie ma takiej metody")
        }

    }catch(err){
        console.error(err)
    }finally{
        rl.close
    }
    
}

main()