import Cliente from "../modelo/cliente"
import Produto from "../modelo/produto"
import Entrada from "../io/entrada";
export default class editar {
    public editarCliente(Dado : Cliente ) {
        
            let entrada = new Entrada();
            let nome = entrada.receberTexto("Digite o novo nome do cliente: \n")
            let nomeSocial = entrada.receberTexto("Digite o novo nome social do cliente: \n")
            let cpf = entrada.receberTexto("Digite o novo CPF do cliente: \n")
            let genero = entrada.receberTexto("Digite o novo gênero do cliente: \n")
            Dado.setNome = nome
            Dado.setNomeSocial = nomeSocial
            Dado.setCpf = cpf
            Dado.setGenero = genero
                
            console.log(`Cliente editado com sucesso!`);
        return Dado
    
}
public editarProduto(Dado : Produto) {
    let entrada = new Entrada();
    let nome = entrada.receberTexto("Digite o novo nome do produto: \n")
    let preco = entrada.receberNumero("Digite o novo preço do produto: \n")
    Dado.setNome = nome
    Dado.setPreco = preco
    console.log(`Produto editado com sucesso!`);
    return Dado
}




}