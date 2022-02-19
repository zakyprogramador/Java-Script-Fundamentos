// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

//       DESARROLLO

//EJERCICIO I

// function contarCaracteres(words = ""){
//     if(!words){
//         console.info("Dont submit words");
//     }else {
//         console.log(`The words ${words} have ${words.length} caracters`);
//     }
// }

// contarCaracteres("Hello world");

//Segunda forma con menos lineas de codigo el mismo ejercicio
const contarCaracteres = (words = "") => 
(!words) ? console.log("Dont submit words") : console.log(`The words "${words}" have ${words.length} caracters`);

contarCaracteres("Hello word");


//EJERCICIO II

// function textoRecortado(cadena = ""){
//     if(!cadena){
//         console.log("No hay elementos");
//     }else {
//         console.log(`Este es el resultado de ${cadena} con el texto recortado: ${cadena.substr(0,4)}`);
//     }
// }

// textoRecortado("Hola que tal?");

//Segunda forma
const textoRecortado = (cadena = "") => 
(!cadena) ? console.log("No hay elementos") : 
console.log(`Este es el resultado de ${cadena} con el texto recortado: ${cadena.substr(0,4)}`);

textoRecortado("Hola que tal");


//EJERCICIO III

// function separadoCaracter(caracter = ""){
//     if(!caracter)
//     console.log("No insertaste caracteres");
//     else {
//         console.log(`Este es el resultado de "${caracter}" separados por comas: ${caracter.split(" ")}`);
//     }
// }

// separadoCaracter("Hola que haces?");

//Segunda forma
const separadoCaracter = (caracter = "") =>
(!caracter) ? console.log("No insertaste caracteres") :
console.log(`Este es el resultado de "${caracter}" separados por comas ${caracter.split(" ")}`);

separadoCaracter("Hola que haces")


//EJERCICIO IV

function repetirTexto(elemento = ""){
    if(!elemento)
    console.log("No insertaste elementos");
    else {
        console.warn(`Este es el resultado de repetir el texto "${elemento}" tres veces: ${elemento.repeat(3)}`);
    }
}

repetirTexto("StanleyKubkrick");

//Segunda forma
// const repetirTexto = (elemento = "") =>
// (!elemento) ? console.log("No insertaste elementos") :
// console.warn(`Este es el resultado de repetir el texto "${elemento}" tres veces: ${elemento.repeat(3)}`);

// repetirTexto("StanleyKubrick");





// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.


// EJERCICIO V 

//(Con Array functions):

// let revertirCadena = (cadena) => cadena.split("").reverse().join();

// console.log(revertirCadena("Odisea en el ESPACIO"))

//(Con funcion normal)

function revertirCadena(cadena = ""){
    if(!cadena)
    console.log("No hay caracteres");
    else{
        console.log(`Asi se revierte una cadena de texto: ${cadena.split("").reverse().join("")}`)
    }
}
revertirCadena("odisea en el ESPACIO");

//EJERCICIO VI

let usuario = ("Arrastrar palabras");
let myChar = "a"
let countLetter = 0;
for(let i = 0; i < usuario.length; i++){
    if(usuario.charAt(i) === myChar){
        countLetter++;
    }
}
console.log(`Encontre ${countLetter} letras ${myChar} en el texto`)

//EJERCICIO VII

function esPalindromo(cadena = ""){
    let array = cadena.split("");
    let reverse = array.reverse();

    return cadena === reverse.join("") ? "True" : "False"
}
console.log(esPalindromo("salas"));

//EJERCICIO VIII

function removeCaracteresRepetidos(texto) {
    if (typeof texto === "string") {
        let caracteres = texto.split("");
        let resultado = [];

        for( let i = 0; i < caracteres.length; ++i ) {
            if (texto.indexOf(caracteres[i]) === texto.lastIndexOf(caracteres[i])){
                resultado.push(caracteres[i]);
            }
        }

        return resultado.join("");
    } else {
        throw TypeError("El argumento debe ser un texto");
    }
}


console.log(removeCaracteresRepetidos("xyz1, xyz2, xyz3, xyz4 y xyz5"))



// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

//EJERCICIO IX

