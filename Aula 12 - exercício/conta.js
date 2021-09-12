
//criação de objeto literal para utilização de cadastro dos usuários
//lembrando que objeto aceita, string, boleano, número, array e é diferente do Jason

let Conta = function (num, tipo, saldo, titular) {
  this.numero = num;
  this.tipo = tipo;
  this.saldo = saldo;
  this.titular = titular;
}

//tabela transformada em Json para simular em banco de dados (segundo aula reforço isso poderia estar em arquivo extra)

let clientes = [
  {
    "conta": "5486273622",
    "tipoConta": "Conta Corrente",
    "saldo": 27771,
    "titular": "Abigael Natte",
  },
  {
    "conta": "1183971869",
    "tipoConta": "Conta Poupança",
    "saldo": 8675,
    "titular": "Ramon Connell",
  },
  {
    "conta": "9582019689",
    "tipoConta": "Conta Poupança",
    "saldo": 27363,
    "titular": "Jarret ente",
  },
  {
    "conta": "1761924656",
    "tipoConta": "Conta Poupança",
    "saldo": 32415,
    "titular": "Ansel Ardley",
  },
  {
    "conta": "7401971607",
    "tipoConta": "Conta Poupança",
    "saldo": 18789,
    "titular": "Jacki Shurmer",
  },
  {
    "conta": "630841470",
    "tipoConta": "Conta Corrente",
    "saldo": 28776,
    "titular": "Jobi Mawtus",
  },
  {
    "conta": "4223508636",
    "tipoConta": "Conta Corrente",
    "saldo": 2177,
    "titular": "Thomasin Latour",
  },
  {
    "conta": "185979521",
    "tipoConta": "Conta Poupança",
    "saldo": 25994,
    "titular": "Lonnie eijden",
  },
  {
    "conta": "3151956165",
    "tipoConta": "Conta Corrente",
    "saldo": 7601,
    "titular": "Alonso Wannan",
  },
  {
    "conta": "2138105881",
    "tipoConta": "Conta Poupança",
    "saldo": 33196,
    "titular": "Bendite Huggett",
  },
];

//fazer uma lista de objetos (cadastro dos clientes)
let listaContas = [];
for (let i = 0; i < clientes.length; i++) {
  listaContas.push(new Conta(clientes[i].conta,clientes[i].tipoConta,clientes[i].saldo,clientes[i].titular));
}

