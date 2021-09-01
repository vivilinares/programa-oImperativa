console.log ("----------EXERCÍCIO ARRAYS------");

let numbers =[22,33,54,66,72];
console.log (numbers[numbers.length -3]);
//r: indefinido


//ex.2
let grupoDeAmigos = [["Harry", "Ron", "Hermione"],["Spiderman", "Hulk","Ironman"], ["Penélope Glamour", "Pierre Nodoyuna", "Patán"]]
console.log(grupoDeAmigos[1][0])
//r: Spiderman 


//ex.3
let str = "una string qualquer"
let grupoDeAmigoss = [[45,89,0], ["Digital", "House", true], ["string", "123", "false", 54, true, str]]
console.log (grupoDeAmigoss[2][grupoDeAmigoss[2].length-1])
//r: Una string qualquer


//ex.4 
var myArray = ["azul", "verde", "amarelo"];
    var arrayUm = myArray.slice(0).reverse();
    console.log(arrayUm);
    console.log(myArray);

//ex.5 
var total=0
var numeros =[1,2,3];
for (var i =0; i <numeros.length; i++){
    total += numeros[i];
}
console.log(total);

var total=0
var numeros =[10,3,10,4];
for (var i =0; i <numeros.length; i++){
    total += numeros[i];
}
console.log(total);

var total=0
var numeros =[-5,100];
for (var i =0; i <numeros.length; i++){
    total += numeros[i];
}
console.log(total);

//ex.6
function join(array) {
    let palavra = ''
    for (let i = array.length; i >= 1 ; i--) {
    palavra = palavra + array[array.length - i]
    }
    console.log(palavra)
    }
    
    join(['v', 'i', 'v', 'i', 'a', 'n', 'e'])

    
//ex.7
let catalago1 = ["star wars", "matrix", "mr.robot", "o preço do amanhã", "a vida é bela"];
console.log(catalago1[0]);
let catalago2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

let catalagoUp = [];
for (let i = 0; i < catalago1.length; i++){
 catalagoUp[i] = catalago1[i].toUpperCase();
}

console.log(catalagoUp);

let listaCompleta = [catalago1 + "," + catalago2];
    console.log(listaCompleta);

let game = catalago2.pop();
    console.log(game);

const asiaScores = [8,10,6,9,10,6,7,8,4];
const euroScores = [8,10,6,8,10,6,7,9,5];
function comparaScore() {
    let comparar = asiaScores === euroScores;
    console.log ("Notas comparadas retornou"+ " // " + comparar + ".");

}
comparaScore();




