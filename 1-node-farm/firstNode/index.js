const fs = require('fs');
const http = require('http');

////////////////////// FILES
// Blocking, Synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);
// const textOut = `this is what we know about awokado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File is writen!!');

// Non-blocking
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//             console.log(data3);
//             fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log('Your data has been writen!!!');
//             });
//         });
//     });
// });
// console.log('Will read file');

////////////////////// SERVER
const server = http.createServer((req, res) => {
    res.end('Hello server');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});
