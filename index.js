const fs = require('fs');
const { registrar, leer } = require('./operaciones');

// Obtener los argumentos de la línea de comandos
const argumentos = process.argv.slice(2);
console.log('Argumentos completos:', argumentos); // muestra los argumentos completos
const operacion = argumentos[0];

// Crear el archivo citas.json si no existe, igual que en sql
if (!fs.existsSync('citas.json')) {
    fs.writeFileSync('citas.json', '[]', 'utf8');
}

// Evaluar la operación a ejecutar segun el input del usuario
// el slice(1) es para capturar los argumentos desde el 1 al final
//node index.js registrar Benito "2 años" perro blanco vomitos aca registrar es el slice(0)

if (operacion === 'registrar') {
    const [nombre, edad, animal, color, enfermedad] = argumentos.slice(1);
    console.log('Argumentos para registrar:', argumentos.slice(1));
    registrar(nombre, edad, animal, color, enfermedad);
} 

else if (operacion === 'leer') {
    leer();
}
