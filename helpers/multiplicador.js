// import { writeFileSync } from 'node:fs'; // Metodo actual ES6 necesario usar .msj en el archivo
const fs = require('node:fs');// Usando metodo anterior de ES6
const colors = require('colors')

const multiplicar = ( numero = 5, listar = false, limite = 10 ) => {
  
  const promise = new Promise((resolve, reject) => {
    let salida = '';
    let consola = '';
    // const tabla = new Array(10);

    for( let i =0; i <= limite; i++){
       salida += (`${numero} * ${i} = ${numero * i}\n`);
       consola += (`${colors.blue(numero)} * ${i} ${'='.green.bold} ${numero * i}\n`);
    };

    if(salida){
      fs.writeFileSync(`./salida/tabla-${numero}.txt`, salida);
      resolve(`tabla-${numero}.txt`.green);
    }else{
      reject('Error');
    };

    if (listar) {
      console.log('===================='.green);
      console.log(`Tabla del: ${numero}`.yellow.bold.underline);
      console.log('===================='.green);

      console.log(consola);
    };

  });

  return promise;

};

module.exports = {
  multiplicar
}

