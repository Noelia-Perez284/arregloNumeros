// Ejercicio – Arreglo de Números

// •Construya un algoritmo que tenga un arreglo
// de números y se los muestre al usuario
// •El arreglo debe ser llamado num
// •El arreglo num debe contener los siguientes
// datos: 20, 14, 8, 0, 5, 19 y 24.
// • Mostrar los valores resultantes del arreglo.

//let arregloNum: number[] = [20, 14, 8, 0, 5, 19, 24];

let arregloNum: number[] = new Array(7);
arregloNum[0] = 20;
arregloNum[1] = 14;
arregloNum[2] = 8;
arregloNum[3] = 0;
arregloNum[4] = 5;
arregloNum[5] = 19;
arregloNum[6] = 24;

let indice: number = 0;
//console.log(arregloNum);
while (indice < 7) {
  console.log("El número en la posición ", indice, " es ", arregloNum[indice]);
  indice++;
}
