const fs = require('fs');

// en operaciones definimos las funciones, en index segun el if se usa una u otra

// Función para registrar una nueva cita
function registrar(nombre, edad, animal, color, enfermedad) {
    // Leer el archivo citas.json
    const data = fs.readFileSync('citas.json', 'utf8');
    let citas = JSON.parse(data); // Convertir el contenido del archivo a un objeto JavaScript

    // Crear nueva cita
    let nuevaCita = { nombre, edad, animal, color, enfermedad }; //usamos let para poder modificar

    // Agregar la nueva cita al arreglo de citas
    citas.push(nuevaCita);

    // Guardar el arreglo actualizado en citas.json
    //usamos JSON.stringify(citas, null, 2) donde el null es para un fx de reemplazo
    //el 2 son espacios de identacion para que se vea mas ordenado
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2), 'utf8'); 
    console.log('Nueva cita registrada con éxito');
}

// Función para leer y mostrar todas las citas
function leer() {
    // Leer el archivo citas.json
    const data = fs.readFileSync('citas.json', 'utf8');
    let citas = JSON.parse(data); // Convertir el contenido del archivo a un objeto JavaScript

    // Mostrar todas las citas en consola
    console.log('Citas registradas:');
    console.log(citas);
}

// Exportar las funciones
module.exports = { registrar, leer };
