import Produto from "./produto";
import Cliente from "./cliente";
import registroDict from "./registroDict";
export default class Registro {
    private produtos: Array<Produto>
    private clientes: Array<Cliente>
    private registro: registroDict = {}
    constructor(produtos: Array<Produto>, clientes: Array<Cliente>) {
        this.produtos = produtos
        this.clientes = clientes
    }

    public  getProdutos(cpf:string) {
        return this.registro[cpf]
    }
    public  setProdutos(cpf:string, produtos: Array<Produto>): void {
        if (this.registro[cpf] == undefined) {
            this.registro[cpf] = [];
        }
        produtos.forEach(produto => {
            this.registro[cpf].push(produto);
        });
    }
    public get getClientes(): Array<Cliente> {
        return this.clientes
    }
}