function numeroAleatorio (minimo, maximo){
    return Math.floor(Math.random() * (maximo - minimo) + minimo);
}

for(let i = 1; i <= 10; ++i){
    console.log(numeroAleatorio(501,600));
}

//EJERCICIO X

function invertirNumero (numero = ""){
    let array = numero.split("");
    let reverse = array.reverse();

    return numero === reverse.join("") ? "True" : "False"
}
console.log(invertirNumero("2002"));

//EJERCICIO XI

// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// console.log(factorial(5));

//DESARROLLADO CON VALIDACIONES!

const factorial = (numero = undefined) => {
    if (numero === undefined) return console.error("No ingresaste un numero");

    if (typeof numero!== "number") return console.error(`El valor "${numero}" ingresado, No es un numero`);

    if (numero === 0) return console.warn("El numero no puede ser 0");

    if (Math.sign(numero) === -1)return console.warn("El numero no puede ser negativo");

    let factorial = 1;

    for(let i = numero; i > 1; i--){
        factorial *= i;
    }

    return console.info(`El factorial de "${numero}" es ${factorial}`);
}

factorial();
factorial("s");
factorial(0);
factorial(-4);
factorial(5);


// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. 


// EJERCICIO XII

function esPrimo (numero = undefined) {
    if ( numero === undefined) return console.error("No ingresaste un numero");

    if(typeof numero!== "number") return console.error(`El valor "${numero}" ingresado, NO es un numero`);

    if (!Number.isInteger(numero)){
        console.warn("El numero debe ser entero");
    }

    if (numero <= 1){
        console.warn("El numero no puede ser negativo")
    }

    let raiz = Math.floor(Math.sqrt(numero)) + 1;

    for (let i = 2; i < raiz; ++i){
        if(numero % i == 0) {
            return false;
        }
    }
    return true;

    if (numero === true) return console.info(`El numero ${numero} es primo`);
}

esPrimo ();
esPrimo("g");
esPrimo(-8);
esPrimo(1.5);
esPrimo(5);
console.log(esPrimo(7));

//EJERCICIO XIII

function numeroPar (numero = undefined) {
    if (numero === undefined) return console.warn("No ingresaste un numero");

    if (typeof numero!== "number") return console.warn(`El valor "${numero}" ingresado  NO es un numero`);

    if(numero % 2 == 0){
        console.info(`El numero ${numero} es par`);
    } else {
        console.log(`El numero ${numero} es impar`);
    }
}
numeroPar();
numeroPar("h");
numeroPar(70);

//EJERCICIO XIV

function convertirAFah(celsius) {
    fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

console.log(convertirAFah(0));




// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.


//EJERCICIO XV

const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste un numero a convertir");

    if(typeof numero!== "number") return console.warn(`El valor "${numero}" ingresado, NO es un numero`);
    if(base=== undefined) return console.warn("No ingresaste la base a convertir");

    if(typeof base!== "number") return console.warn(`El valor "${base}" ingresado, NO es un numero`);

    if(base==2){
        return console.info(`${numero} base ${base} = ${parseInt(numero,base)} base 10`)
    }
}

convertirBinarioDecimal();
convertirBinarioDecimal("2");
convertirBinarioDecimal(100);
convertirBinarioDecimal(100,"2");
convertirBinarioDecimal(100,2);

// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

//EJERCICIO XVI

const aplicarDescuento = (monto = undefined, descuento = 0) => {
    if (monto === undefined) return console.warn("No ingresaste el monto");

    if (typeof monto!== "number") return console.warn(`El valor "${monto}" ingresado, NO es un numero`);

    if (monto === 0) return console.warn("El valor no puede ser 0");

    if (Math.sign(monto) === -1) return console.warn("El monto no puede ser negativo")

    if (typeof descuento!== "number") return console.warn(`El valor "${descuento}" ingresado, NO es un numero`);

    if (Math.sign(monto)== -1) return console.warn("El monto no puede ser negativo")

    return console.info(`$${monto}-${descuento}% = $${monto - ((monto * descuento)/100)}`)

}

aplicarDescuento();
aplicarDescuento("200");
aplicarDescuento((0));
aplicarDescuento(-5);
aplicarDescuento(1000,25);

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

//EJERCICIO XVII

