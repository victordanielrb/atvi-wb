import Entrada from "../io/entrada";
import Carrinho from "../modelo/carrinho";
import Empresa from "../modelo/empresa"
import Produto from "../modelo/produto";
import CadastroCliente from "../negocio/cadastroCliente";
import ListagemClientes from "../negocio/listagemClientes";
import editar from "../negocio/editarDado";
import Insert from "../modelo/insert";
import Registro from "../modelo/registro";
console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
var empresa = new Empresa()
var insert = new Insert(empresa)
insert.insertProdutos()
insert.insertClientes()
let execucao = true
var produtos = empresa.getProdutos
var carrinho = new Carrinho(empresa.getClientes)
var entrada = new Entrada()
var registro = new Registro(produtos,empresa.getClientes)

7



var editardado = new editar()
while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cliente (Cadastro, Edição de dados e deleção de dados) `);
    console.log(`2 - Produto (Cadastro, Edição de dados e deleção de dados) `);
    console.log("3- Relatório de vendas");
    console.log(`4 - Registrar venda`);
    console.log(`5 - Listagem de clientes`);
    console.log(`6 - Listagem de produtos`);
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
            console.log("1 - para listar todas as vendas \n2 - Relatório dos cliente \n3 - Relatório dos produtos \n ");
            
            let opcaoRel = entrada.receberNumero("Escolha um opção: \n")
            switch(opcaoRel){
                case 1:
                    registro.listarVendas(registro)
                    break;
                case 2:
                    console.log("Clientes : \n");
                    console.log("1 -Top 10 clientes que mais consumiram produtos (Em quantidade) \n2 - Top 5 clientes que mais consumiram produtos (Em valor) \n3 - Top 10 clientes que menos consumiram produtos \n");
                    
                    let opcaoRelCli = entrada.receberNumero("Escolha um opção: \n")
                    switch(opcaoRelCli){
                        case 1:
                            let mais = registro.topQtdClientes(registro)["mais"]
                            for (let i = 0; i < 9; i++) {
                                if (mais.values().next().value == 0) {
                                    console.log(`Nenhum produto vendido \n`)
                                    break
                                }
                                if (empresa.getClientes.find(cliente => cliente.getCpf.getValor == mais.keys().next().value) == undefined) {
                                    console.log(`Nenhum produto vendido \n`)
                                    break
                                }
                                console.log(` ${i}° lugar : \n Nome do cliente : ${empresa.getClientes.find(cliente => cliente.getCpf.getValor == mais.keys().next().value).getNome} \nCpf do cliente: " + ${mais.keys().next().value} \n  Quantidade de produtos: ${mais.values().next().value}`);
                                mais.delete(mais.keys().next().value);
                            }
                            break;
                        case 2:
                            let menos = registro.topQtdClientes(registro)["menos"]
                            if (menos.values().next().value == undefined ) {
                                console.log(`Nenhum produto vendido`)
                                break
                            }
                            for (let i = 0; i < 4; i++) {
                                console.log(` ${i}° lugar : \n Nome do cliente : ${empresa.getClientes.find(cliente => cliente.getCpf.getValor == menos.keys().next().value).getNome} \nCpf do cliente: " + ${menos.keys().next().value} \n  Quantidade de produtos: ${menos.values().next().value}`);
                                menos.delete(menos.keys().next().value);
                            }
                            break;
                        case 3:
                            let clivalor = registro.topValorClientes(registro)
                            for (let i = 0; i < 4; i++) {
                                if (clivalor.values().next().value == undefined) {
                                    console.log(`Nenhum produto vendido`)
                                    break
                                }
                                console.log(`${i}° lugar : \n Nome do cliente : ${empresa.getClientes.find(cliente => cliente.getCpf.getValor == clivalor.keys().next().value).getNome} \nCpf do cliente: " + ${clivalor.keys().next().value} \n  Quantidade de produtos: ${clivalor.values().next().value}`);
                                clivalor.delete(clivalor.keys().next().value);
                            }
                            break;
                        default : console.log(`Operação não entendida :(`)
                    }
                    break;
                case 3:
                    console.log("1- Top 10 produtos mais vendidos \n2 - Top 5 produtos por gênero \n");
                    let opcaoRelProd = entrada.receberNumero("Escolha um opção: \n")
                    switch(opcaoRelProd){
                        case 1:
                            let topprod = registro.topQtdProdutos(registro)
                        for (let i = 0; i < 10; i++) {
                            if (topprod.values().next().value == 0) {
                                console.log(`Nenhum produto vendido`)
                                break}

                            console.log(` ${i}° lugar : \n Nome do produto : ${topprod.keys().next().value} \n  Quantidade de produtos: ${topprod.values().next().value}`);
                            topprod.delete(topprod.keys().next().value);
                        }
                        break;
                        case 2:
                            console.log("Produtos por gênero : \n");
                            let prodgen = registro.topProdGenero(registro)
                            
                            console.log("Masculino \n");
                            
                            for (let i = 0; i < 10; i++) {
                                if (prodgen['masculino'].values().next().value == 0) {
                                    console.log(`Nenhum produto vendido`);
                                    break;
                                    
                                }
                                console.log(`${i}° lugar : \n Nome do produto : ${prodgen['masculino'].keys().next().value} \n  Quantidade de produtos: ${prodgen['masculino'].values().next().value}`);
                                prodgen['masculino'].delete(prodgen['masculino'].keys().next().value);
                            }
                            console.log("\n Feminino \n");
                            for (let i = 0; i < 10; i++) {
                                if (prodgen['feminino'].values().next().value == 0) {
                                    console.log(`Nenhum produto vendido`);
                                    break;
                                    
                                }
                                console.log(`${i}° lugar : \n Nome do produto : ${prodgen['feminino'].keys().next().value} \n  Quantidade de produtos: ${prodgen['feminino'].values().next().value}`);
                                prodgen['feminino'].delete(prodgen['feminino'].keys().next().value);
                            }
                            console.log("\n Outro \n");
                            for (let i = 0; i < 10; i++) {
                                if (prodgen['outro'].values().next().value == 0) {
                                    console.log(`Nenhum produto vendido`);
                                    break;
                                }
                                console.log(`${i}° lugar : \n Nome do produto : ${prodgen['outro'].keys().next().value} \n  Quantidade de produtos: ${prodgen['outro'].values().next().value}`);
                                prodgen['outro'].delete(prodgen['outro'].keys().next().value);
                            }
                            break;
                        
                       
                        }
                        
                default : console.log(`Operação não entendida :(`)
                break;
            }
            break;
        case 4:
            console.log(`Registrar venda`)
            
            let entradaVend = new Entrada()
            let cpf = entradaVend.receberTexto("Digite o CPF do cliente : \n")
            let cliente = empresa.getClientes.find(cliente => cliente.getCpf.getValor == cpf)
            let nomeprod = entradaVend.receberTexto("Digite o nome do produto : \n") 
            let produtovend = produtos.find(produto => produto.getNome == nomeprod)
            if (cliente == undefined ) {
                console.log(`Cliente não encontrado`)
                break
            }
            else if (produtovend == undefined) {
                console.log(`Produto não encontrado`)
                break
            }    
             else {
                carrinho.adicionarCarrinho(cpf,produtovend)
                console.log(`Produto adicionado ao carrinho`)
            }
            
            let opcaoVend = entradaVend.receberNumero("Deseja adicionar mais produtos? \n1 - Sim \n2 - Não \n")
            switch(opcaoVend){
                case 1:
                    while (opcaoVend == 1) {
                        let nomeprod = entradaVend.receberTexto("Digite o nome do produto : \n") 
                        let produtovend = produtos.find(produto => produto.getNome == nomeprod)
                        if (produtovend == undefined) {
                            console.log(`Produto não encontrado`)
                            
                        }    
                        else {
                            carrinho.adicionarCarrinho(cpf,produtovend)
                            console.log(`Produto adicionado ao carrinho`)
                        }
                        opcaoVend = entradaVend.receberNumero("Deseja adicionar mais produtos? \n1 - Sim \n2 - Não \n")
                    }
                case 2:
                    registro.setProdutos(cpf,carrinho.getCarrinho(cpf))
                    carrinho.finalizarCompra(cliente)
                    break;
                default : console.log(`Operação não entendida :(`)
            }
            

           
           
            
            break;
            
        
        case 5:
            let listagem = new ListagemClientes(empresa.getClientes)
            console.log(`\n Listagem de clientes \n`);
            
            console.log("\n 1 - Listar por gênero \n 2 - Listar todos clientes  \n 0 - Sair");
            
            let opcao = entrada.receberNumero(`Escolha uma opção: \n`)
            switch (opcao) {
                case 1:  listagem.listarGenero(); break
                case 2:  listagem.listar(); break
                
                case 0: break;
                default: console.log(`Operação não entendida :(`)
            }
            
            
            break;
        case 6:
            
            console.log(`Listagem de produtos \n___________________________\n`)
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

        } 
       }
