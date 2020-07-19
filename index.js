import { Cliente } from "./Cliente.js"
import { contaCorrente } from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233309)
const cliente2 = new Cliente("Alice", 88833366609)

const contaCorrenteRicardo = new contaCorrente(cliente1, 1001)
const conta2 = new contaCorrente(cliente2, 1002)

contaCorrenteRicardo.depositar(500)
contaCorrenteRicardo.transferir(200, conta2)

console.log(contaCorrenteRicardo)
console.log(contaCorrente.numeroContas)