let nombre = "";
while (!nombre || nombre.trim() === "") {
    nombre = prompt('Ingresa tu nombre'); // Solicita el nombre al usuario
    if (!nombre || nombre.trim() === "") { // Verifica si el nombre es nulo, vacío o solo espacios
        console.error("El nombre no puede estar vacío. Por favor, ingresa al menos algo.");
    }
}

let edad = 0;
let entradaEdad;

while (!edad) {
    entradaEdad = prompt('Ingresa tu edad'); // Solicita la edad al usuario

    if (entradaEdad === null || entradaEdad.trim() === "") {
        console.error("Debes ingresar al menos algo en el campo de edad.");
        continue;
    }

    edad = Number(entradaEdad);

    if (isNaN(edad) || (edad <= 0)) {
        console.error('Por favor ingrese valores numéricos y positivos');
        edad = 0;
    } else if (edad < 18) {
        alert(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
    } else {
        alert(`Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
    }
}