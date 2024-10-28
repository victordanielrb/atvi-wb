import Cliente from "../modelo/cliente";

import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes: \n`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`--------------------------------------
                \n `);
        });
        console.log(`\n`);
    }
    public listarGenero(): void {
         let generos = {
          'masculino': [] as Array<Cliente>,
            'feminino': [] as Array<Cliente>,
            'outro': [] as Array<Cliente>
         };
         this.clientes.forEach(cliente => {
            if (cliente.getGenero === "1"|| cliente.getGenero === "masculino") {
                
                
                generos.masculino.push(cliente);
            } else if (cliente.getGenero === "2" || cliente.getGenero === "feminino") {
                generos.feminino.push(cliente);
            }
            else {
                
                generos.outro.push(cliente);
            }
         });
         
         
        Object.keys(generos).forEach(genero => {
            console.log(`\nGênero: ` + genero+'\n');
            generos[genero].forEach(cliente => {
                console.log(`Nome: ` + cliente.nome);
                console.log(`Nome social: ` + cliente.nomeSocial);
                console.log(`CPF: ` + cliente.getCpf.getValor);
                console.log(`-------------------------------------- \n`);})
        });
        console.log(`\nLista de todos os clientes por gênero:`);
        console.log(`\n`);
    }
}