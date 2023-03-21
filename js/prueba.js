// let miTexto1 = "hola"
// let miTexto2 = " como estas";

// let textoFinal;

// textoFinal = miTexto1 + miTexto2;


// console.log (textoFinal)
// console.log ("el tipo de dato es:" + typeof textoFinal)


// let x = 3
// let y = 100
// let resultado = x * y
// console.log ( "resultado de resto:" + resultado)

/// pedir info al usuario

// let valor = prompt ("soy un titan de la vida")


///alert 
/// mostramos un mensaje en una ventana en la pagina

// alert(" no sos gil " + valor)

// let valor1;
// let valor2;
// let resultadosuma;
// valor1 = prompt ("hola ingrese el primer valor")
// valor2 = prompt ("ingrese el 2do valor");


// valor1 = parseFloat (valor1); ///piso el valor
// valor2 = parseFloat (valor2);

// resultadosuma = valor1 + valor2;
// alert ("el resultado es " + resultadosuma)

/// convertir los valores a number o de lo contrario el promp me va devolver siempre string


// let unNumero = 5

// if (unNumero == 5) {
//     console.log("ves el mensaje")
// }

// if (unNumeo == 6) {
//     console.log("no ves este mensaje")
// }

// let unColor = "rojo"
// if (uncolor == "rojo") {
//     console.log("el color es rojo")
// } else {
//     //la introduccion se interpreta cuando Uncolor no es "rojo"
//     console.log("el color no es rojo")
// }


// let nombreUsuario = prompt ("ingresar nombre")

// if (nombreUsuario == "") {
//     alert ("no ingresaste nada")
// }
// else {
//     alert ("nombre ingresado correctamente " + nombreUsuario)
// }

// let precio = 100.5;

// if (precio < 50) {
//     alert ("precio es menor a 50")
// }
// else if (precio < 100) {
//     alert ("precio menor a 100")
// }

// else {
//     alert ("precio mayor a 100")
// }


// validacines de inputs
//
// let nombreIngresado = prompt("Ingresar nombre")
// let apellidoIngresado = prompt("ingresar apellido")

// if ((nombreIngresado != "") && (apellidoIngresado != "")) {
//     alert("nombre:" + nombreIngresado + "apellido: " + apellidoIngresado)
// } else {
//     alert("error:ingresar nombre y apellido")
// }

// let nombreIngresado = prompt("ingresar ema")
// if ((nombreIngresado == "ema") || (nombreIngresado == "emanuel")) {
//     alert("correctoooooooooo")
// } else {
//     alert("incrrecoooooo")
// }

// let nombreIngresado = prompt ("ingresar nombre")

// if ((nombreIngresado !="") && ((nombreIngresado == "EMA") || (nombreIngresado == "ema"))) {
//     alert ("hola ñeñañel!!!!")
// } else {
//     alert ("no sos un ñeñañel")
// }




// <!DOCTYPE html>
// <html>
// <body>

// <h2>What Can JavaScript Do?</h2>

// <p id="demo">JavaScript can change the style of an HTML element.</p>

// <button type="button" onclick="document.getElementById('demo').style.fontSize='35px'">Click Me!</button>

// </body>
// </html> 

//Funcion que cambia el color de los enlaces a naranja al pasar por encima

// document.getElementById("demo1").addEventListener("mouseover", porencima);
// document.getElementById("demo1").addEventListener("mouseout", alquitar);
// document.getElementById("demo").addEventListener("mouseover", porencima);
// document.getElementById("demo").addEventListener("mouseout", alquitar);
// document.getElementById("demo2").addEventListener("mouseover", porencima);
// document.getElementById("demo2").addEventListener("mouseout", alquitar);
// document.getElementById("demo3").addEventListener("mouseover", porencima);
// document.getElementById("demo3").addEventListener("mouseout", alquitar);




// function porencima() {

//     document.getElementById("demo1").innerHTML = "nueva partida";
//     document.getElementById("demo").innerHTML = "opciones";
//     document.getElementById("demo2").innerHTML = "enciclopedia";
//     document.getElementById("demo3").innerHTML = "contacto";
// }

// function alquitar() {

//     document.getElementById("demo1").innerHTML = "ନୂତନ ଖେଳ";
//     document.getElementById("demo").innerHTML = "ବିକଳ୍ପଗୁଡ଼ିକ";
//     document.getElementById("demo2").innerHTML = "ଏନସାଇକ୍ଲୋପିଡ଼ିଆ";
//     document.getElementById("demo3").innerHTML = "ଯୋଗାଯୋଗ କରନ୍ତୁ |";

// }


// let a 
// let b 

// a = 7
// b = 9

// if ((a < b ) && (a !=3)) {
//     console.log ("a s menor a b y ademas es distinto de 3")
// }

///bucle multipilcar
///

// let ingresarNumero = parseInt (prompt("ingresar numero"));

// for (let i = 1; i <= 10; i++) {
//     let resultado = ingresarNumero * i ;
//     alert (ingresarNumero + " x "+ i + " ="+ resultado)
// }

// ejemplo for
///

// for (let i=0; i<10; i++){
//     alert("saludo #" + i);
// }




///ejemplo aplicado do...while

///se solicita una entrada y se detiene cuando no es un numero

// let numero = 0
// do {
//     //repetimos con do..while mientras el usuario ingresa un n°
//     numero = prompt ("ingresar numero")
//     console.log (numero)
//     ///si el parseo no resulta un numero se interrumpe el bucle
// }while (parseInt (numero))


//ejemplo de switch
///

// let entrada = parseInt(prompt("ingresar un nombre"));
// //repetimos hasta que se ingresa esc
// while(entrada != "esc") {
//     switch (entrada) {
//         case "ana":
//             alert("hola ana")
//             break;
//         case "juan":
//             alert("hola juan")
//             break
//         default:
//             alert("quien sos")
//             break;
//     }
//     entrada = prompt("ingresar un nombre gil");
// }


/// clase 3
///
///


///calculadora

//entrada de datos

// let altura = parseFloat(prompt("ingrese su altura"));
// let peso = parseFloat(prompt("ingrese su peso"));

// //proceso de daros

// let imc = peso / (altura * altura);

// //validacion

// if (imc < 18.5) {
//     let mensaje = "peso inferior al normal"
// } else if (imc >= 18.5 && imc <= 24.9) {
//     mensaje = "normal"
// } else if (imc >= 25 && imc <= 29.5) {
//     mensaje = "obeso"
// }

// // salida de datos

// alert("tu imc es; " + imc + "%")
// alert("tu condicion de salud es; " + mensaje);



// algoritmo de prueba
// 

// let valor_maximo = parseFloat(prompt("ingresar el limite maximo de tarjeta"))
// let salida = "";
// let gastos = 0
// let detalle = ""
// let valor;

// while (gastos <= valor_maximo) {
//     detalle = prompt("ingrese gasto")

//     if (detalle.toUpperCase() == "ESC") {
//         break;
//     }


//     valor = parseFloat(prompt("valor del gasto"))
//     salida += detalle + "  $" + valor;
//     gastos += valor;
// }

// alert("resumen de tarjeta: " + salida )
// alert("total: " + gastos)


// let edad = parseInt(prompt("edad"))
// let anos = 365
// let dias;

// dias = edad * anos

// alert("edad en dias " + dias)