const calcularAnios = (fecha = undefined) => {
    if(fecha === undefined) return console.warn("No ingresaste la fecha");

    if (!(fecha instanceof Date)) return console.warn("El valor que ingresaste no es una fecha valida");

    let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosEnMS = 1000 * 60 * 60 * 24 * 365
    aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMS);

    return (Math.sign(aniosHumanos) === -1)
    ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
    : (Math.sign(aniosHumanos) ===1)
    ? console.info(`Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}`)
    : console.info(`Estamos en el año actual ${fecha.getFullYear()}`);

}

calcularAnios();
calcularAnios({});
calcularAnios(false);
calcularAnios(new Date());
calcularAnios(new Date(1972,7,14));

// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

//EJERCICIO XVIII

const contarLetras = (cadena = "") => {
    if (!cadena) return console.warn("No ingresaste una cadena de texto");

    if (typeof cadena!== "string") return console.warn(`El valor "${cadena}" ingresado, No es una cadena de texto`);

    let vocales = 0,
    consonantes = 0;

    cadena = cadena.toLocaleLowerCase();

    for (let letra of cadena){
        if(/[aeiouáéíóú]/.test(letra)){
            vocales++;
        }

        if(/[bcdfghjklmnpqrstvwz]/.test(letra)){
            consonantes++;
        }
    }

    return console.info(
        cadena,
        vocales,
        consonantes
    )
}

contarLetras();
contarLetras(3);
contarLetras("Hola Mundo");
contarLetras("ÑOÑO");
contarLetras("lorem ipsum dolor sit amet consequetur");

// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

//EJERCIOCIO XIX

const validarNombre = (nombre = "") => {
    if (!nombre) return console.warn("No ingresaste un nombre");

    if (typeof nombre!== "string") return console.warn(`El valor "${nombre}" ingresado, NO es una cadena de texto`);

    let expReg = /^[A-Za-zÑñ\s]+$/g.test(nombre);

    return (expReg)
    ? console.info(`"${nombre}", es un nombre valido`)
    : console.warn(`"${nombre}", NO es un nombre valido`);
}

validarNombre();
validarNombre(3);
validarNombre("Andres Restrepo ...")
validarNombre("Andres Restrepo")

// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

//EJERCICIO XX

const validarEmail= (email = "") => {
    if (!email) return console.warn("No ingresaste un nombre");

    if (typeof email!== "string") return console.warn(`El valor "${email}" ingresado, NO es una cadena de texto`);

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z]{2,15})/i.test(email);

    return (expReg)
    ? console.info(`"${email}", es un email valido`)
    : console.warn(`"${email}", NO es un email valido`);
}

validarEmail();
validarEmail(255);
validarEmail("andresjr195@hotmail");
validarEmail("andresjr195@hotmail.com");

//FUSION 19 - 20

const validarPatron= (cadena = "", patron = "") => {
    if (!cadena) return console.warn("No ingresaste una cadena de texto a evaluar");

    if (typeof cadena!== "string") return console.warn(`El valor "${cadena}" ingresado, NO es una cadena de texto`);

    if (!patron) return console.warn("No ingresaste una cadena de texto a evaluar");

    if (typeof patron!== "string") return console.warn(`El valor "${patron}" ingresado, NO es una cadena de texto`);

    let expReg = patron.test(cadena);

    return (expReg)
    ? console.info(`"${cadena}", cumple con el patron ingresado`)
    : console.warn(`"${cadena}", NO cumple con el patrom ingresado`);

}

validarPatron();
validarPatron({});
validarPatron(2555);
validarPatron("Andres Restrepo",/^[A-Za-zÑñ\s]+$/g);


// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].


//EJERCICIO XXI

const devolverCuadrados = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo");

    if(!(arr instanceof Array)) return console.warn("El valor que ingresaste NO es un arreglo");

    if (arr.length === 0) return console.warn("El arreglo esta vacio");

    for (let num of arr){
        if (typeof num !== "number") return console.warn(`El valor "${num}" NO es un numero`);
    
    }

    const newArr = arr.map(el => el * el);

    return console.info(`Arreglo original: ${arr}.\n Arreglo elevado al cuadrado ${newArr}`);
}

