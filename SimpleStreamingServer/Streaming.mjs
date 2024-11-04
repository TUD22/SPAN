import http from 'http'
import fs from 'fs'
import url from 'url'




http.createServer((req, res) => {

 const parsedUrl = url.parse(req.url, true);

 const fileName = parsedUrl.query.file;
 
 console.log('3')

    fs.readFile(`./${fileName}`, "UTF-8", (err, dane)=>{
        if(err){
         console.log('1')
         res.write("Nie ma takiego pliku")
         return
    }
    console.log(dane)
    res.write(dane)


 })


}).listen(3000);



console.log('Serwer nasłuchuje na http://localhost:3000');