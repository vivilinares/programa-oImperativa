
//criação de objeto literal para utilização de cadastro dos usuários
//lembrando que objeto aceita, string, boleano, número, array e é diferente do Jason

let Conta = function (num, tipo, saldo, titular) {
    this.numero = num;
    this.tipo = tipo;
    this.saldo = saldo;
    this.titular = titular;
    }

//usar JSON para armazenar os dados dos clientes (segundo aula reforço isso poderia estar em arquivo extra)

let clientes = [
  {
    conta: "5486273622",
    tipoConta: "Conta Corrente",
    saldo: 27771,
    titular: "Abigael Natte",
  },
  {
    conta: "1183971869",
    tipoConta: "Conta Poupança",
    saldo: 8675,
    titular: "Ramon Connell",
  },
  {
    conta: "9582019689",
    tipoConta: "Conta Poupança",
    saldo: 27363,
    titular: "Jarret ente",
  },
  {
    conta: "1761924656",
    tipoConta: "Conta Poupança",
    saldo: 32415,
    titular: "Ansel Ardley",
  },
  {
    conta: "7401971607",
    tipoConta: "Conta Poupança",
    saldo: 18789,
    titular: "Jacki Shurmer",
  },
  {
    conta: "630841470",
    tipoConta: "Conta Corrente",
    saldo: 28776,
    titular: "Jobi Mawtus",
  },
  {
    conta: "4223508636",
    tipoConta: "Conta Corrente",
    saldo: 2177,
    titular: "Thomasin Latour",
  },
  {
    conta: "185979521",
    tipoConta: "Conta Poupança",
    saldo: 25994,
    titular: "Lonnie eijden",
  },
  {
    conta: "3151956165",
    tipoConta: "Conta Corrente",
    saldo: 7601,
    titular: "Alonso Wannan",
  },
  {
    conta: "2138105881",
    tipoConta: "Conta Poupança",
    saldo: 33196,
    titular: "Bendite Huggett",
  },
];

//fazer uma lista de objetos (cadastro dos clientes)
let listaContas = [];
for (let i = 0; i < clientes.length; i++) {
  listaContas.push(new Conta(clientes[i].conta,clientes[i].tipoConta,clientes[i].saldo,clientes[i].titular));
}

//criação de objeto literal Banco para conseguir pesquisar o cliente, mostrar o depósito e saque.

let Banco = {
  clientes: listaContas,
  consultarCliente: function (nome) {
        for (index in listaContas){
            if (listaContas[index].titular == nome) {
                return listaContas[index];
            }
        }
        return "Cliente não encontrado!";
    },
    deposito: function (nome, valorDeposito){
        for (index in listaContas){
            if (listaContas[index].titular == nome) {
                listaContas[index].saldo = listaContas[index].saldo+valorDeposito;
                return ("Deposito realizado, seu novo saldo é R$"+ listaContas[index].saldo);
            }
        }
    },
    saque: function (nome, valorSaque){
        for (index in listaContas){
            if (listaContas[index].titular == nome) 
                if (listaContas[index].saldo > valorSaque){
                    let extracao = (listaContas[index].saldo-valorSaque);
                    return "Extração feita com sucesso, seu novo saldo é "+extracao;
                }
                else {
                    return "Fundos insuficientes"
                }

        }
    }


}

console.log(Banco.consultarCliente("Lonnie eijden"));
console.log(Banco.deposito("Lonnie eijden", 100))
console.log(Banco.saque("Lonnie eijden", 300))
