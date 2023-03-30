let numeros = [10, 50, 20, 35, 6, 9, 100, 63, 70, 99];

let [cero, , dos, , cuatro, ...resto] = numeros;

let mascota = {
    nombre: 'Milo',
    tipo: 'perro',
    color: 'dorado',
    raza: 'Cocker'
}

let {nombre, tipo, color, raza} = mascota;


console.log(`Hola, les presento a mi mascota. Su nombre es ${nombre}. \nEs un hermoso ${tipo}, de color ${color} y su raza es ${raza}`);