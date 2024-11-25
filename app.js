
// import { multiplicar } from './helpers/multiplicador.mjs'; // importar con ES6
const { multiplicar } = require('./helpers/multiplicador.js') // forma de importar antes del ES6
const argv = require('./config/yargs.js')
const colors = require('colors')

console.clear();

// console.log(argv);

multiplicar(argv.b , argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));