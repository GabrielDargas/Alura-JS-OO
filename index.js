class cliente {
    nome;
    cpf;
}

class contaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if (this.saldo > valor) {
            this.saldo -= valor
        }
    }
}
    const cliente1 = new cliente()
    cliente1.nome = "Ricardo"
    cliente1.cpf = 11122233309

    const cliente2 = new cliente()
    cliente2.nome = "Alice"
    cliente2.cpf = 88833366609

    const contaCorrenteRicardo = new contaCorrente()
    contaCorrenteRicardo.saldo = 0
    contaCorrenteRicardo.agencia = 1001
    console.log(contaCorrenteRicardo.saldo)

    contaCorrenteRicardo.saldo += 100
    contaCorrenteRicardo.sacar(50)



    console.log(contaCorrenteRicardo.saldo)
    console.log(cliente1, cliente2)