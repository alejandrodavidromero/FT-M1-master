
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10; //imprime 1ro 10
  console.log(x);
  console.log(a); // imprime 2dp undefinded
  var f = function(a, b, c) {
    b = a;
    console.log(b); //imprime 3ro 
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);
}
c(8,9,10);
console.log(b); // imprime 8
console.log(x); //imprime 5
```

```javascript
console.log(bar); //imprime 1ro Hola
console.log(baz); //undefined
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco"; // imprime Franco
}
console.log(instructor);
```

```javascript
var instructor = "Tony"; //imprime 1ro
console.log(instructor);
(function() {
   if(true) {
      var instructor = "Franco"; // imprime 2do
      console.log(instructor);
   }
})();
console.log(instructor); // imprime 3ro
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash"; 
    let pm = "Reverse Flash";
    console.log(instructor); //imprime1ro
    console.log(pm); //imprime2do
}
console.log(instructor);// imprime 3ro the flash
console.log(pm);//imprime franco por que let se usa una sola vez.
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //9px
"$" + 4 + 5 //$45
"4" - 2 //2
"4px" - 2 // NaN
7 / 0 //infinito
{}[0] //array[0]
parseInt("09") //9
5 && 2 //2
2 && 5 //5
5 || 0 //5
0 || 5 //5
[3]+[3]-[10] //23
3>2>1 //(3>2 seria como 1) entonces da falso
[] == ![] //true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // undefinded
   console.log(foo()); //imprime 2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);
```
// variables diferentes con el mismo nombre

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
```
//
### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1); //imprime 1ro
   setTimeout(function() { console.log(2); }, 1000);//imprime 5to despues de un seg
   setTimeout(function() { console.log(3); }, 0); //imprime 4to
   console.log(4);//imprime 2o
}

printing(); //imprime 3ro indefinded
```