devolverCuadrados();
devolverCuadrados(true);
devolverCuadrados({});
devolverCuadrados([]);
devolverCuadrados([1,"2",3]);
devolverCuadrados([8,4,9]);

// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

//EJERCICIO XXII

const arrayMinMax = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo");

    if(!(arr instanceof Array)) return console.warn("El valor que ingresaste NO es un arreglo");

    if (arr.length === 0) return console.warn("El arreglo esta vacio");

    for (let num of arr){
        if (typeof num !== "number") return console.warn(`El valor "${num}" NO es un numero`);
    
    }

    return console.info(`Arreglo original:${arr}\nValor mayor: ${Math.max(...arr)}\nValor menor:${Math.min(...arr)}`);
}

arrayMinMax();
arrayMinMax(true);
arrayMinMax([]);
arrayMinMax([2,3, false])
arrayMinMax([1, 4, 5, 99, -60]);

// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

//EJERCICIO XXIII

const separaParesImpares = (arry = undefined) => {
    if (arry === undefined) return console.warn("No ingresaste un arreglo");

    if(!(arry instanceof Array)) return console.warn("El valor que ingresaste NO es un arreglo");

    if (arry.length === 0) return console.warn("El arreglo esta vacio");

    for (let num of arry){
        if (typeof num !== "number") return console.warn(`El valor "${num}" NO es un numero`);
    
    }

    return console.info({
        pares: arry.filter(num => num % 2 === 0),
        impares: arry.filter(num => num % 2 === 1),
    })
}
separaParesImpares();
separaParesImpares(true);
separaParesImpares([]);
separaParesImpares([1,2,false]);
separaParesImpares([1,2,3,4,5,6,7,8,9]);



// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

//EJERCICIO XXIV

const ordenarMayorMenor = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo");

    if(!(arr instanceof Array)) return console.warn("El valor que ingresaste NO es un arreglo");

    if (arr.length === 0) return console.warn("El arreglo esta vacio");

    for (let num of arr){
        if (typeof num !== "number") return console.warn(`El valor "${num}" NO es un numero`);
    
    }


    return console.info({
        arr,
        asc: arr.map(el => el).sort(),
        desc: arr.map(el => el).sort().reverse()
    });
}

ordenarMayorMenor();
ordenarMayorMenor(true);
ordenarMayorMenor([]);
ordenarMayorMenor([1,2,false]);
ordenarMayorMenor([1,5,3,6,4,7,9,8,5]);

// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

//EJERCICIO XXV

const quitarDuplicados = (arr = undefined) => {
    if(arr === undefined) return console.warn("No ingresaste un arreglo")

    if(!(arr instanceof Array)) return console.warn("El valor que ingresaste no es un error");

    if(arr.length === 0) return console.warn("El arreglo esta vacio");

    if (arr.length === 1) return console.warn("El arreglo debe contener almenos dos elementos");

    return console.info({
        original: arr,
        sinDuplicados: arr.filter((value, index, self) => self.indexOf(value)=== index)
    })
}

quitarDuplicados();
quitarDuplicados({});
quitarDuplicados([]);
quitarDuplicados([2]);
quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);


// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

//EJERCICIO XXVI

const promedio = (arr = undefined) => {
    if(arr === undefined) return console.warn("No ingreso un arreglo");

    if (!(arr instanceof Array)) return console.warn("El valor ingresado no es un Arreglo");

    if (arr.length === 0) return console.warn("El arreglo esta vacio");

    return console.info(
        arr.reduce((total,num,index,arr) => {
            total += num;
            if(index === arr.length-1){
                return `El promedio de ${arr.join(" + ")} es ${total / arr.length}`
            }else{
                return total;
            }
        })
    )
}

promedio();
promedio({});
promedio([]);
promedio([9,8,7,6,5,4,3,2,1,0]);



// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.


// - Todos los datos del objeto son obligatorios.
// - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y  los 7      restantes números.
// - Valida que el título no rebase los 100 caracteres.
// - Valida que el director no rebase los 50 caracteres.
// - Valida que el año de estreno sea un número entero de 4 dígitos.
// - Valida que el país o paises sea introducidos en forma de arreglo.
// - Valida que los géneros sean introducidos en forma de arreglo.
// - Valida que los géneros introducidos esten dentro de los géneros 
//      aceptados*.
// - Crea un método estático que devuelva los géneros aceptados*.
// - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.
//        - Crea un método que devuelva toda la ficha técnica de la película.
//        - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.


