import { Tema } from './Tema';
import { User } from './User';

export class Postagem {
  public idPost: number
  public categoriaEstabelecimento: string
  public tipoEstabelecimento: string
  public comentario: string
  public avaliacao: number
  public usuario: User
  public tema: Tema
}
