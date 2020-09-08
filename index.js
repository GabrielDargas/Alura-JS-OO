import { Cliente } from "./Contas/Cliente.js"
import { ContaCorrente } from "./Contas/ContaCorrente.js"
import { ContaPoupanca } from "./Contas/ContaPoupanca.js"

const cliente1 = new Cliente("Ricardo", 11122233309)

const contaCorrenteRicardo = new ContaCorrente(0, cliente1, 1001)

contaCorrenteRicardo.depositar(500)
contaCorrenteRicardo.sacar(100)

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)

console.log(contaPoupanca)
console.log(contaCorrenteRicardo)