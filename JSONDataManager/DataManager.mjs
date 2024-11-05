import fs from 'fs'
import {promises as fsPromises} from "fs"
import path, { resolve } from 'path'
import { fileURLToPath } from 'url'
import readline from "readline"

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

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

        const plik= await zadajPytanie("podaj nazwę pliku")
        const filePath = path.join(__dirname, plik)

    try{
        const typ = await zadajPytanie("Chcesz odczytać czy dodać?")  
        if(typ=="odczytaj"){
            const daneJson = fs.readFileSync(filePath, 'utf8')
            console.log(daneJson)
        }else if(typ=="dodaj"){
            const imie = await zadajPytanie("Jak masz na imię")
            const email = await zadajPytanie("Jaki masz email?")
            const wiek = await zadajPytanie("Ile masz lat?")
            const dane= JSON.stringify({imie, email, wiek})
            fs.appendFileSync(filePath, `${dane} \n`)
        }else{
            Console.log("Nie ma takiego polecenia")
        }
    }catch(err){
        console.log("Folder nie istnieje")
        await fsPromises.writeFile(filePath)
        console.log("Plik został stworzony")
    }finally{
        rl.close
    }
    
}

main()