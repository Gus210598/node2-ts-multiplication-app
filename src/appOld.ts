import fs from 'fs';

const message: string = "Hola Jenny!";

let outputMessage ='';
const base = 5;
const headerMessage = `
==========================
      Tabla del ${ base }
==========================\n
`;



for ( let x=1; x<=10; x++) {
    outputMessage += `${base} x ${x} = ${ base * x }\n`;
}

outputMessage = headerMessage+outputMessage;
console.log(outputMessage);

const outputPath = `outputs/aers`
fs.mkdirSync(outputPath, { recursive:true })
fs.writeFileSync(`${ outputPath }/tabla-${ base }.txt`, outputMessage);

console.log('File created!');

// console.log(message);