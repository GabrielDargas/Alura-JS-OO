import { Cliente } from "./Cliente.js"
import {Gerente} from "./Funcionarios/Gerente.js"
import {Diretor} from "./Funcionarios/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor = new Diretor("Rodrigo", 10000, 12345678900)
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Ricador", 5000, 294802020100)
const cliente = new Cliente("Lais", 1501516030, "456")

const estaLogado = SistemaAutenticacao.login(diretor, "123456")
console.log(estaLogado)
const clienteLogado = SistemaAutenticacao.login(cliente, "5645")
console.log(clienteLogado)