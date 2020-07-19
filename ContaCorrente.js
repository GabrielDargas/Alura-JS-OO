export class contaCorrente {
    agencia;
    //a convenção usa atualmente _saldo. Porém está rolando uma discussão para se tornar #
    #saldo = 0;
    sacar(valor) {
        if (this.#saldo > valor) {
            this.#saldo -= valor
            return valor
        }
    }
    depositar(valor) {
        if (valor <= 0) {
            return
        }
        this.#saldo += valor

    }
}