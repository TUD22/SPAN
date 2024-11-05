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
            oblicz(l1, l2, dzialanie)

        }else if(metoda=="promise"){
            try{
                oblicz(l1, l2, dzialanie)
            }catch(err){
                console.error(err)
            }
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

function oblicz(l1, l2, dzialanie){
    l2 = parseInt(l2)
    l1= parseInt(l1)
    console.log("liczę")
    setTimeout(() => {
        if(dzialanie=="dodaj"){
            console.log(l1+l2)
        }else if(dzialanie=="mnoz"){
            console.log(l2*l1)
        }
      }, 5000);
    
}