class Pelicula {
    constructor({id,titulo,director,estreno,pais,generos,calificacion}){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPaises(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);
        
    }

    static get listaGeneros(){
        return["Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western."];
    }

    static generosAceptados(){
        return console.info(`Los generos aceptados son: ${Pelicula.listaGeneros.join(" ,")}`);
    }

    validarCadena(propiedad,valor){
    if(!valor) return console.warn(`${propiedad}"${valor}"Esta vacio`);

    if (typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de texto`);

    return true;

    }

    validarLongitudCadena(propiedad,valor,longitud){
        if (valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el numero de caracteres permitidos (${longitud})`);

    return true;
    }

    validarNumero(propiedad,valor){
        if (!valor) return console.error(`${propiedad} "${valor}" Esta vacio`);

        if (typeof valor !== "number") return console.error(`${propiedad}"${valor}"ingresado no es un numero`);

    return true;
    }

    validarArreglo(propiedad,valor){
        if(!valor) return console.warn(`${propiedad}"${valor}" esta vacio`);

        if(!(valor instanceof Array)) return console.error(`${propiedad}"${valor}"ingresado NO es un arreglo`);
        
        if(valor.length === 0) return console.error(`${propiedad}"${valor}" NO tiene datos `);

        for (let cadena of valor) {
            if(typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`);
        }

    return true;
    }

    validarIMDB(id){
        if(this.validarCadena("IMDB id", id))
            if(!/^([a-z]){2}([0-9]){7}$/.test(id))
                return console.error(`IMBD id "${id}" no es valido, debe tener 9 caracteres, los 2 primeros letras, los 7 restantes numeros`);
    }

    validarTitulo(titulo){
        if(this.validarCadena("Titulo",titulo)){
            this.validarLongitudCadena("Titulo",titulo,100);
        }
    }

    validarDirector(director){
        if(this.validarCadena("Director",director)){
            this.validarLongitudCadena("Director",director,50);
        }
    }

    validarEstreno(estreno){
        if(this.validarNumero("Año de estreno", estreno))
            if(!/^([0-9]){4}$/.test(estreno))
                return console.error(`Año destreno "${estreno}" no es valido, debe tener 4 numeros`);
    }

    validarPaises(pais){
        if(this.validarArreglo("Pais", pais));
    
    }

    validarGeneros(generos){
        if(this.validarArreglo("Generos", generos)){
            for(let genero of generos){
                console.log(genero, Pelicula.listaGeneros.includes(genero));
            }
        }
    }

    validarCalificacion(calificación){
        if(this.validarNumero("Calificacion", calificación))
            return (calificación < 0 || calificación > 10)
            ? console.error("La calificacion tiene que estar en un rango entre 0 y 10")
            : this.calificación = calificación.toFixed(1);
        
}

} 

const peli = new Pelicula({
    id: "hh1478523",
    titulo: "DARK SIDE",
    director: "Gaspar Noe",
    estreno: 1998,
    pais: ["Colombia -España-Italia"],
    generos: ["Documentary ,Drama, Family, Fantasy,"],
    calificacion: 9.5
    

})

const misPelis = [
    {
        id: "tt0758758",
        titulo: "Into the Wild",
        director:"Sean Pern",
        estreno: 2007,
        pais:["USA"],
        generos:["Adventure","Biografy","Drama"],
        calificacion:8.1
    },
    {
        id: "tt1547484",
        titulo: "Rocky Balboa",
        director:"Sylvester Stallone",
        estreno: 2006,
        pais:["USA"],
        generos:["Accion","Sport","Drama"],
        calificacion:7.1
    },
    {
        id: "tt0468569",
        titulo: "The Dark Night",
        director:"Cristopher Nolan",
        estreno: 2008,
        pais:["USA - UK"],
        generos:["Accion","Crime","Drama"],
        calificacion:9.0
    }
];

misPelis.forEach(el => new Pelicula(el).fichaTecnica());