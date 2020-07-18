class cliente {
    nome;
    cpf;
}

class contaCorrente {
    agencia;
    //a convenção usa atualmente _saldo. Porém está rolando uma discussão para se tornar #
    #saldo = 0;
    sacar(valor) {
        if (this.#saldo > valor) {
            this.#saldo -= valor
            return valor
        }
    }
    depositar(valor){
        if(valor <= 0){ 
           return
        }
        this.#saldo += valor

    }
}
    const cliente1 = new cliente()
    cliente1.nome = "Ricardo"
    cliente1.cpf = 11122233309

    const cliente2 = new cliente()
    cliente2.nome = "Alice"
    cliente2.cpf = 88833366609

    const contaCorrenteRicardo = new contaCorrente()
    contaCorrenteRicardo.agencia = 1001
 
    contaCorrenteRicardo.depositar(100)
    const valorSacado = contaCorrenteRicardo.sacar(50)
    console.log(valorSacado)

    console.log(contaCorrenteRicardo)