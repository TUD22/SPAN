import path, { resolve } from 'path'
import fs from 'fs'
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
        const nazwa = await zadajPytanie("nazwa")
        

        const dane= JSON.stringify({imie, nazwisko, wiek})
       
        fs.stat(`./${nazwa}`, (err, stats) => {

            if (err) {
           
            console.error('Wystąpił błąd podczas odczytu statystyk pliku:', err);
           
            return;
           
            }
           
            console.log(stats);
           
           });
    }catch(err){
        console.error(err)
    }finally{
        rl.close
    }
    
}

main()