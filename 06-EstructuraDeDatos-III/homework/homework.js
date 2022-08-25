"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes,
   según se indique por parámetro ("post-order", "pre-order", o "in-order"). 
   Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.

  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio
   homework.
*/

function BinarySearchTree(value) {

  this.value = value;
  this.left = null;
  this.right = null;
}


BinarySearchTree.prototype.size = function () {

  let suma = 0;
  if (this.value !== null || this.value === 0) suma += 1;
  if (this.left === null && this.right === null) return suma;
  if (this.left !== null && this.right === null) {
    suma += this.left.size();
  } else
    if (this.right !== null && this.left === null) {
      suma += this.right.size();
    } else
      if (this.right !== null && this.left !== null) {
        suma += (this.right.size() + this.left.size());
      }
  return suma;
};


BinarySearchTree.prototype.insert = function (value) {

  if (this.value === null) this.value = new BinarySearchTree(value);

  if (value < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};


BinarySearchTree.prototype.contains = function (value) {

  if (this.value === value) return true;
  if (value > this.value && this.value !== null) {
    if (this.right !== null) {
      if (value == this.right.value) return true;
      if (value > this.right.value) return this.right.contains(value);
      if (value < this.right.value) return this.right.contains(value);
    }
  } else {
    if (this.left !== null) {
      if (value == this.left.value) return true;
      if (value > this.left.value) return this.left.contains(value);
      if (value < this.left.value) return this.left.contains(value);
    }
  }
  return false;
};


BinarySearchTree.prototype.depthFirstForEach = function (cb, order = "in-order") {

  switch (order) {
    case "in-order": {
      this.left?.depthFirstForEach(cb, order);
      cb(this.value);
      this.right?.depthFirstForEach(cb, order);

      break;
    }
    case "pre-order": {
      cb(this.value);
      this.left?.depthFirstForEach(cb, order);
      this.right?.depthFirstForEach(cb, order);
      break;
    }
    case "post-order": {
      this.left?.depthFirstForEach(cb, order);
      this.right?.depthFirstForEach(cb, order);
      cb(this.value);
      break;
    }
  }
};


BinarySearchTree.prototype.breadthFirstForEach = function (cb, queue = []) {

  cb(this.value);
  if (this.left) queue.push(this.left);
  if (this.right) queue.push(this.right);

  if (queue.length) {
    queue.shift().breadthFirstForEach(cb, queue);
  }
};




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
