import { AuthService } from './../service/auth.service';
import { User } from './../model/User';
import { environment } from './../../environments/environment.prod';
import { Tema } from './../model/Tema';
import { TemaService } from './../service/tema.service';
import { PostagensService } from './../service/postagens.service';
import { Router } from '@angular/router';
import { Postagem } from './../model/Postagem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incio',
  templateUrl: './incio.component.html',
  styleUrls: ['./incio.component.css']
})
export class IncioComponent implements OnInit {

  tema : Tema = new Tema()
  postagem : Postagem = new Postagem()
  listaPostagens : Postagem[]

  listaTemas : Tema[]
  idTema : number
  user : User = new User()
  idUser = environment.id

  constructor(
    private router: Router,
    private postagensService: PostagensService,
    private temaService: TemaService,
    private authService: AuthService
  ) { }

  ngOnInit() {

    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['entrar'])
    }

    this.getAllTemas()
    this.getAllPostagens()
  }

  getAllTemas() {
    this.temaService.getAlltema().subscribe((resp: Tema[]) =>{
      this.listaTemas = resp
    })
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) =>{
      this.tema = resp
    })
  }

  getAllPostagens(){
    this.postagensService.getAllPostagens().subscribe((resp: Postagem[]) =>{
      this.listaPostagens = resp
    })
  }

  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: User) => {
      this.user = resp
    })
  }


  publicar() {
    this.tema.idTema = this.idTema
    this.postagem.tema = this.tema

    this.user.id = this.idUser
    this.postagem.usuario = this.user

    this.postagensService.postPostagens(this.postagem).subscribe((resp: Postagem) =>{
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagens()
    })
  }

}
