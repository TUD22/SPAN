import fs from 'fs'



fs.watch('./obserwowanyFolder', (eventType, filename) => {

var data = new Date()
var czas=`${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`
 if (eventType=="change") {

 fs.appendFile("./log.txt", `Dokonano zmiany w pliku ${filename} o godzinie: ${czas}\n` ,(err)=>{
    if(err){
        console.error(err)
        return
    }

 })

 } else if(eventType="rename"){

    fs.readFile(`./obserwowanyfolder/${filename}`, "UTF-8", (err, data)=>{
        if(err){
            fs.appendFile("./log.txt", `Usunięto plik ${filename} o godzinie: ${czas}\n` ,(err)=>{
                if(err){
                    console.error(err)
                    return
                }
            
             })
             return
        }

        fs.appendFile("./log.txt", `Dodano plik ${filename} o godzinie: ${czas}\n` ,(err)=>{
            if(err){
                console.error(err)
                return
            }
        
         })
    })
 }

});



console.log('Nasłuchiwanie na zmiany w pliku example.txt...');