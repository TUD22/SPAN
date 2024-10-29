import fs from 'fs'
import {promises as fsPromises} from "fs"
import path, { resolve } from 'path'
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
        const imie = await zadajPytanie("Jak masz na imię")
        const nazwisko = await zadajPytanie("Jak masz na nazwsko")
        const wiek = await zadajPytanie("Ile masz lat?")

        const dane= JSON.stringify({imie, nazwisko, wiek})
        fs.writeFileSync("log.json", dane, "utf8")
        const daneJson = fs.readFileSync("log.json", 'utf8')
        console.log(daneJson)
    }catch(err){
        console.error(err)
    }finally{
        rl.close
    }
    
}

main()