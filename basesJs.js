//Tipos de datos
//Valores 

"Christopher", "Las pelota brinca" //"string"
40, 15, 456, 72 //numero
{"cartucho", "pelotas"}["vaso", "garrafon"] //objeto, array
true, false //booleano

//Variables
//Son espacios en memoria donde podemos guardar informacion.

var nombre;//Declaracion de una variable "nombre"
nombre = "Christopher";//Inicializacion de una variable es darle un valor, en este ejemplo un string "Christopher"
var nombre = "Christopher";//Declaracion e inicializacion en una sola linea de codigo.

var elementos = ['Computadora', 'Celular'];

var persona = {
    nombre: 'Christopher',
    edad: 28
};

//Funciones
//Es un bloque de código que realiza una tarea específica o calcula un valor y puede ser reutilizado en varias partes de tu programa.

//Declarativas

function miFuncion() {
    return 3;
}

miFuncion();//esta es la manera de invocar una funcion

//Expresion

var miFuncion = function(a,b) {
    return a + b;
}

miFuncion();