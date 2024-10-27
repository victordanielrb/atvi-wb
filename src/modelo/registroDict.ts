
import Produto from "./produto";
interface registroDict  {
    [cpf: string]: Array<Produto>  ;
}
export default registroDict;