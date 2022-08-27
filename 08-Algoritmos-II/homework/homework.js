'use strict';
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;

  let pivote = array[0];

  let left = [];
  let right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivote) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return quickSort(left).concat(pivote, quickSort(right));
  //return [...quickSort(left), pivote, ...quickSort(right)];
  // return [].concat(quickSort(left), pivote, quickSort(right));
}


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;

  let medio = Math.floor((array.length) / 2);

  let left = array.slice(0, medio);
  let right = array.slice(medio, array.length);

  return merge(
    mergeSort(left), mergeSort(right)
  );
}

function merge(left, right) {

  let resultado = [];
  let cantidadIzq = 0;
  let cantidadDer = 0;

  while (cantidadIzq < left.length && cantidadDer < right.length) {
    if (left[cantidadIzq] < right[cantidadDer]) {
      resultado.push(left[cantidadIzq]);
      cantidadIzq++;
    } else {
      resultado.push(right[cantidadDer]);
      cantidadDer++;
    }
  }
  return resultado
    .concat(left.slice(cantidadIzq))
    .concat(right.slice(cantidadDer));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
