import { Router } from '@angular/router';
import { User } from './../model/User';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {

  user: User = new User
  comfirmarSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit() {

    window.scroll(0,0)
  }

  confirmSenha(event: any) {
    this.comfirmarSenha = event.target.value
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
  }

  cadastrar() {
    this.user.tipo = this.tipoUsuario

    if (this.user.senhaUsuario != this.comfirmarSenha) {
      alert('As senhas não podem ser diferentes')
    } else {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/entrar'])
        alert('Usuario cadastrado com sucesso!')
      })
    }

  }

}
