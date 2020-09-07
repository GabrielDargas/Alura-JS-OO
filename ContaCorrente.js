import {Cliente} from  "./Cliente.js"

export class contaCorrente {
    static numeroContas = 0 


    set cliente (novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor
        }
    }

    get cliente(){
        return this._cliente
    }
    //a convenção usa atualmente _saldo. Porém está rolando uma discussão para se tornar #

    get saldo(){
        return this._saldo
    }

    constructor(cliente, agencia){
        this.agencia = agencia
        this.cliente = cliente
        contaCorrente.numeroContas += 1
        this._saldo = 0;
    }

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

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }

}