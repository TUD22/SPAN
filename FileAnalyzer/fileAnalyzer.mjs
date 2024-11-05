import path, { resolve } from 'path'
import fs, { readFileSync } from 'fs'
import readline from "readline"
import EventEmitter from 'events';

const eventEmitter = new EventEmitter();

eventEmitter.on("start", stats=>{
    if(stats[0].isFile()){
        console.log(`Nazwa: ${stats[1]}, rozmiar: ${stats[0].size}, czas modyfikacji: ${stats[0].mtime}, rozszerzenie: ${path.extname(`./${stats[1]}`)}`)
    }else if(stats[0].isDirectory()){
        fs.readdirSync(stats[1]).map(fileName=>{
            fs.stat(`./${stats[1]}/${fileName}`, (err, stat)=>{
                if (err) {
                    console.error('Wystąpił błąd podczas odczytu statystyk pliku:', err);
                    return;
             }
             eventEmitter.emit('start', [stat, fileName])
            })
        })
    }
    eventEmitter.emit("koniec")
})

eventEmitter.on("koniec", ()=>{
    rl.close
})

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

        const nazwa = await zadajPytanie("nazwa")
        

       
        fs.stat(`./${nazwa}`, (err, stats) => {

            if (err) {
           
            console.error('Wystąpił błąd podczas odczytu statystyk pliku:', err);
           
            return;
           
            }
            //console.log(stats)
            eventEmitter.emit("start", [stats, nazwa])
           
           });
    
}

main()