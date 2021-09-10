import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';


import { PerfilComponent } from './perfil/perfil.component';
import { MenuComponent } from './menu/menu.component';
import { CriadoresComponent } from './criadores/criadores.component';
import { OProjetoComponent } from './o-projeto/o-projeto.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrarComponent } from './entrar/entrar.component';
import { IncioComponent } from './incio/incio.component';
import { TemaComponent } from './tema/tema.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';



const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path:'entrar', component: EntrarComponent},
  {path:'cadastrar', component: CadastrarComponent},

  {path: 'inicio', component: IncioComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'projeto', component: OProjetoComponent},
  {path: 'criadores', component: CriadoresComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'tema', component: TemaComponent},
  {path: 'tema-edit/:id', component: TemaEditComponent},
  {path: 'tema-delete/:idTema', component: TemaDeleteComponent},
  {path: 'postagem-edit/:id' , component: PostagemEditComponent},
  {path: 'postagem-delete/:id', component: PostagemDeleteComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
