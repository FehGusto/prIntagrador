import { Tema } from 'src/app/model/Tema';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from './../../../environments/environment.prod';
import { PostagensService } from './../../service/postagens.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Postagem } from './../../model/Postagem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postagem-delete',
  templateUrl: './postagem-delete.component.html',
  styleUrls: ['./postagem-delete.component.css']
})
export class PostagemDeleteComponent implements OnInit {

  postagem: Postagem = new Postagem()
  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number
  idPost: number

  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private postagemService: PostagensService,
    private temaService: TemaService
  ) { }

  ngOnInit() {

    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['entrar'])
    }

    this.idPost = this.route.snapshot.params['id']
    this.findByIdPostagem(this.idPost)

  }

  findByIdPostagem(id: number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem = resp
    })
  }



  apagar(){
    this.postagemService.deletePostagem(this.idPost).subscribe(() =>{
      alert('Deletado com sucesso!')
      this.router.navigate(['/inicio'])
    })
  }

}
