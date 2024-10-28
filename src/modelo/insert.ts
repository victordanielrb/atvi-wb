/**Inserrir 30 produtos e 20 clientes */
import Empresa from "./empresa";
import Produto from "./produto";
import Cliente from "./cliente";
import CPF from "./cpf";
export default class Insert {
    private empresa: Empresa;
    private produtos: Array<Produto> = [];
    private clientes: Array<Cliente>;
     private cpf: CPF;
    constructor(empresa: Empresa){
        this.empresa = empresa;
    };
    public insertProdutos(){
        for (let i = 0; i < 30; i++) {
            this.produtos.push(new Produto(`produto${i}`, i + 1));
        }
        this.empresa.setProdutos = this.produtos;
    };
    public insertClientes(){
        this.clientes = [];
        for (let i = 0; i < 10; i++) {
        this.cpf = new CPF(`cpf${i}`, new Date(2020, 1, 1));
            this.clientes.push(new Cliente(`cliente${i}`,`nomesocial${i}`, `masculino`,this.cpf));
        }
        for (let i = 11; i < 20; i++) {
            this.cpf = new CPF(`cpf${i}`, new Date(2020, 1, 1));
                this.clientes.push(new Cliente(`cliente${i}`,`nomesocial${i}`, `feminino`,this.cpf));
            }
        this.empresa.setClientes = this.clientes;
    };
   
};