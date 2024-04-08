//como criar arquivos no nosso projeto
const fs=require("fs");

//criar um arquivo de log sincrono
let log = "mensagem de log\n"

//fs.writeFileSync('./logs.log',log);
fs.writeFileSync('./logs.log',log,{flag: 'a+'});


console.log("fim");