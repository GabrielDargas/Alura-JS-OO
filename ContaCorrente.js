export class contaCorrente {
    agencia;
    cliente;

    //a convenção usa atualmente _saldo. Porém está rolando uma discussão para se tornar #
    _saldo = 0;
    

    sacar(valor) {
        if (this._saldo > valor) {
            this._saldo -= valor
            return valor
        }
    }
    depositar(valor) {
        if (valor <= 0) {
            return
        }
        this._saldo += valor
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }

}