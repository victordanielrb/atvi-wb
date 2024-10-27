
import Produto from "./produto";

interface carrinhoDict  {
    [cpf: string]: Array<Produto>  ;
}
export default carrinhoDict;