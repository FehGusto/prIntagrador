import { Postagem } from './Postagem';

export class User {
  public id: number
  public nomeCompleto: string
  public emailUsuario: string
  public senhaUsuario: string
  public tipo: string
  public foto: string
  public postagem: Postagem[]
}
