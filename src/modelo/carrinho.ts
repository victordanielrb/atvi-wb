import Produto from "./produto";

import Cliente from "./cliente";
import CPF from "./cpf";
import carrinhoDict from "./carrinhoDict";

export default class Carrinho {
    private clientes: Array<Cliente> = []
    private carrinho: carrinhoDict = { } ;
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
       
    }

    public  getCarrinho(cpf:string){
        return this.carrinho[cpf]
    }
    public  getClientes(){ 
        Object.keys(this.carrinho).forEach(cpf => {
            console.log(`CPF: ` + cpf);
            console.log(`Produtos: \n` + this.carrinho[cpf]);
            console.log(`--------------------------------------`);
        })
    }

    public adicionarCarrinho(cpf:string, produto: Produto): void {
        if (this.carrinho[cpf] == undefined) {
            this.carrinho[cpf] = [];
        }
       this.carrinho[cpf].push(produto)
    }
    public finalizarCompra(cliente:Cliente): void {
        if (this.carrinho[cliente.getCpf.getValor] == undefined || this.carrinho[cliente.getCpf.getValor].length == 0) {
            console.log(`Nenhum produto adicionado!`);
            return;
        }
        console.log(`CPF do cliente: ${cliente.getCpf.getValor}`)
        console.log(`Produtos: \n`)
        this.carrinho[cliente.getCpf.getValor].forEach(produto => {
            console.log(`Nome: ${produto.nome}`)
            console.log(`Preço: ${produto.preco}`)
            console.log('-------------------');
            
        })
        
        cliente.getProdutosConsumidos.push(...this.carrinho[cliente.getCpf.getValor])
         this.carrinho[cliente.getCpf.getValor] = []
        console.log(`Compra finalizada com sucesso!`)
    }
}
