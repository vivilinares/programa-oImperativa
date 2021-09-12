console.log(!true) //false pq tem o invertor
console.log(!false) //true pq tem o invertor
console.log(!!false) //foi true e depois virou FALSE pq tem o invertor 2x
console.log(!!true) //foi false e depois virou TRUE pq tem o invertor 2x


//LEGENDA DE APRENDIZADO//
//lembrando que toda string vazia é falsa, toda string com zero é falsa
//lembrando qeu toda string com conteúdo é verdadeira, toda sring com número é verdadeira
//em operadores lógicos && somente verdadeiro, se tudo for verdadeiro
//em opereadores lógicos || somente falso, se tudo for falso se tiver ou verdadeiro, vai ser vedadeiro

console.log(!1) // true - false 
console.log(!!1) //true - false - true 
console.log(!0) //false- true
console.log(!!0) //false - true - false
console.log(!!"") //false - true - false

console.log('DIVISAO')

var x = 5;
var y = 9;

console.log (x < 10 && x !==5)
//true && true invertor para false // resultado =  false 

console.log (x>9 || x===5)
//false || true // resultado = true 

console.log (! (x===y)) 
//false e com o invertor vira true 

console.log ('Exercício 2')

var x = 10 
var y = "a"
console.log (y==="b" || x> - 10);
// false || true // resultado = true 

var x = 3 
var y = 8
console.log (! (x== "3" || x=== y) &&! (y !== 8 && x <=y ));
// true  &&   ! (false && true) \\ true && ! (false) \\ true & false \\ false 

var str = "" 
var msg = "haha!"
var eBonito = "false"

console.log (! ( (str || msg) && eBonito) );
// ! (true && true) = ! true = false






