import { TemaService } from './../../service/tema.service';
import { Tema } from 'src/app/model/Tema';
import { environment } from './../../../environments/environment.prod';
import { PostagensService } from './../../service/postagens.service';
import { Postagem } from './../../model/Postagem';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postagem-edit',
  templateUrl: './postagem-edit.component.html',
  styleUrls: ['./postagem-edit.component.css']
})
export class PostagemEditComponent implements OnInit {

  postagem: Postagem = new Postagem()
  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number

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

    let id = this.route.snapshot.params['id']
    this.findByIdPostagem(id)
    this.finsAllTemas()
  }

  findByIdPostagem(id: number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) =>{
      this.tema = resp
    })
  }

  finsAllTemas(){
    this.temaService.getAlltema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  atualizar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem atualizada com sucesso!')
      this.router.navigate(['/inicio'])
    })
  }
}
