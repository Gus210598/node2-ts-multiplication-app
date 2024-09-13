import fs from 'fs';
import { yarg } from './config/plugins/args.plugin'


// console.log( yarg );

const { b:base, l:limit, s:showTable } = yarg;

let outputMessage ='';

const headerMessage = `
==========================
      Tabla del ${ base }
==========================\n
`;



for ( let x=1; x<=limit; x++) {
    outputMessage += `${base} x ${x} = ${ base * x }\n`;
}

outputMessage = headerMessage+outputMessage;
if ( showTable ) {
    console.log(outputMessage);
    
}


const outputPath = `outputs/aers`
fs.mkdirSync(outputPath, { recursive:true })
fs.writeFileSync(`${ outputPath }/tabla-${ base }.txt`, outputMessage);

console.log('File created!');

// console.log(message);