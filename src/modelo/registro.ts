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

    public listarVendas(registro:Registro): void {
        Object.keys(registro).forEach(cpf => {
            console.log(`CPF: ` + cpf);
            console.log(`Produtos: \n`);
            this.registro[cpf].forEach(produto => {
                console.log(`Nome: ${produto.getNome}`);
                console.log(`Preço: ${produto.getPreco}`);
                console.log('-------------------');
            });
            
        });
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
    public topQtdClientes(registro:Registro) {
        let topclientes = new Map<string, number>([]);
        Object.keys(registro.registro).forEach(cpf => {
            topclientes.set(cpf, registro.registro[cpf].length);
        });
         let topclientessort = new Map([...topclientes.entries()].sort());
         let menosclientes = new Map([...topclientes.entries()].sort().reverse());
         return {mais: topclientessort, menos: menosclientes};
        }
    public topValorClientes(registro:Registro) {
        let topclientes = new Map<string, number>([]);
        Object.keys(registro.registro).forEach(cpf => {
            let valor = 0;
            registro.registro[cpf].forEach(produto => {
                valor += produto.getPreco;
            });
            topclientes.set(cpf, valor);
        });
        let topclientessort = new Map([...topclientes.entries()].sort());
        return topclientessort;
    }
    public topQtdProdutos(registro:Registro) {
        let topprodutos = new Map<string, number>([]);
        registro.produtos.forEach(produto => {
            let qtd = 0;
            Object.keys(registro.registro).forEach(cpf => {
                registro.registro[cpf].forEach(produto2 => {
                    if (produto.getNome == produto2.getNome) {
                        qtd += 1;
                    }
                });
            });
            topprodutos.set(produto.getNome, qtd);
        });
        let topprodutossort = new Map([...topprodutos.entries()].sort());
        return topprodutossort;
    }
    public topProdGenero(registro:Registro) {
        let topgenero = {};
        registro.produtos.forEach(produto => {
            let gencounter = {"masculino": 0, "feminino": 0, "outro": 0};
            Object.keys(registro.registro).forEach(cpf => {
                let genero = registro.clientes.find(cliente => cliente.getCpf.getValor == cpf).getGenero;
                registro.registro[cpf].forEach(produto2 => {
                    if (produto.getNome == produto2.getNome) {
                        gencounter[genero] += 1;
                    }
                });
            });
            topgenero[produto.getNome] = gencounter;
        });
        let masc = new Map<string, number>([]);
        let fem = new Map<string, number>([]);
        let out = new Map<string, number>([]);
        Object.keys(topgenero).forEach(produto => {
            
            topgenero[produto]["masculino"] !== undefined ? masc.set(produto, topgenero[produto]["masculino"]): masc.set(produto, 0);
            topgenero[produto]["feminino"] !== undefined ? fem.set(produto, topgenero[produto]["feminino"]): fem.set(produto, 0);
            topgenero[produto]["outro"] !== undefined ? out.set(produto, topgenero[produto]["outro"]): out.set(produto, 0);
            
        });
        let mascsort = new Map([...masc.entries()].sort());
        let femsort = new Map([...fem.entries()].sort());
        let outsort = new Map([...out.entries()].sort());
        return {masculino: mascsort, feminino: femsort, outro: outsort};
    }
    
}   