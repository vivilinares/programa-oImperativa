let json = {
    "nome": "Marcos",
    "sobrenome": "Santana",
    "idade": 25,
    "teste": "teste",
    "amor": ["bit", "bituca", "batatinha"],
}
console.log(json.teste)

//
console.log ("---exercicio ao vivo----")
let cadastro = {
    "nome": "Viviane",
    "apelido": "Vivi",
    "idade": 30,
    "usuário": "vivuxa82",
    "email": "davivilinares@gmail.com",

}

console.log(cadastro.email)


let Carro ={
    cor: "azul",
    andar: function(velocidade){
        return "Andando na velocidade"+velocidade;
    }
}
console.log(Carro);

let Esporte = {
    turno: "dia",
    fazer: function(modalidade){
        return "Praticar todos os dias"+ " " + modalidade;
    }
}
console.log(Esporte.fazer("Muay Thai"));


let Comida = {
    alimento: "carne",
    forma: "assada",
    cozinhar: function(){
        console.log ("Vamos comer essa:" + this.alimento + " " +  this.forma);
    }
}
Comida.cozinhar();

