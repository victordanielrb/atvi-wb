import Entrada from "../io/entrada";
import Carrinho from "../modelo/carrinho";
import Empresa from "../modelo/empresa"
import Produto from "../modelo/produto";
import CadastroCliente from "../negocio/cadastroCliente";
import ListagemClientes from "../negocio/listagemClientes";
import editar from "../negocio/editarDado";

import Registro from "../modelo/registro";
console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
var empresa = new Empresa()
let execucao = true
var produtos = empresa.getProdutos
var carrinho = new Carrinho(empresa.getClientes)
var entrada = new Entrada()
var registro = new Registro(produtos,empresa.getClientes)

var editardado = new editar()
while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cliente (Cadastro, Edição de dados e deleção de dados) `);
    console.log(`2 - Produto (Cadastro, Edição de dados e deleção de dados) `);
    console.log("3- Relatório de vendas");
    console.log(`4 - Registrar venda`);
    console.log(`5 - Finalizar compra`);
    console.log(`6 - Listagem de clientes`);
    console.log(`7 - Listagem de produtos`);
    console.log(`0 - Sair`);
  

    ;
    
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção:  `)

    switch (opcao) {
        case 1:
            
            console.log("1 - para cadastrar um cliente \n2 - para editar os dados de um cliente \n3 - para deletar um cliente \n");
            
            let opcaocad = entrada .receberNumero("Escolha um opção: \n")
            switch(opcaocad){
                case 1:
                    let cadastro = new CadastroCliente(empresa.getClientes)
                     cadastro.cadastrar()
                    console.log(`Cliente cadastrado com sucesso!`);
                   

                    break;
                case 2:
                    
                    let cpf = entrada.receberTexto("Digite o CPF do cliente que deseja editar: \n")
                    let cliente = empresa.getClientes.find(cliente => cliente.getCpf.getValor == cpf)
                    let index = empresa.getClientes.findIndex(cliente => cliente.getCpf.getValor == cpf)
                    if (cliente == undefined) {
                        console.log(`Cliente não encontrado`)
                    }
                    else {
                        cliente = editardado.editarCliente(cliente)
                        empresa.getClientes[index] = cliente
                    }
                    break;
                
                case 3:
                    console.log("Digite o CPF do cliente que deseja deletar: \n");
                    
                    let cpfDel = entrada.receberTexto("Cpf: ")
                    let indexDel = empresa.getClientes.findIndex(cliente => cliente.getCpf.getValor == cpfDel)
                    delete empresa.getClientes[indexDel]
                    
                    break;
                default : console.log(`Operação não entendida :(`)
            }   
            break;
        case 2:
                    console.log("1 - para cadastrar um produto \n2 - para editar os dados de um produto \n3 - para deletar um produto \n");
                    console.log("Escolha uma opção :");
                    
                    let opcaoProd = entrada.receberNumero('')
                    switch(opcaoProd){
                        case 1:
                            let nome = entrada.receberTexto("Digite o nome do produto : ")
                            let preco = entrada.receberNumero("Digite o preço do produto : ")
                            produtos.push(new Produto(nome,preco))
                            console.log(`Produto cadastrado com sucesso!`);
                            break;
                        case 2:
                            console.log("Digite o nome do produto que deseja editar");
                            
                            let nomeProd = entrada.receberTexto("nome do produto:")
                            let produto = produtos.find(produto => produto.getNome == nomeProd)
                            if (produto == undefined) {
                                console.log(`Produto não encontrado`)
                            }
                            else {
                                console.log("Digite o novo nome do produto : \n");
                                
                                let nome = entrada.receberTexto("Nome do produto:")
                                console.log("Digite o novo preço do produto : \n");
                                
                                let preco = entrada.receberNumero("Preço do produto")
                                let index = produtos.findIndex(produto => produto.getNome == nomeProd)
                                produtos[index].setPreco = preco
                                produtos[index].setNome = nome
                                
                                }
                                break
                        }
                    
                        break;
        case 3:
            console.log(`Relatório de vendas`)
            let entradaRel = new Entrada()
            let cpfRel = entradaRel.receberTexto("Digite o CPF do cliente : \n")
            let clienteRel = empresa.getClientes.find(cliente => cliente.getCpf.getValor == cpfRel)
            if (clienteRel == undefined) {
                console.log(`Cliente não encontrado`)
            }
            else {
                console.log(registro.getProdutos(cpfRel));
                
            }
            break;
        case 4:
            console.log(`Registrar venda`)
            
            let entradaVend = new Entrada()
           
            let nomeprod = entradaVend.receberTexto("Digite o nome do produto : \n") 
            let produtovend = produtos.find(produto => produto.getNome == nomeprod)
            let cpf = entradaVend.receberTexto("Digite o CPF do cliente : \n")
            let cliente = empresa.getClientes.find(cliente => cliente.getCpf.getValor == cpf)

            if (cliente == undefined ) {
                console.log(`Cliente não encontrado`)
            }
            else if (produtovend == undefined) {
                console.log(`Produto não encontrado`)
            }    
             else {
                carrinho.adicionarCarrinho(cpf,produtovend)
                console.log(`Produto adicionado ao carrinho`)
            }
            let sair = entradaVend.receberNumero("Digite 0 caso deseje sair, caso o contrario digite qualquer número \n")
            
            if (produtos.length == 0) {
                console.log(`Nenhum produto cadastrado`)
                break;
            }
            else if (sair == 0) {
                break;

            }
            
            
            break;
            
        case 5:
            console.log(`Finalizar compra`)
            let entradaFinVend = new Entrada()
            let cpfFin = entradaFinVend.receberTexto("Digite o CPF do cliente : \n")
            let clienteFin = empresa.getClientes.find(cliente => cliente.getCpf.getValor == cpfFin)
            if (clienteFin == undefined) {
                console.log(`Cliente não encontrado`)
            }
            else {
                registro.setProdutos(cpfFin,carrinho.getCarrinho(cpfFin))
                carrinho.finalizarCompra(clienteFin)
                
            }
            console.log('registro',registro.getProdutos(cpfFin));
            
            break;
        case 6:
            let listagem = new ListagemClientes(empresa.getClientes)
            console.log(`\n Listagem de clientes \n`);
            
            console.log("\n 1 - Listar por gênero \n 2 - Listar todos clientes  \n 0 - Sair");
            
            let opcao = entrada.receberNumero(`Escolha uma opção: \n`)
            switch (opcao) {
                case 2:  listagem.listarGenero(); break
                case 1:  listagem.listar(); break
                case 3:
                case 0: break;
                default: console.log(`Operação não entendida :(`)
            }
            
            
            break;
        case 7:
            
            console.log(`Listagem de produtos`)
            produtos.forEach(produto => {
                console.log(`Nome: ${produto.getNome} - Preço: ${produto.getPreco}`)
            });
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
}   }