//Criamos uma estrutura de função construtora 

let Contas= function(num,tipo,saldo,titular){
    this.num = num;
    this.tipo = tipo;
    this.saldo= saldo;
    this.titular = titular;

}

let user1 = new Contas(2545, "Corrente", 1500, "Marcos Santana");
console.log(user1);

    let cliente = [
        {
            "número": 159357,
            "tipo": "corrente",
            "saldo": 2700,
            "titular": "Vivi"
        },
        {
            "número": 159357,
            "tipo": "corrente",
            "saldo": 800,
            "titular": "Ever"
        }
    
    ]

    console.log(cliente[1].saldo);

let user1 = new Contas(clientes[1].conta, clientes[1].tipoConta, clientes[1].saldo, clientes[1].titular)

console.log(user1);
 